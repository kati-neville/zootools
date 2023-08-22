import React from "react";
import {
	StyledProgressbar,
	StyledProgressbarContainer,
} from "../styles/cards/progress-bar.styles";
import { CardData } from "./card-data";

export const ProgressBar = ({ width = "40%" }: { width?: string }) => {
	return (
		<StyledProgressbarContainer>
			<StyledProgressbar width={width!} />
			<CardData />
		</StyledProgressbarContainer>
	);
};
