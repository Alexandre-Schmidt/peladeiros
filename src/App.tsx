import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GameProvider } from "./contexts/useGames";
import { PlayerProvider } from "./contexts/usePlayers";
import { ToastsProvider } from "./contexts/useToasts";

import { Router } from "./routes";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ToastsProvider>
          <PlayerProvider>
            <GameProvider>
              <Router />
            </GameProvider>
          </PlayerProvider>
        </ToastsProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
