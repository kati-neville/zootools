import React from "react";
import {
	StyledSubText,
	StyledTitle,
	TitleContainer,
} from "./styles/title.styles";
import { StyledTitleProps } from "@/lib/types";

interface TitleProps {
	text: string;
	subText?: string;
	titleStyles?: StyledTitleProps;
	icon?: JSX.Element;
}
export const Title = ({ text, titleStyles, subText, icon }: TitleProps) => {
	return (
		<TitleContainer>
			<StyledTitle {...titleStyles}>
				{text}
				{icon}
			</StyledTitle>

			<StyledSubText>{subText}</StyledSubText>
		</TitleContainer>
	);
};
