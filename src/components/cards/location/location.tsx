"use client";

import { StatsData } from "@/lib/types";
import { CardWrapper } from "../card-wrapper";
import { ProgressBar } from "../progress-bar";
import React, { useEffect, useState } from "react";

export const Location = () => {
	const [tab, setTab] = useState("");
	const [data, setData] = useState<StatsData[]>([]);

	useEffect(() => {
		async function getSignUpStatsData() {
			const response = await fetch(`/api/signup-data?filter=${tab}`);
			const result: { data: StatsData[] } = await response.json();
			setData(result.data);
		}
		getSignUpStatsData();
	}, [tab]);

	return (
		<CardWrapper
			title="Sign up location"
			buttonText="See all countries"
			onTabChange={tab => setTab(tab)}
			tabs={[
				{ label: "Country", value: "country" },
				{ label: "City", value: "city" },
			]}>
			{data?.map((data, idx) => {
				return <ProgressBar key={data.name + idx} data={data} />;
			})}
		</CardWrapper>
	);
};
