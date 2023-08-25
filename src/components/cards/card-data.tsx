import React from "react";
import { P } from "../styles/text.styles";
import { StyledTextWrapper } from "../styles/cards/progress-bar.styles";
import { StatsData } from "@/lib/types";

export const CardData = ({ data }: { data?: StatsData }) => {
	return (
		<StyledTextWrapper>
			<P id="data-metric" style={{ zIndex: 10 }}>
				{data?.icon} {data?.name}{" "}
			</P>
			<P id="value" style={{ zIndex: 10 }}>
				{data?.count?.toLocaleString()}
			</P>
		</StyledTextWrapper>
	);
};
