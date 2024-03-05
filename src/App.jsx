import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Nav from "@/component/Nav";
import Home from "@/page/Home";
import Hub from "@/page/Hub";
import SwitchTransition from "@/component/Partials/SwitchTransition";
import Footer from "@/component/Footer";
import Picture from "@/page/Picture";
import Bingo from "@/page/Bingo";
import Puzzle from "@/page/Puzzle";
import Maze from "@/page/Maze";

import { breakpoints, colors } from "@/styles/vars";
import { AppLayout, Main } from "./styles";

function App() {
  const location = useLocation();

  return (
    <div id="app">
      <ThemeProvider
        theme={{
          colors: {
            ...colors,
          },
          breakpoints: {
            ...breakpoints,
          },
        }}
      >
        <SwitchTransition transitionKey={location.pathname} timeout={500}>
          <AppLayout $pathname={location.pathname} style={location.pathname.indexOf('maze') > -1 ? {background:'rgb(243, 246, 255)'} : {}}>
            <Nav />

            <Main>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/hub/:serial" element={<Hub />} />
                <Route path="/picture" element={<Picture />} />
                <Route path="/bingo" element={<Bingo />} />
                <Route path="/puzzle" element={<Puzzle />} />
                <Route path="/maze" element={<Maze />} />
              </Routes>
            </Main>

            <Footer />
          </AppLayout>
        </SwitchTransition>
      </ThemeProvider>
    </div>
  );
}

export default App;
