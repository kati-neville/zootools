import { device } from "@/lib/breakpoints";
import { styled } from "styled-components";

export const StyledCard = styled.div<{ padding?: string; height?: string }>`
	width: 100%;
	box-shadow: rgba(0, 0, 0, 0.125) 3px 3px 3px;
	background-color: ${({ theme }) => theme.colors.zooWhite};
	border-radius: 10px;
	padding: ${({ padding }) => padding || "1rem 2.5rem"};
	min-height: ${({ height }) => height || "29rem"};
	justify-content: space-between;
	display: flex;
	flex-direction: column;

	@media ${device.sm} {
		padding: 2rem 1.6rem;
		min-height: 25rem;
		box-shadow: rgba(0, 0, 0, 0.125) 0px 3px 10px 3px;
	}
`;

export const StyledDetailsSection = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;

	@media ${device.sm} {
		grid-template-columns: repeat(1, 1fr);
	}
`;
