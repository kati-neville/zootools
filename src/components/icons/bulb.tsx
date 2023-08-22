import * as React from "react";
import { SVGProps } from "react";
const SvgBulb = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		data-name="1-10"
		viewBox="0 0 32 32"
		{...props}>
		<title>{"Idea"}</title>
		<path d="M16 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1ZM28.5 14.5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2ZM5.5 14.5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2ZM23.425 9.075a.993.993 0 0 0 .707-.293l1.414-1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707ZM7.868 8.782a1 1 0 0 0 1.414-1.414L7.868 5.954a1 1 0 1 0-1.414 1.414Z" />
		<path d="M21.669 9.166A8.5 8.5 0 1 0 10.646 22.1 3.457 3.457 0 0 1 12 24.744V27a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2.173a3.276 3.276 0 0 1 1.193-2.6 8.5 8.5 0 0 0 .476-13.059ZM18 27a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1h4Zm1.971-6.357A5.19 5.19 0 0 0 18.061 24H17v-4h1a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2h1v4h-1.056a5.546 5.546 0 0 0-2.039-3.456 6.5 6.5 0 1 1 8.066.1Z" />
	</svg>
);
export default SvgBulb;