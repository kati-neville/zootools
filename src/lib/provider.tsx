"use client";

import React, { ReactNode } from "react";
import StyledComponentsRegistry from "./registry";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyles from "@/components/styles/global";

export const Provider = ({ children }: { children: ReactNode }) => {
	return (
		<StyledComponentsRegistry>
			<GlobalStyles />
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</StyledComponentsRegistry>
	);
};
