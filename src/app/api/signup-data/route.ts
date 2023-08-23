import { StatsData } from "@/lib/types";
import { NextRequest } from "next/server";

const signupStatsData: StatsData[] = [
	{
		icon: "🇺🇸",
		name: "United States",
		count: 40000,
	},
	{
		icon: "🇩🇪",
		name: "Germany",
		count: 15000,
	},
	{
		icon: "🇳🇱",
		name: "Netherlands",
		count: 12000,
	},
	{
		icon: "🇮🇳",
		name: "India",
		count: 6000,
	},
	{
		icon: "🇯🇵",
		name: "Japan",
		count: 1000,
	},
	{
		icon: "🌏",
		name: "Other",
		count: 300,
	},
];

const signupStatsDataByCity: StatsData[] = [
	{
		icon: "🇺🇸",
		name: "New york",
		count: 30000,
	},
	{
		icon: "🇩🇪",
		name: "Bremen",
		count: 20000,
	},
	{
		icon: "🇳🇱",
		name: "Amsterdam",
		count: 10000,
	},
	{
		icon: "🇮🇳",
		name: "New Delhi",
		count: 5000,
	},
	{
		icon: "🇯🇵",
		name: "Tokyo",
		count: 3000,
	},
	{
		icon: "🌏",
		name: "Other",
		count: 2000,
	},
];

export async function GET(req: NextRequest) {
	const filter = req.nextUrl.searchParams.get("filter");

	return new Response(
		JSON.stringify({
			data: filter === "city" ? signupStatsDataByCity : signupStatsData,
		})
	);
}
