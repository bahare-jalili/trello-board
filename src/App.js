import React from "react";
import "./App.css";
import Board from "./components/Board";
import { BoardProvider } from "./contextApi/BoardProvider";
import Cards from "./components/Cards";
import TrelloBoard from "./components/TrelloBoard";

function App() {
  return (
    <div className="App">
      <BoardProvider>
        <TrelloBoard />
      </BoardProvider>
    </div>
  );
}

export default App;
