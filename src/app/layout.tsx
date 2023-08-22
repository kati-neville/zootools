"use client";

import { theme } from "@/lib/theme";
import { Karla } from "next/font/google";
import { Provider } from "@/lib/provider";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/components/styles/global";
import Head from "next/head";

const karla = Karla({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={karla.className}>
				<Provider>
					<GlobalStyles />
					{children}
				</Provider>
			</body>
		</html>
	);
}
