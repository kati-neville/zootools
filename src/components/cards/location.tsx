import React from "react";
import { CardWrapper } from "./card-wrapper";
import { ProgressBar } from "./progress-bar";

export const Location = () => {
	return (
		<CardWrapper
			title="Sign up location"
			buttonText="See all countries"
			tabs={[
				{ label: "Country", value: "country" },
				{ label: "City", value: "city" },
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
