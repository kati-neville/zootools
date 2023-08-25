import { device } from "@/lib/breakpoints";
import { styled } from "styled-components";

export const Flex = styled.div<{ justifycontent?: string; $nowrap?: boolean }>`
	display: flex;
	justify-content: ${({ justifycontent }) => justifycontent || "space-between"};
	align-items: center;
	width: 100%;

	@media ${device.md} {
		flex-direction: ${({ $nowrap }) => ($nowrap ? "row" : "column")};
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0.5rem;
	}
`;

export const Grid = styled.div`
	display: grid;
	height: 100%;
	grid-template-columns: repeat(2, 1fr);
	justify-content: space-between;

	@media ${device.md} {
		grid-template-columns: repeat(1, 1fr);
		gap: 3rem;
	}
`;

export const GridColumn = styled.div<{ height?: string }>`
	display: flex;
	flex-direction: column;
	height: ${({ height }) => height || "100%"};
	justify-content: space-between;
	align-items: flex-start;
	gap: 1rem;
`;
