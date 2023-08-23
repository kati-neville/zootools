import { device } from "@/lib/breakpoints";
import { Flex } from "../layout.styles";
import { keyframes, styled } from "styled-components";

export const StyledProgressbarContainer = styled.div`
	width: 100%;
	height: 2.5rem;
	position: relative;

	@media ${device.xs} {
		height: 1.5rem;
	}
`;

const progressBar = keyframes` 
from {
    width: 0;
}
`;
export const StyledProgressbar = styled.div<{ width: string }>`
	background-color: ${({ theme }) => theme.colors.zooYellow100};
	height: 100%;
	width: ${({ width }) => width};
	position: absolute;
	border-radius: 10px;
	animation: ${progressBar} 1.5s linear;

	@media ${device.xs} {
		border-radius: 6px;
	}
`;

export const StyledTextWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0 0 0 1rem;
	justify-content: space-between;
`;
