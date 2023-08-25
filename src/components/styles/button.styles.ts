import { device } from "@/lib/breakpoints";
import { theme } from "@/lib/theme";
import { styled } from "styled-components";

type StyledButtonProps = {
	padding?: string;
	backgroundcolor?: string;
};

export const StyledButton = styled.button<StyledButtonProps>`
	background-color: ${({ backgroundcolor }) =>
		backgroundcolor || theme.colors.zooGray200};
	padding: ${({ padding }) => padding || "0.7rem 1.5rem"};
	border-radius: 10px;
	width: fit-content;
	border: none;
	font-weight: 500;
	cursor: pointer;
	font-size: 0.9rem;
	transition: all 0.5s linear;

	&:hover {
		background-color: rgba(0, 0, 0, 0.09);
	}
	&:active {
		transform: scale(0.2);
	}

	@media ${device.md} {
		padding: ${({ padding }) => padding || "0.5rem 1.2rem"};
	}
`;
