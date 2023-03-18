import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ApiContext from "./Context/ApiContext";
import AuthContext from "./Context/AuthContext";
import router from "./Routes/Router/router";
import { GlobalStyle } from "./Styled-component/Global-component";
import theme from "./Styled-component/Theme/Dark";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyle></GlobalStyle>
      <ApiContext>
        <AuthContext>
          <RouterProvider router={router} />
        </AuthContext>
      </ApiContext>
    </ThemeProvider>
  );
}

export default App;
