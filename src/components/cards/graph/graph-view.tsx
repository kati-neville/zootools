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
import * as RadixTooltip from "@radix-ui/react-tooltip";

export const GraphView = ({ tab }: { tab: string }) => {
  const [barData, setBarData] = useState<{
    data?: any;
    show?: boolean;
  }>({});
  const [data, setData] = useState<Graphdata[]>([]);

  useEffect(() => {
    async function getLeaderBoardData() {
      const response = await fetch(`/api/graph?filter=${tab}`);
      const result: { data: Graphdata[] } = await response.json();

      setData(result.data);
    }

    getLeaderBoardData();
  }, [tab]);

  useEffect(() => {
    const defaultTooltip = document.querySelector(".recharts-tooltip-wrapper");
    if (!defaultTooltip) return;
    // Init tooltip values
    const tooltipHeight = defaultTooltip.getBoundingClientRect().height;
    const tooltipWidth = defaultTooltip.getBoundingClientRect().width;
    const spaceForLittleTriangle = 20;

    // @ts-ignore
    defaultTooltip.style = `
		  transform: translate(${barData.data?.x}px, ${barData.data?.y}px);
		  pointer-events: none;  position: absolute;
		  top: -${tooltipHeight + spaceForLittleTriangle}px;
		  left: -${tooltipWidth / 2 - barData.data.width! / 2}px;
		  opacity: ${barData?.show ? "1" : 0};
		  transition: all 400ms ease 0s;
		`;
  }, [barData]);

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
              x: barData.data?.x! ?? 0,
              y: barData.data?.y! ?? 0,
            }}
            allowEscapeViewBox={{ x: true, y: false }}
            content={(content) => {
              const signupCount = content.payload?.[0]?.payload.signupCount;
              const period = content.payload?.[0]?.payload.period;

              return (
                <StyledTooltip>
                  <P>
                    <Bold>{signupCount?.toLocaleString()}</Bold> signups
                  </P>
                  <P fontSize="1rem" textalign="center" className="desc">
                    {period}
                  </P>
                </StyledTooltip>
              );
            }}
          />

          <Bar
            dataKey="signupCount"
            radius={50}
            fill={theme.colors.zooYellow200}
            onMouseOver={(data) => setBarData({ data: data, show: true })}
            onMouseLeave={(data) => setBarData({ data: data, show: false })}
            animationDuration={500}
          />
        </BarChart>
      </ResponsiveContainer>
    </StyledGraphViewWrapper>
  );
};
