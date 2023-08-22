import { device } from "@/lib/breakpoints";
import { styled } from "styled-components";

export const P = styled.p<{ fontSize?: string }>`
	font-size: ${({ fontSize }) => fontSize || "1.3rem"};
	color: ${({ theme }) => theme.colors.zooGray400};

	@media ${device.xs} {
		font-size: 1rem;
	}
`;

export const Bold = styled.span<{ color?: string }>`
	font-weight: 700;
	color: ${({ theme, color }) => theme.colors.zooBlack || color};

	@media ${device.xs} {
		font-weight: 500;
	}
`;
