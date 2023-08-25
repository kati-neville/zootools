import { LeaderboardData } from "@/lib/types";

const leaderboardData: LeaderboardData[] = [
  {
    email: "paula.suarze@con.es",
    invitees: 6500,
    country: "USA",
  },
  {
    email: "laura.kenettest23@yahoo.com",
    invitees: 2300,
    country: "Monaco",
  },
  {
    email: "aaron.michael@arg.org",
    invitees: 1200,
    country: "Prague",
  },
  {
    email: "jeremy.runner@gmail.com",
    invitees: 900,
    country: "China",
  },
];

export async function GET() {
  return new Response(JSON.stringify({ data: leaderboardData }));
}
