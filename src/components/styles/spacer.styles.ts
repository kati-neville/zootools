import { styled } from "styled-components";

export const Spacer = styled.div<{ height: string }>`
	height: ${({ height }) => height};
`;
