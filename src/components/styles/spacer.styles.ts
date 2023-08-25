import { device } from "@/lib/breakpoints";
import { styled } from "styled-components";

export const Spacer = styled.div<{ height: string; mdheight?: string }>`
	height: ${({ height }) => height};

	@media ${device.md} {
		height: ${({ mdheight }) => mdheight || "0.8rem"};
	}
`;
