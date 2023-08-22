import React, { ReactNode } from "react";
import StyledComponentsRegistry from "./registry";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export const Provider = ({ children }: { children: ReactNode }) => {
	return (
		<StyledComponentsRegistry>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</StyledComponentsRegistry>
	);
};
