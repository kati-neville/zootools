import React from "react";
import { P } from "../styles/text.styles";
import { StyledTextWrapper } from "../styles/cards/progress-bar.styles";
import { StatsData } from "@/lib/types";

export const CardData = ({ data }: { data?: StatsData }) => {
	return (
		<StyledTextWrapper>
			<P style={{ zIndex: 10 }}>
				{data?.icon} {data?.name}{" "}
			</P>
			<P style={{ zIndex: 10 }}>{data?.count?.toLocaleString()}</P>
		</StyledTextWrapper>
	);
};
