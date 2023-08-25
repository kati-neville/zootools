import LeaderBoard from "@/components/cards/leaderboard";
import { render, screen, waitFor } from "@testing-library/react";
import { mockLeaderData } from "../mocks/handlers";

describe("Test leaderboard section", () => {
	it("Rendering leaderboard data when the page loads", async () => {
		const { debug } = render(<LeaderBoard />);

		await waitFor(() => {
			expect(
				screen.getByText(mockLeaderData.data[0].email)
			).toBeInTheDocument();
			expect(
				screen.getByText(mockLeaderData.data[0].invitees)
			).toBeInTheDocument();
			expect(
				screen.getByText(mockLeaderData.data[0].country)
			).toBeInTheDocument();
		});

		debug();
	});
});
