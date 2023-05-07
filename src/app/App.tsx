import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import MainLayout from "../components/layout/MainLayout";
import { routes } from "../routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
