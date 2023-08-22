import React from "react";
import { CardWrapper } from "./card-wrapper";
import { Title } from "../title";
import { Flex } from "../styles/layout.styles";
import { Tabs } from "../tabs/tab";
import { Spacer } from "../styles/spacer.styles";
import { TabValues } from "@/lib/types";
import { TabVariant } from "../styles/tabs/tabs.styles";
import SvgUsers from "../icons/users";

export const Graph = () => {
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

				<Tabs tabs={tabs} variant={TabVariant.SHADOWED} />
			</Flex>

			<Spacer height="3rem" />

			<CardWrapper
				title="100, 000"
				icon={
					<SvgUsers strokeWidth={2} style={{ marginLeft: 10 }} width={20} />
				}
				subTitle="Participants">
				<div></div>
			</CardWrapper>
		</>
	);
};
