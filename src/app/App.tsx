import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../routes";

import MainLayout from "../components/layout/MainLayout";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"pt-br"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {routes}
          </Route>
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
