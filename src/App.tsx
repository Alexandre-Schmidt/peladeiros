import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GameProvider } from "./contexts/useGames";
import { MatchProvider } from "./contexts/useMatch";
import { ToastsProvider } from "./contexts/useToasts";
import { PlayerProvider } from "./contexts/usePlayers";

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
              <MatchProvider>
                <Router />
              </MatchProvider>
            </GameProvider>
          </PlayerProvider>
        </ToastsProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
