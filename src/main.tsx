import ReactDOM from "react-dom/client";

import App from "./app/App.tsx";
import "./index.scss";

import Theme from "./styles/Theme.ts";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>
);
