import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  #root {
    max-width: 500px;
    margin: auto;
  }
`;

export default GlobalStyle;
