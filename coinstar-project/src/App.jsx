import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CoinSummaryPage } from "./pages/CoinSummaryPage";
import { CoinDetailPage } from "./pages/CoinDetailPage";
import { Header } from "./components/Header";
import "./App.css";
import { WatchListContextProvider } from "./context/watchListContext";

export const App = () => {
  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={CoinSummaryPage} />
          <Route path="/coins/:id" component={CoinDetailPage} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};
