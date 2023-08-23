import { Metadata } from "next";
import { Karla } from "next/font/google";
import { Provider } from "@/lib/provider";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ZooTools insights",
	description:
		"View statistics and details about your marketing campaigns with ZooTools",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body className={karla.className}>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
