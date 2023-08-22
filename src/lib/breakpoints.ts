import { css } from "styled-components";
import { Size } from "./types";

const size: Size = {
	xs: "400px", // for small screen mobile
	sm: "600px", // for mobile screen
	md: "900px", // for tablets
	lg: "1280px", // for laptops
	xl: "1440px", // for desktop / monitors
};

export const device = {
	xs: `(max-width: ${size.xs})`,
	sm: `(max-width: ${size.sm})`,
	md: `(max-width: ${size.md})`,
	lg: `(max-width: ${size.lg})`,
	xl: `(max-width: ${size.xl})`,
};
