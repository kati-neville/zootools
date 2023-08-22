import React from "react";
import { CardWrapper } from "./card-wrapper";
import { ProgressBar } from "./progress-bar";

export const Behaviour = () => {
	return (
		<CardWrapper
			title="Behaviour"
			buttonText="See all countries"
			tabs={[
				{ label: "Browsers", value: "browsers" },
				{ label: "Decides", value: "decides" },
			]}>
			<ProgressBar />
			<ProgressBar />
			<ProgressBar />
			<ProgressBar />
			<ProgressBar />
			<ProgressBar />
		</CardWrapper>
	);
};
