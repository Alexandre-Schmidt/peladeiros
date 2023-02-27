import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "../layouts/DefaultLayout";

import { Games } from "../pages/Games";
import { Welcome } from "../pages/Welcome";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/games" element={<Games />} />
      </Route>
    </Routes>
  );
}
