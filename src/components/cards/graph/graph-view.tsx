"use client";

import React, { useEffect, useState } from "react";
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

	useEffect(() => {
		async function getLeaderBoardData() {
			const response = await fetch(`/api/graph?filter=${tab}`);
			const result: { data: Graphdata[] } = await response.json();

			setData(result.data);
		}

		getLeaderBoardData();
	}, [tab]);

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
						position={{ x: barData.x! - 50, y: barData.y! - 90 }}
						content={content => {
							const signupCount = content.payload?.[0]?.payload.signupCount;

							return (
								<StyledTooltip>
									<div className="custom-tooltip">
										<p className="intro">
											<Bold>{signupCount?.toLocaleString()}</Bold> signups
										</p>
										<P fontSize="1rem" textalign="center" className="desc">
											August 26
										</P>
									</div>
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
					/>
				</BarChart>
			</ResponsiveContainer>
		</StyledGraphViewWrapper>
	);
};
