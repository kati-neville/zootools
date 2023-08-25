import { Graphdata, LeaderboardData, StatsData } from "@/lib/types";
import {
  DefaultBodyType,
  ResponseComposition,
  RestContext,
  RestRequest,
  rest,
} from "msw";

export const mockStatsData: { data: StatsData[] } = {
  data: [
    {
      icon: "🇺🇸",
      name: "Cou",
      count: 100,
    },
  ],
};

export const mockLeaderData: { data: LeaderboardData[] } = {
  data: [
    {
      email: "test@gmail.com",
      invitees: 100,
      country: "USA",
    },
  ],
};

export const mockStatsDataHandler = (
  req: RestRequest,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  return res(ctx.json<{ data: StatsData[] }>(mockStatsData));
};

export const graphDefaultSignupCount = 100;

export const handlers = [
  rest.get("/api/graph", (req, res, ctx) => {
    return res(
      ctx.json<Graphdata[]>([
        {
          signupCount: graphDefaultSignupCount,
          period: "August 26",
        },
      ]),
    );
  }),
  rest.get("/api/behaviour", mockStatsDataHandler),
  rest.get("/api/leaderboard", (req, res, ctx) => {
    return res(ctx.json<{ data: LeaderboardData[] }>(mockLeaderData));
  }),
  rest.get("/api/signup-data", mockStatsDataHandler),
  rest.get("/api/traffic", mockStatsDataHandler),
];
