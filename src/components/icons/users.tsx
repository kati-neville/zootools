import * as React from "react";
import { SVGProps } from "react";
const SvgUsers = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		aria-hidden="true"
		viewBox="0 0 20 18"
		{...props}>
		<path
			stroke="currentColor"
			d="M14 3a3 3 0 1 1-1.614 5.53M15 12a4 4 0 0 1 4 4v1h-3.348M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
		/>
	</svg>
);
export default SvgUsers;
