import React from "react";
import SvgBulb from "../icons/bulb";
import { colors } from "@/lib/theme";
import { CardWrapper } from "./card-wrapper";
import SvgArrowDown from "../icons/arrow-down";
import { Bold, P } from "../styles/text.styles";
import { Spacer } from "../styles/spacer.styles";
import { IconWrapper } from "../styles/icon.styles";
import { Heading } from "../styles/cards/table.styles";
import { Flex, Grid, GridColumn } from "../styles/layout.styles";

export const Insights = () => {
  const fontSize = { default: "1.4rem", xs: "1rem" };

  return (
    <CardWrapper
      title="ZooTools insights"
      titleStyles={{ fontSize: "2rem" }}
      subTitle="Making analytics simple and actionable"
      cardStyles={{
        padding: "2.5rem",
        height: "27rem",
      }}
    >
      <Spacer height="4rem" mdheight="1rem" />

      <Grid>
        <GridColumn>
          <Heading
            as="h3"
            fontSize={fontSize}
            fontWeight="600"
            color={colors.zooBlack}
          >
            Summary
          </Heading>
          <Flex justifycontent="flex-start">
            <IconWrapper backgroundcolor={colors.zooRed100}>
              <SvgArrowDown />
            </IconWrapper>
            <P fontSize="1rem">
              <Bold>Sign ups are slowing down.</Bold> -5% new than last week
            </P>
          </Flex>
          <Flex justifycontent="flex-start">
            <IconWrapper backgroundcolor={colors.zooGreen100}>
              <SvgArrowDown style={{ transform: "rotate(180deg)" }} />
            </IconWrapper>
            <P fontSize="1rem">
              <Bold>80%</Bold> of your signups were invited by other members
            </P>
          </Flex>
          <Flex justifycontent="flex-start">
            <IconWrapper>
              <SvgBulb />
            </IconWrapper>
            <P fontSize="1rem">
              <Bold>80%</Bold> of your signups were invited by a friend
            </P>
          </Flex>
          <Flex justifycontent="flex-start">
            <IconWrapper>
              <SvgBulb />
            </IconWrapper>
            <P fontSize="1rem">
              <Bold>80%</Bold> of your signups were invited by a friend
            </P>
          </Flex>
        </GridColumn>
        <GridColumn height="50%">
          <Heading
            as="h3"
            fontSize={fontSize}
            fontWeight="600"
            color={colors.zooBlack}
          >
            Recommendation
          </Heading>

          <P fontSize="1rem">
            <Bold>Make sure to promote and share your form</Bold>
          </P>

          <P fontSize="1rem">
            <Bold>
              Congrats! This is huge. Keep giving rewards for your users.
            </Bold>
          </P>
        </GridColumn>
      </Grid>
    </CardWrapper>
  );
};
