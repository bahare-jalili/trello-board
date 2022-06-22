import React from "react";
import "./App.css";
import Board from "./Board";
import { BoardProvider } from "./BoardProvider";
import Cards from "./Cards";
import TrelloBoard from "./TrelloBoard";

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
