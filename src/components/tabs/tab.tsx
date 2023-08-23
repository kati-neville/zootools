"use client";

import React, { useState } from "react";
import { TabValues } from "@/lib/types";
import { StyledTab, StyledTabs, TabVariant } from "../styles/tabs/tabs.styles";

interface TabsProps {
	tabs?: TabValues[];
	variant?: TabVariant;
	onTabChange?: (tab: string) => void;
	defaultTab?: string;
}

export const Tabs: React.FC<TabsProps> = ({
	tabs,
	variant,
	defaultTab,
	onTabChange,
}) => {
	const [activeTab, setActiveTab] = useState(defaultTab || tabs?.[0].value);
	function handleTabClick(tab: string) {
		setActiveTab(tab);
		onTabChange?.(tab);
	}

	return tabs?.length! > 0 ? (
		<StyledTabs variant={variant} onValueChange={handleTabClick}>
			{tabs?.map(tab => {
				return (
					<StyledTab
						key={tab.value}
						value={tab.value}
						variant={variant}
						$isactive={activeTab === tab.value}>
						{tab.label}
					</StyledTab>
				);
			})}
		</StyledTabs>
	) : null;
};
