import { mockStatsData } from "@/mocks/handlers";
import userEvent from "@testing-library/user-event";
import { Location } from "@/components/cards/location/location";
import { render, screen, waitFor } from "@testing-library/react";

describe("Sign up location section", () => {
  it("Rendering signup location data when clicked on Country", async () => {
    const { debug } = render(<Location />);

    const buttonSource = screen.getByRole("radio", { name: /Country/ });
    expect(buttonSource).toBeInTheDocument();
    await userEvent.click(buttonSource);

    await waitFor(() => {
      expect(screen.getByText(mockStatsData.data[0].name)).toBeInTheDocument();
      expect(screen.getByText(mockStatsData.data[0].count)).toBeInTheDocument();
    });
  });

  it("Rendering signup location data when clicked on City", async () => {
    render(<Location />);

    const buttonSource = screen.getByRole("radio", { name: /City/ });
    expect(buttonSource).toBeInTheDocument();
    await userEvent.click(buttonSource);

    await waitFor(() => {
      expect(screen.getByText(mockStatsData.data[0].name)).toBeInTheDocument();
      expect(screen.getByText(mockStatsData.data[0].count)).toBeInTheDocument();
    });
  });
});
