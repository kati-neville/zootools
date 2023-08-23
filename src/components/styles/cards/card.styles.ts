import { device } from "@/lib/breakpoints";
import { styled } from "styled-components";

export const StyledCard = styled.div<{ padding?: string; height?: string }>`
	width: 100%;
	box-shadow: rgba(0, 0, 0, 0.125) 3px 3px 3px;
	background-color: ${({ theme }) => theme.colors.zooWhite};
	border-radius: 10px;
	padding: ${({ padding }) => padding || "1rem 2.5rem"};
	height: ${({ height }) => height || "29rem"};
	min-height: ${({ height }) => height || "29rem"};
	justify-content: space-between;
	display: flex;
	flex-direction: column;

	@media ${device.md} {
		padding: 2rem 1.6rem;
		height: auto;
		min-height: ${({ height }) => height || "30rem"};
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

export const StyledTooltip = styled.div`
	box-shadow: rgba(0, 0, 0, 0.125) 3px 3px 3px 3px;
	background-color: white;
	padding: 16px;
	border-radius: 10px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.zooGray300};
	border-style: solid;
	width: fit-content;

	@media ${device.md} {
		padding: 2px;
	}
`;

export const StyledGraphViewWrapper = styled.div`
	width: "100%";
	height: 24rem;
`;
