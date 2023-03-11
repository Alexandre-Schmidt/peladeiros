import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GameProvider } from "./contexts/useGames";

import { Router } from "./routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GameProvider>
          <Router />
        </GameProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
