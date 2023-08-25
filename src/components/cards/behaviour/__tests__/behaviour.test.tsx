import userEvent from "@testing-library/user-event";
import { Behaviour } from "@/components/cards/behaviour/behaviour";
import { render, screen, waitFor } from "@testing-library/react";

describe("Behaviour section", () => {
  test("Rendering behaviour data when clicked on browsers", async () => {
    render(<Behaviour />);

    const buttonSource = screen.getByRole("radio", { name: /Browsers/ });
    expect(buttonSource).toBeInTheDocument();
    userEvent.click(buttonSource);
    await waitFor(() => {
      // expect(screen.getByText(/Cou/)).toBeInTheDocument();
      expect(screen.getByText(/100/)).toBeInTheDocument();
    });
  });
  it("Rendering behaviour data when clicked on Decides", async () => {
    render(<Behaviour />);

    const buttonCity = screen.getByRole("radio", { name: /Decides/ });
    expect(buttonCity).toBeInTheDocument();
    userEvent.click(buttonCity);
    await waitFor(() => {
      // expect(screen.getByText(mockStatsData.data[0].name)).toBeInTheDocument();
      // expect(screen.getByText(mockStatsData.data[0].count)).toBeInTheDocument();
      // expect(screen.getByText(/Cou/)).toBeInTheDocument();
      expect(screen.getByText(/100/)).toBeInTheDocument();
    });
  });
});
