import React, { useEffect, useState } from "react";
import { CardWrapper } from "../card-wrapper";
import { ProgressBar } from "../progress-bar";
import { StatsData } from "@/lib/types";

export const Behaviour = () => {
  const [data, setData] = useState<StatsData[]>([]);
  const [tab, setTab] = useState("");

  useEffect(() => {
    async function getLeaderBoardData() {
      const response = await fetch(`/api/behaviour?filter=${tab}`);
      const result: { data: StatsData[] } = await response.json();

      setData(result.data);
    }

    getLeaderBoardData();
  }, [tab]);

  return (
    <CardWrapper
      title="Behaviour"
      buttonText="See all countries"
      onTabChange={(tab) => setTab(tab)}
      tabs={[
        { label: "Browsers", value: "browsers" },
        { label: "Decides", value: "decides" },
      ]}
    >
      {data?.map((data, idx) => {
        return <ProgressBar key={data.name + idx} data={data} />;
      })}
    </CardWrapper>
  );
};
