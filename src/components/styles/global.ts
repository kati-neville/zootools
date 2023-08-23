import { theme } from "@/lib/theme";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0
}
body {
    background-color: ${theme.colors.zooGray100};
    padding: 3rem 0rem;
}
`;

export default GlobalStyles;
