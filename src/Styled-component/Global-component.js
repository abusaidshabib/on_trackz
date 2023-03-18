import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0%;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
  line-height: 62.5%;
  font-family: 'Helvetica Neue', sans-serif;
  scroll-behavior: smooth;
}
`