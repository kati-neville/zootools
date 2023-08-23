import { Graphdata } from "@/lib/types";
import { NextRequest } from "next/server";

const graphdata: Graphdata[] = [
	{
		signupCount: 300,
	},
	{
		signupCount: 550,
	},
	{
		signupCount: 690,
	},
	{
		signupCount: 800,
	},
	{
		signupCount: 850,
	},
	{
		signupCount: 1000,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 1290,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 990,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 790,
	},

	{
		signupCount: 900,
	},
	{
		signupCount: 790,
	},

	{
		signupCount: 900,
	},
	{
		signupCount: 790,
	},

	{
		signupCount: 900,
	},
	{
		signupCount: 790,
	},

	{
		signupCount: 900,
	},

	{
		signupCount: 1000,
	},
	{
		signupCount: 1220,
	},
	{
		signupCount: 1400,
	},
	{
		signupCount: 1500,
	},
	{
		signupCount: 1550,
	},
	{
		signupCount: 1500,
	},
	{
		signupCount: 1900,
	},
	{
		signupCount: 2300,
	},
	{
		signupCount: 2000,
	},
	{
		signupCount: 3200,
	},
	{
		signupCount: 3230,
	},
];
const graphdataDoubleMonth: Graphdata[] = [
	{
		signupCount: 1290,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 990,
	},

	{
		signupCount: 1290,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 990,
	},

	{
		signupCount: 1290,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 990,
	},

	{
		signupCount: 1290,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 990,
	},

	{
		signupCount: 1290,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 990,
	},

	{
		signupCount: 1290,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 990,
	},

	{
		signupCount: 1290,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 990,
	},

	{
		signupCount: 1290,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 990,
	},

	{
		signupCount: 1290,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 990,
	},

	{
		signupCount: 1290,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 990,
	},

	{
		signupCount: 1290,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 990,
	},

	{
		signupCount: 1290,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 990,
	},

	{
		signupCount: 1290,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 990,
	},
	{
		signupCount: 790,
	},
	{
		signupCount: 790,
	},

	{
		signupCount: 900,
	},
	{
		signupCount: 790,
	},

	{
		signupCount: 900,
	},
	{
		signupCount: 790,
	},

	{
		signupCount: 900,
	},
	{
		signupCount: 790,
	},

	{
		signupCount: 900,
	},

	{
		signupCount: 1000,
	},
	{
		signupCount: 1220,
	},
	{
		signupCount: 1400,
	},
	{
		signupCount: 1500,
	},
	{
		signupCount: 1550,
	},
	{
		signupCount: 1500,
	},
	{
		signupCount: 1900,
	},
	{
		signupCount: 2300,
	},
	{
		signupCount: 2000,
	},
	{
		signupCount: 3200,
	},
	{
		signupCount: 3230,
	},
];

export async function GET(req: NextRequest) {
	const filter = req.nextUrl.searchParams.get("filter");

	const onehour = graphdata.slice(0, 6);
	const oneDay = graphdata.slice(0, 24);
	const responseData =
		filter === "1h"
			? onehour
			: filter === "24h"
			? oneDay
			: filter === "30d"
			? graphdata
			: graphdataDoubleMonth;

	return new Response(JSON.stringify({ data: responseData }));
}
