import React from "react";
import {
	Heading,
	TBody,
	Table,
	TableData,
	TableHead,
	TableRow,
} from "../styles/cards/table.styles";
import { CardWrapper } from "./card-wrapper";

export const LeaderBoard = () => {
	return (
		<CardWrapper title="User leaderboard" buttonText="See leaderboard">
			<Table>
				<TableHead>
					<TableRow>
						<Heading>Email</Heading>
						<Heading>Friends invited</Heading>
						<Heading>Country</Heading>
					</TableRow>
				</TableHead>
				<TBody>
					<TableRow>
						<TableData as={"td"}>Nevil..@gmail.com</TableData>
						<TableData as={"td"}>Fanui</TableData>
						<TableData as={"td"}>Ghana</TableData>
					</TableRow>
					<TableRow>
						<TableData as={"td"}>Nevil..@gmail.com</TableData>
						<TableData as={"td"}>Fanui</TableData>
						<TableData as={"td"}>Ghana</TableData>
					</TableRow>
					<TableRow>
						<TableData as={"td"}>Nevil..@gmail.com</TableData>
						<TableData as={"td"}>Fanui</TableData>
						<TableData as={"td"}>Ghana</TableData>
					</TableRow>
					<TableRow>
						<TableData as={"td"}>Nevil..@gmail.com</TableData>
						<TableData as={"td"}>Fanui</TableData>
						<TableData as={"td"}>Ghana</TableData>
					</TableRow>
					<TableRow>
						<TableData as={"td"}>Nevil..@gmail.com</TableData>
						<TableData as={"td"}>Fanui</TableData>
						<TableData as={"td"}>Ghana</TableData>
					</TableRow>
				</TBody>
			</Table>
		</CardWrapper>
	);
};
