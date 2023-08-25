import { styled } from "styled-components";
import { device } from "@/lib/breakpoints";
import { StyledTitleProps } from "@/lib/types";
import { theme } from "@/lib/theme";

export const StyledTitle = styled.h3<StyledTitleProps>`
  font-size: ${({ fontSize }) => fontSize || "1.5rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  color: ${({ color }) => color || theme.colors.zooBlack};
  display: flex;
  align-items: center;

  @media ${device.md} {
    font-size: 1.5rem;
  }
`;

export const StyledSubText = styled.span<StyledTitleProps>`
  font-size: ${({ fontSize }) => fontSize || "1.2rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  color: ${({}) => theme.colors.zooBlack};

  @media ${device.md} {
    font-size: 1.1rem;
  }
`;

export const TitleContainer = styled.span<StyledTitleProps>`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ paddingbottom }) => paddingbottom};
`;
