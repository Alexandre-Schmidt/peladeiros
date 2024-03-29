import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "../layouts/DefaultLayout";

import { CreateGame } from "../pages/CreateGame";
import { Games } from "../pages/Games";
import { Order } from "../pages/Order";
import { Players } from "../pages/Players";
import { Welcome } from "../pages/Welcome";
import { Match } from "../pages/Match";
import { Finish } from "../pages/Finish";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/games" element={<Games />} />
        <Route path="/games/create" element={<CreateGame />} />
        <Route path="/players" element={<Players />} />
        <Route path="/order" element={<Order />} />
        <Route path="/match" element={<Match />} />
        <Route path="/finish" element={<Finish />} />
      </Route>
    </Routes>
  );
}
