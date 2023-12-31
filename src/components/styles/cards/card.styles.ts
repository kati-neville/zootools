import { device } from "@/lib/breakpoints";
import { theme } from "@/lib/theme";
import { styled } from "styled-components";

export const StyledCard = styled.div<{
	padding?: string;
	height?: string;
	mdheight?: string;
	smheight?: string;
}>`
	width: 100%;
	box-shadow: rgba(0, 0, 0, 0.125) 3px 3px 3px;
	background-color: ${({}) => theme.colors.zooWhite};
	border-radius: 10px;
	padding: ${({ padding }) => padding || "1.5rem 2.5rem"};
	height: ${({ height }) => height || "29rem"};
	min-height: ${({ height }) => height || "29rem"};
	justify-content: space-between;
	display: flex;
	flex-direction: column;

	@media ${device.md} {
		padding: 2rem 1.6rem;
		height: ${({ mdheight }) => mdheight};
		min-height: ${({ mdheight }) => mdheight || "30rem"};
		box-shadow: rgba(0, 0, 0, 0.125) 0px 3px 10px 3px;
	}

	@media ${device.sm} {
		height: ${({ smheight }) => smheight};
	}
`;

export const StyledDetailsSection = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;

	@media ${device.md} {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const StyledTooltip = styled.div`
	box-shadow: rgba(0, 0, 0, 0.125) 3px 3px 3px 3px;
	background-color: ${theme.colors.zooWhite};
	padding: 16px;
	border-radius: 10px;
	border-width: 1px;
	border-bottom-width: 0px;
	border-color: ${theme.colors.zooGray300};
	border-style: solid;
	width: fit-content;

	&::after {
		content: "";
		height: 0;
		width: 0;
		position: absolute;
		bottom: -10px;
		left: 50%;
		transform: translateX(-50%);
		border-style: solid;
		border-width: 10px 10px 0 10px;
		border-top-color: white;
		border-color: ${theme.colors.zooWhite} transparent transparent transparent;
	}

	@media ${device.md} {
		padding: 2px;
	}
`;

export const StyledGraphViewWrapper = styled.div`
	width: "100%";
	height: 21rem;
`;
