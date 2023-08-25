import { Graph } from "@/components/cards/graph";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("recharts", () => {
	const OriginalModule = jest.requireActual("recharts");
	return {
		...OriginalModule,
		ResponsiveContainer: ({ children }: { children: any }) => (
			<OriginalModule.ResponsiveContainer width={800} height={800}>
				{children}
			</OriginalModule.ResponsiveContainer>
		),
	};
});

describe("Graph section", () => {
	it("Rendering the graph component when 1h is clicked", async () => {
		const UNIQUE_RECHARTS_BAR_CLASSNAME = "recharts-bar-rectangle";

		const { container, debug } = render(<Graph />);

		debug();
		const button1h = screen.getByRole("radio", { name: "1h" });
		expect(button1h).toBeInTheDocument();
		await userEvent.click(button1h);
	});

	// it("Rendering the graph component when 24h is clicked", async () => {
	// 	const { container } = render(<Graph />);
	// 	const graphBar = container.getElementsByClassName(
	// 		UNIQUE_RECHARTS_BAR_CLASSNAME
	// 	);
	// 	expect(graphBar.length).toBe(0);

	// 	expect(screen.getByRole("radio", { name: "24h" })).toBeInTheDocument();
	// });
	// it("Rendering the graph component when 30d is clicked", async () => {
	// 	const { container } = render(<Graph />);
	// 	const graphBar = container.getElementsByClassName(
	// 		UNIQUE_RECHARTS_BAR_CLASSNAME
	// 	);
	// 	expect(graphBar.length).toBe(0);
	// 	expect(screen.getByRole("radio", { name: "30d" })).toBeInTheDocument();
	// });
	// it("Rendering the graph component when 60d is clicked", async () => {
	// 	const { container } = render(<Graph />);
	// 	const graphBar = container.getElementsByClassName(
	// 		UNIQUE_RECHARTS_BAR_CLASSNAME
	// 	);
	// 	expect(graphBar.length).toBe(0);
	// 	expect(screen.getByRole("radio", { name: "60d" })).toBeInTheDocument();
	// });
});
