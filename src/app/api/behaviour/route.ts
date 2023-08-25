import { StatsData } from "@/lib/types";
import { NextRequest } from "next/server";

const behaviourData: StatsData[] = [
  {
    icon: "🇺🇸",
    name: "New york",
    count: 6000,
  },
  {
    icon: "🇩🇪",
    name: "Bremen",
    count: 26000,
  },
  {
    icon: "🇳🇱",
    name: "Amsterdam",
    count: 10200,
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
    count: 20000,
  },
];

const behaviourDataFiltered: StatsData[] = [
  {
    icon: "🇺🇸",
    name: "United States",
    count: 9000,
  },
  {
    icon: "🇩🇪",
    name: "Germany",
    count: 5000,
  },
  {
    icon: "🇳🇱",
    name: "Netherlands",
    count: 24400,
  },
  {
    icon: "🇮🇳",
    name: "India",
    count: 9300,
  },
  {
    icon: "🇯🇵",
    name: "Japan",
    count: 43000,
  },
  {
    icon: "🌏",
    name: "Other",
    count: 1200,
  },
];

export async function GET(req: NextRequest) {
  const filter = req.nextUrl.searchParams.get("filter");

  return new Response(
    JSON.stringify({
      data: filter === "decides" ? behaviourData : behaviourDataFiltered,
    }),
  );
}
