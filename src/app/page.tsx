import { Metadata } from "next";
import HomePage from "./home";
import LeaderBoard from "@/components/cards/leaderboard";

export const metadata: Metadata = {
	title: "ZooTools insights",
	description:
		"View statistics and details about your marketing campaigns with ZooTools",
};

export default async function Home() {
	return <HomePage />;
}
