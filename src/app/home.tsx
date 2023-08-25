"use client";

import { ReactNode } from "react";
import { Graph } from "@/components/cards/graph";
import { Traffic } from "@/components/cards/traffic";
import { Insights } from "@/components/cards/insights";
import { Location } from "@/components/cards/location";
import LeaderBoard from "@/components/cards/leaderboard";
import { Behaviour } from "@/components/cards/behaviour";
import { Spacer } from "@/components/styles/spacer.styles";
import { StyledContainer } from "@/components/styles/container.styles";
import { StyledDetailsSection } from "@/components/styles/cards/card.styles";

export default function HomePage({ children }: { children?: ReactNode }) {
	return (
		<StyledContainer>
			<Graph />

			<Spacer height="5rem" />

			<Insights />

			<Spacer height="5rem" />

			<StyledDetailsSection>
				<LeaderBoard />

				<Traffic />

				<Location />

				<Behaviour />
			</StyledDetailsSection>
		</StyledContainer>
	);
}
