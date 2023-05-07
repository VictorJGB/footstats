import ReactDOM from "react-dom/client";

import App from "./app/App.tsx";

import Theme from "./styles/Theme.ts";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyle.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
