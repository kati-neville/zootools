import { Traffic } from "@/components/cards/traffic";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockStatsData } from "../mocks/handlers";

describe("Traffic section", () => {
	it("Rendering traffic data when clicked on Source", async () => {
		const { debug } = render(<Traffic />);

		const buttonSource = screen.getByRole("radio", { name: /Source/ });
		expect(buttonSource).toBeInTheDocument();
		await userEvent.click(buttonSource);

		await waitFor(() => {
			expect(screen.getByText(/Cou/)).toBeInTheDocument();
			expect(screen.getByText(/100/)).toBeInTheDocument();
		});
	});
	it("Rendering traffic data when clicked on City", async () => {
		render(<Traffic />);

		const buttonCity = screen.getByRole("radio", { name: /City/ });

		await userEvent.click(buttonCity);
		await waitFor(() => {
			expect(screen.getByText(/Cou/)).toBeInTheDocument();
			expect(screen.getByText(/100/)).toBeInTheDocument();
		});
	});
});
