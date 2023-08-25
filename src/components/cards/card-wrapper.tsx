import { Title } from "../title";
import { Tabs } from "../tabs/tab";
import React, { ReactNode } from "react";
import { Flex } from "../styles/layout.styles";
import { Spacer } from "../styles/spacer.styles";
import { StyledButton } from "../styles/button.styles";
import { StyledCard } from "../styles/cards/card.styles";
import { StyledTitleProps, TabValues } from "@/lib/types";

interface CardWrapperProps {
	children: ReactNode;
	title: string;
	buttonText?: string;
	tabs?: TabValues[];
	subTitle?: string;
	icon?: JSX.Element;
	titleStyles?: StyledTitleProps;
	onTabChange?: (tab: string) => void;
	cardStyles?: {
		padding?: string;
		height?: string;
		mdheight?: string;
		smheight?: string;
	};
	titleContainerBottomPadding?: string;
}

export const CardWrapper = ({
	children,
	title,
	buttonText,
	tabs,
	subTitle,
	titleStyles,
	cardStyles,
	icon,
	onTabChange,
	titleContainerBottomPadding,
}: CardWrapperProps) => {
	return (
		<StyledCard {...cardStyles}>
			<Flex>
				<Title
					text={title}
					subText={subTitle}
					icon={icon}
					titleStyles={{ fontWeight: "700", ...titleStyles }}
					paddingbottom={titleContainerBottomPadding}
				/>
				<Tabs tabs={tabs} onTabChange={onTabChange} />
			</Flex>

			<Spacer height="0.5rem" />

			{children}

			<Spacer height="0.5rem" />

			{buttonText ? <StyledButton>{buttonText}</StyledButton> : null}
		</StyledCard>
	);
};
