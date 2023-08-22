import React from "react";
import { CardWrapper } from "./card-wrapper";
import { ProgressBar } from "./progress-bar";

export const Traffic = () => {
	return (
		<CardWrapper
			title="Traffic"
			buttonText="See traffic sources"
			tabs={[
				{ label: "Source", value: "source" },
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
