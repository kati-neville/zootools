"use client";

import React, { useEffect, useState } from "react";
import {
	Heading,
	TBody,
	Table,
	TableData,
	TableHead,
	TableRow,
} from "../styles/cards/table.styles";
import { CardWrapper } from "./card-wrapper";
import { Spacer } from "../styles/spacer.styles";
import { LeaderboardData } from "@/lib/types";
import { formatEmail } from "@/lib";

const LeaderBoard = () => {
	const [data, setData] = useState<LeaderboardData[]>([]);

	useEffect(() => {
		async function getLeaderBoardData() {
			const response = await fetch(`/api/leaderboard`);
			const result: { leaderboardData: LeaderboardData[] } =
				await response.json();

			setData(result.leaderboardData);
		}

		getLeaderBoardData();
	}, []);

	return (
		<CardWrapper title="User leaderboard" buttonText="See leaderboard">
			<Spacer height="2rem" />

			<Table>
				<TableHead>
					<TableRow>
						<Heading>Email</Heading>
						<Heading>Friends invited</Heading>
						<Heading>Country</Heading>
					</TableRow>
				</TableHead>
				<TBody>
					{data?.map(({ country, invitees, email }, idx) => {
						return (
							<TableRow key={country + idx}>
								<TableData as={"td"}>{formatEmail(email)}</TableData>
								<TableData as={"td"}>{invitees.toLocaleString()}</TableData>
								<TableData as={"td"}>{country}</TableData>
							</TableRow>
						);
					})}
				</TBody>
			</Table>
		</CardWrapper>
	);
};

export default LeaderBoard;
