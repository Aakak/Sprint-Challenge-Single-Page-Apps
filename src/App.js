import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <main>
      <Header />
      <Router>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/characters" component={CharacterList} />
      </Router>
    </main>
  );
}
