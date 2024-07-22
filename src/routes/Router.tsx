import { Route, Routes } from "react-router-dom";
import CMTEntry from "../Pages/CMTEntry";
import CMTReport from "../Pages/CMTReport";
import CMTReturn from "../Pages/CMTReturn";
import CMTView from "../Pages/CMTView";

export const Router = () => (
  <Routes>
    <Route path="/" element={<CMTEntry />} />
    <Route path="/entry" Component={CMTEntry} />
    <Route path="/report" Component={CMTReport} />
    <Route path="/return" Component={CMTReturn} />
    <Route path="/view" Component={CMTView} />
  </Routes>
);
