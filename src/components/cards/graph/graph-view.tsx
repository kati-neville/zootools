import React, { useEffect, useMemo, useRef, useState } from "react";
import {
	BarChart,
	Bar,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { theme } from "@/lib/theme";
import {
	StyledGraphViewWrapper,
	StyledTooltip,
} from "@/components/styles/cards/card.styles";
import { Graphdata } from "@/lib/types";
import { Bold, P } from "@/components/styles/text.styles";

export const GraphView = ({ tab }: { tab: string }) => {
	const [barData, setBarData] = useState<{ x?: number; y?: number }>({});
	const [data, setData] = useState<Graphdata[]>([]);
	const toolTipRef = useRef(null);

	useEffect(() => {
		async function getLeaderBoardData() {
			const response = await fetch(`/api/graph?filter=${tab}`);
			const result: { data: Graphdata[] } = await response.json();

			setData(result.data);
		}

		getLeaderBoardData();
	}, [tab]);

	//@ts-ignore
	const toolTipWidth = toolTipRef.current?.clientWidth;
	const memoToolTipWidth = useMemo(() => toolTipWidth, [toolTipWidth]);

	return (
		<StyledGraphViewWrapper>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart data={data} barCategoryGap={"30%"}>
					<CartesianGrid
						stroke={theme.colors.zooGray300}
						vertical={false}
						strokeDasharray="3 3"
					/>

					<Tooltip
						cursor={{ fill: "transparent" }}
						position={{
							x: barData.x! - (memoToolTipWidth - 20) / 2,
							y: barData.y! - 90,
						}}
						content={content => {
							const signupCount = content.payload?.[0]?.payload.signupCount;

							return (
								<StyledTooltip ref={toolTipRef}>
									<P>
										<Bold>{signupCount?.toLocaleString()}</Bold> signups
									</P>
									<P fontSize="1rem" textalign="center" className="desc">
										August 26
									</P>
								</StyledTooltip>
							);
						}}
					/>
					<Bar
						dataKey="signupCount"
						radius={50}
						fill={theme.colors.zooYellow200}
						onMouseOver={data => setBarData(data)}
						onMouseLeave={data => setBarData(data)}
						animationDuration={500}
					/>
				</BarChart>
			</ResponsiveContainer>
		</StyledGraphViewWrapper>
	);
};
