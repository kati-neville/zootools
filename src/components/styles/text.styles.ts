import { device } from "@/lib/breakpoints";
import { theme } from "@/lib/theme";
import { styled } from "styled-components";

export const P = styled.p<{ fontSize?: string; textalign?: string }>`
	font-size: ${({ fontSize }) => fontSize || "1.3rem"};
	color: ${({}) => theme.colors.zooGray400};
	text-align: ${({ textalign }) => textalign || "start"};

	@media ${device.md} {
		font-size: 1rem;
	}
`;

export const Bold = styled.span<{ color?: string }>`
	font-weight: 700;
	color: ${({ color }) => theme.colors.zooBlack || color};

	@media ${device.md} {
		font-weight: 400;
	}
`;
