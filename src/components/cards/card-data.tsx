import React from "react";
import { P } from "../styles/text.styles";
import { StyledTextWrapper } from "../styles/cards/progress-bar.styles";

interface CardData {
	source: string;
	value: string;
}
export const CardData = ({ data }: { data?: CardData }) => {
	return (
		<StyledTextWrapper>
			<P style={{ zIndex: 10 }}>Neville </P>
			<P>2,000</P>
		</StyledTextWrapper>
	);
};
