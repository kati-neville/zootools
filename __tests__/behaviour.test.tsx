import { Behaviour } from "@/components/cards/behaviour";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockStatsData } from "../mocks/handlers";

describe("Behaviour section", () => {
	test("Rendering behaviour data when clicked on browsers", async () => {
		render(<Behaviour />);

		const buttonSource = screen.getByRole("radio", { name: /Browsers/ });
		expect(buttonSource).toBeInTheDocument();
		await userEvent.click(buttonSource);
		await waitFor(() => {
			expect(screen.getByText(/Cou/)).toBeInTheDocument();
			expect(screen.getByText(/100/)).toBeInTheDocument();
		});
	});
	it("Rendering behaviour data when clicked on Decides", async () => {
		render(<Behaviour />);

		const buttonCity = screen.getByRole("radio", { name: /Decides/ });
		expect(buttonCity).toBeInTheDocument();
		await userEvent.click(buttonCity);
		await waitFor(() => {
			// expect(screen.getByText(mockStatsData.data[0].name)).toBeInTheDocument();
			// expect(screen.getByText(mockStatsData.data[0].count)).toBeInTheDocument();
			expect(screen.getByText(/Cou/)).toBeInTheDocument();
			expect(screen.getByText(/100/)).toBeInTheDocument();
		});
	});
});
