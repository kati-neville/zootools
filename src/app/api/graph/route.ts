import { Graphdata } from "@/lib/types";
import { NextRequest } from "next/server";

const graphHourData: Graphdata[] = [
  {
    signupCount: 10,
    period: "09:00pm",
  },
  {
    signupCount: 40,
    period: "09:10pm",
  },
  {
    signupCount: 24,
    period: "09:20pm",
  },
  {
    signupCount: 50,
    period: "09:30pm",
  },
  {
    signupCount: 100,
    period: "09:50pm",
  },
];

const graphDayData: Graphdata[] = [
  {
    signupCount: 390,
    period: "08:00pm; Aug 26",
  },
  {
    signupCount: 590,
    period: "08:30pm; Aug 26",
  },
  {
    signupCount: 400,
    period: "09:00pm; Aug 26",
  },
  {
    signupCount: 990,
    period: "09:30pm; Aug 26",
  },
  {
    signupCount: 790,
    period: "10:00pm; Aug 26",
  },
  {
    signupCount: 790,
    period: "10:30pm; Aug 26",
  },

  {
    signupCount: 900,
    period: "11:00pm; Aug 26",
  },
  {
    signupCount: 790,
    period: "11:30pm; Aug 26",
  },

  {
    signupCount: 900,
    period: "12:00pm; Aug 26",
  },
  {
    signupCount: 790,
    period: "12:30pm; Aug 26",
  },

  {
    signupCount: 900,
    period: "13:00pm; Aug 26",
  },
  {
    signupCount: 790,
    period: "13:30pm; Aug 26",
  },

  {
    signupCount: 900,
    period: "14:00pm; Aug 26",
  },

  {
    signupCount: 1000,
    period: "14:30pm; Aug 26",
  },
  {
    signupCount: 1220,
    period: "15:00pm; Aug 26",
  },
  {
    signupCount: 1400,
    period: "15:30pm; Aug 26",
  },
  {
    signupCount: 1500,
    period: "16:00pm; Aug 26",
  },
  {
    signupCount: 1550,
    period: "16:30pm; Aug 26",
  },
  {
    signupCount: 1500,
    period: "17:00pm; Aug 26",
  },
  {
    signupCount: 1900,
    period: "17:00pm; Aug 26",
  },
  {
    signupCount: 2300,
    period: "17:30pm; Aug 26",
  },
  {
    signupCount: 2000,
    period: "18:00pm; Aug 26",
  },
  {
    signupCount: 3200,
    period: "18:30pm; Aug 26",
  },
  {
    signupCount: 3230,
    period: "19:30pm; Aug 26",
  },
];

const graphdata: Graphdata[] = [
  {
    signupCount: 300,
    period: "July 28",
  },
  {
    signupCount: 550,
    period: "July 29",
  },
  {
    signupCount: 690,
    period: "July 30",
  },
  {
    signupCount: 800,
    period: "July 31",
  },
  {
    signupCount: 850,
    period: "August 01",
  },
  {
    signupCount: 1000,
    period: "August 02",
  },
  {
    signupCount: 790,
    period: "August 03",
  },
  {
    signupCount: 1290,
    period: "August 04",
  },
  {
    signupCount: 790,
    period: "August 05",
  },
  {
    signupCount: 990,
    period: "August 06",
  },
  {
    signupCount: 790,
    period: "August 07",
  },
  {
    signupCount: 790,
    period: "August 08",
  },

  {
    signupCount: 900,
    period: "August 09",
  },
  {
    signupCount: 790,
    period: "August 10",
  },

  {
    signupCount: 900,
    period: "August 11",
  },
  {
    signupCount: 790,
    period: "August 12",
  },

  {
    signupCount: 900,
    period: "August 13",
  },
  {
    signupCount: 790,
    period: "August 14",
  },

  {
    signupCount: 900,
    period: "August 15",
  },

  {
    signupCount: 1000,
    period: "August 16",
  },
  {
    signupCount: 1220,
    period: "August 17",
  },
  {
    signupCount: 1400,
    period: "August 18",
  },
  {
    signupCount: 1500,
    period: "August 19",
  },
  {
    signupCount: 1550,
    period: "August 20",
  },
  {
    signupCount: 1500,
    period: "August 21",
  },
  {
    signupCount: 1900,
    period: "August 22",
  },
  {
    signupCount: 2300,
    period: "August 23",
  },
  {
    signupCount: 2000,
    period: "August 24",
  },
  {
    signupCount: 3200,
    period: "August 25",
  },
  {
    signupCount: 3230,
    period: "August 26",
  },
];

const graphdataDoubleMonth: Graphdata[] = [
  {
    signupCount: 3290,
    period: "August 27",
  },
  {
    signupCount: 3790,
    period: "August 28",
  },
  {
    signupCount: 3990,
    period: "August 29",
  },

  {
    signupCount: 3290,
    period: "August 30",
  },
  {
    signupCount: 3790,
    period: "August 31",
  },
  {
    signupCount: 4190,
    period: "September 01",
  },

  {
    signupCount: 4290,
    period: "September 02",
  },
  {
    signupCount: 4790,
    period: "September 03",
  },
  {
    signupCount: 4890,
    period: "September 04",
  },

  {
    signupCount: 4290,
    period: "September 05",
  },
  {
    signupCount: 4790,
    period: "September 06",
  },
  {
    signupCount: 4990,
    period: "September 07",
  },

  {
    signupCount: 5290,
    period: "September 08",
  },
  {
    signupCount: 4790,
    period: "September 09",
  },
  {
    signupCount: 4990,
    period: "September 10",
  },

  {
    signupCount: 3290,
    period: "September 11",
  },
  {
    signupCount: 3790,
    period: "September 12",
  },
  {
    signupCount: 4990,
    period: "September 13",
  },

  {
    signupCount: 4290,
    period: "September 14",
  },
  {
    signupCount: 4790,
    period: "September 15",
  },
  {
    signupCount: 3990,
    period: "September 16",
  },

  {
    signupCount: 4290,
    period: "September 17",
  },
  {
    signupCount: 3790,
    period: "September 18",
  },
  {
    signupCount: 3990,
    period: "September 19",
  },

  {
    signupCount: 3290,
    period: "September 20",
  },
  {
    signupCount: 3790,
    period: "September 21",
  },
  {
    signupCount: 3990,
    period: "September 22",
  },

  {
    signupCount: 4290,
    period: "September 23",
  },
  {
    signupCount: 4790,
    period: "September 24",
  },
  {
    signupCount: 4990,
    period: "September 25",
  },

  {
    signupCount: 5290,
    period: "September 26",
  },
  {
    signupCount: 4790,
    period: "September 27",
  },
  {
    signupCount: 4990,
    period: "September 28",
  },

  {
    signupCount: 5290,
    period: "September 29",
  },
];

export async function GET(req: NextRequest) {
  const filter = req.nextUrl.searchParams.get("filter");

  const responseData =
    filter === "1h"
      ? graphHourData
      : filter === "24h"
      ? graphDayData
      : filter === "30d"
      ? graphdata
      : [...graphdata, ...graphdataDoubleMonth];

  return new Response(JSON.stringify({ data: responseData }));
}
