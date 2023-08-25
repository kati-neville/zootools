import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={8} height={5} {...props}>
    <title>{"arrow_drop_down"}</title>
    <g fill="none" fillRule="evenodd">
      <path d="M-8-10h24v24H-8z" />
      <path
        fill="#ffffff"
        d="M.71 1.71 3.3 4.3c.39.39 1.02.39 1.41 0L7.3 1.71C7.93 1.08 7.48 0 6.59 0H1.41C.52 0 .08 1.08.71 1.71Z"
      />
    </g>
  </svg>
);
export default SvgArrowDown;
