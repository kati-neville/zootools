import { Title } from "../../title";
import { Tabs } from "../../tabs/tab";
import { TabValues } from "@/lib/types";
import React, { useState } from "react";
import SvgUsers from "../../icons/users";
import { GraphView } from "./graph-view";
import { CardWrapper } from "../card-wrapper";
import { Flex } from "../../styles/layout.styles";
import { Spacer } from "../../styles/spacer.styles";
import { TabVariant } from "../../styles/tabs/tabs.styles";

export const Graph = () => {
  const defaultTab = "30d";
  const [tab, setTab] = useState(defaultTab);

  const tabs: TabValues[] = [
    {
      label: "1h",
      value: "1h",
    },
    {
      label: "24h",
      value: "24h",
    },
    {
      label: "30d",
      value: "30d",
    },
    {
      label: "60d",
      value: "60d",
    },
  ];

  return (
    <>
      <Flex>
        <Title
          text="Summer referral competition"
          titleStyles={{ fontWeight: "600" }}
        />

        <Tabs
          tabs={tabs}
          variant={TabVariant.SHADOWED}
          onTabChange={(e) => setTab(e)}
          defaultTab={defaultTab}
        />
      </Flex>

      <Spacer height="3rem" />

      <CardWrapper
        title="100, 000"
        icon={
          <SvgUsers strokeWidth={2} style={{ marginLeft: 10 }} width={20} />
        }
        subTitle="Participants"
      >
        <GraphView tab={tab} />
      </CardWrapper>
    </>
  );
};
