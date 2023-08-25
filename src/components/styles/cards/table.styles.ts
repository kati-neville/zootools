import { device } from "@/lib/breakpoints";
import { theme } from "@/lib/theme";
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
	/* vertical-align: top; */
`;

export const Heading = styled.th<{
	fontSize?: { xs: string; default: string };
	fontWeight?: string;
	color?: string;
	textalign?: string;
}>`
	font-size: ${({ fontSize }) =>
		fontSize?.default ? fontSize.default : "1rem"};
	color: ${({ color }) => color || theme.colors.zooGray400};
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
	align-items: flex-start;

	@media ${device.md} {
		font-size: ${({ fontSize }) =>
			fontSize?.default ? fontSize.default : "0.8rem"};
		padding-bottom: 5px;
	}

	@media ${device.xs} {
		text-align: ${({ textalign }) => textalign || "left"};
	}
`;

export const TableData = styled(Heading)`
	font-size: 1rem;

	@media ${device.md} {
		font-size: 0.8rem;
	}
`;

export const TBody = styled.tbody``;
