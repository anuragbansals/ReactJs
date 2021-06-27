import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { GamePage } from "./GamePage";
import { WinnerPage } from "./WinnerPage";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/game" component={GamePage} />
      <Route exact path="/winner" component={WinnerPage} />
    </BrowserRouter>
  );
}

export default App;
