import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "../layouts/DefaultLayout";
import { Welcome } from "../pages/Welcome";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Welcome />} />
      </Route>
    </Routes>
  );
}
