import { styled } from "styled-components";

export enum TabVariant {
	SHADOWED = "shadowed",
	NON_SHADOWED = "non-shadowed",
}

export const StyledTabs = styled.div<{ variant?: TabVariant }>`
	display: flex;
	align-items: center;
	border-radius: 10px;
	box-shadow: ${({ variant }) =>
		variant === TabVariant.SHADOWED ? "rgba(0, 0, 0, 0.125) 0px 3px 3px" : ""};
	padding: 0.3rem 0.4rem;
	background-color: white;
`;

export const StyledTab = styled.button<{
	$isactive?: boolean;
	variant?: TabVariant;
}>`
	border-radius: 10px;
	width: fit-content;
	border: none;
	font-weight: ${({ variant }) =>
		variant === TabVariant.SHADOWED ? "600" : "500"};
	cursor: pointer;
	font-size: ${({ variant }) =>
		variant === TabVariant.SHADOWED ? "1rem" : "0.9rem"};
	padding: 0.5rem 0.7rem;
	margin: 0 4px;
	color: ${({ variant, theme }) =>
		variant === TabVariant.SHADOWED ? theme.colors.zooGray500 : ""};
	background-color: ${({ $isactive, theme, variant }) => {
		const isShadowedAndActive = variant === TabVariant.SHADOWED && $isactive;
		const isShadowedAndNotActive =
			variant === TabVariant.SHADOWED && !$isactive;
		const isNonShadowedAndActive = variant !== TabVariant.SHADOWED && $isactive;

		return isShadowedAndActive
			? theme.colors.zooGray300
			: isNonShadowedAndActive
			? theme.colors.zooGray200
			: isShadowedAndNotActive
			? theme.colors.zooGray100
			: "transparent";
	}};

	&:hover {
		background-color: ${({ variant, theme }) =>
			variant === TabVariant.SHADOWED
				? theme.colors.zooGray300
				: theme.colors.zooGray200};
	}
`;
