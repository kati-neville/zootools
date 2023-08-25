"use client";

import { StatsData } from "@/lib/types";
import { CardWrapper } from "../card-wrapper";
import { ProgressBar } from "../progress-bar";
import React, { useEffect, useState } from "react";

export const Traffic = () => {
	const [data, setData] = useState<StatsData[]>([]);
	const [tab, setTab] = useState("");

	useEffect(() => {
		async function getTrafficBoardData() {
			const response = await fetch(`/api/traffic?filter=${tab}`);
			const result: { data: StatsData[] } = await response.json();
			setData(result.data);
		}

		getTrafficBoardData();
	}, [tab]);

	return (
		<CardWrapper
			title="Traffic"
			buttonText="See traffic sources"
			onTabChange={e => setTab(e)}
			tabs={[
				{ label: "Source", value: "source" },
				{ label: "City", value: "city" },
			]}>
			{data?.map((data, idx) => {
				return <ProgressBar key={data.name + idx} data={data} />;
			})}
		</CardWrapper>
	);
};
