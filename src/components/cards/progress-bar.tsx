import React from "react";
import {
	StyledProgressbar,
	StyledProgressbarContainer,
} from "../styles/cards/progress-bar.styles";
import { CardData } from "./card-data";
import { StatsData } from "@/lib/types";
import { resolveProgressWidth } from "@/lib";

export const ProgressBar = ({ data }: { data: StatsData }) => {
	return (
		<StyledProgressbarContainer>
			<StyledProgressbar width={resolveProgressWidth(data?.count)} />
			<CardData data={data} />
		</StyledProgressbarContainer>
	);
};
