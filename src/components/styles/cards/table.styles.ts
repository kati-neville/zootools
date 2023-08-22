import { device } from "@/lib/breakpoints";
import { styled } from "styled-components";

export const Table = styled.table`
	width: 100%;
	height: 80%;
	border-collapse: collapse;
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr`
	width: 100%;
	text-align: left;
`;

export const Heading = styled.th<{
	fontSize?: { xs: string; default: string };
	fontWeight?: string;
	color?: string;
}>`
	font-size: ${({ fontSize }) =>
		fontSize?.default ? fontSize.default : "1rem"};
	color: ${({ theme, color }) => color || theme.colors.zooGray400};
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};

	@media ${device.xs} {
		font-size: ${({ fontSize }) =>
			fontSize?.default ? fontSize.default : "0.8rem"};
	}
`;

export const TableData = styled(Heading)`
	font-size: 1rem;

	@media ${device.xs} {
		font-size: 0.8rem;
	}
`;

export const TBody = styled.tbody``;
