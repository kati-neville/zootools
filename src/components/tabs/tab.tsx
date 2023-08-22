"use client";

import React from "react";
import { TabValues } from "@/lib/types";
import { StyledTab, StyledTabs, TabVariant } from "../styles/tabs/tabs.styles";

interface TabsProps {
	tabs?: TabValues[];
	variant?: TabVariant;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, variant }) => {
	return tabs?.length! > 0 ? (
		<StyledTabs variant={variant}>
			{tabs?.map(tab => {
				return (
					<StyledTab key={tab.value} variant={variant}>
						{tab.label}
					</StyledTab>
				);
			})}
		</StyledTabs>
	) : null;
};
