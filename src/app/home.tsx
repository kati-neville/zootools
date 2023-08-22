"use client";

import { Behaviour } from "@/components/cards/behaviour";
import { Graph } from "@/components/cards/graph";
import { Insights } from "@/components/cards/insights";
import { LeaderBoard } from "@/components/cards/leaderboard";
import { Location } from "@/components/cards/location";
import { Traffic } from "@/components/cards/traffic";
import { StyledDetailsSection } from "@/components/styles/cards/card.styles";
import { StyledContainer } from "@/components/styles/container.styles";
import { Spacer } from "@/components/styles/spacer.styles";

export const HomePage = () => {
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
};
