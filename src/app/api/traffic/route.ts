import { StatsData } from "@/lib/types";
import { NextRequest } from "next/server";

const trafficData: StatsData[] = [
	{
		name: "Google",
		count: 30000,
	},
	{
		name: "Twitter",
		count: 20000,
	},
	{
		name: "Facebook",
		count: 10000,
	},
	{
		name: "LinkedIn",
		count: 5000,
	},
	{
		name: "YouTube",
		count: 3000,
	},
	{
		name: "Other",
		count: 2000,
	},
];

const trafficDataByCity: StatsData[] = [
	{
		name: "Google, Carlifornia",
		count: 40000,
	},
	{
		name: "Twitter, San Jose",
		count: 30000,
	},
	{
		name: "Facebook, Accra",
		count: 15000,
	},
	{
		name: "LinkedIn, Miami",
		count: 7000,
	},
	{
		name: "YouTube, Sydney",
		count: 1700,
	},
	{
		name: "Other",
		count: 200,
	},
];
export async function GET(req: NextRequest) {
	const filter = req.nextUrl.searchParams.get("filter");

	return new Response(
		JSON.stringify({
			data: filter === "city" ? trafficDataByCity : trafficData,
		})
	);
}
