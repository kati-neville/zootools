import { device } from "@/lib/breakpoints";
import { theme } from "@/lib/theme";
import { styled } from "styled-components";

export const IconWrapper = styled.div<{ backgroundcolor?: string }>`
	background-color: ${({ backgroundcolor }) =>
		backgroundcolor || theme.colors.zooYellow200};
	width: 30px;
	height: 30px;
	border-radius: 6px;
	padding: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;

	@media ${device.xs} {
		margin-bottom: 10px;
	}
`;
