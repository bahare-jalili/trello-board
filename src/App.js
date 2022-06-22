import React from "react";
import "./App.css";
import Board from "./Board";
import { BoardProvider } from "./BoardProvider";
import Cards from "./Cards";
import TrelloBoard from "./TrelloBoard";

function App() {
  return (
    <BoardProvider>
      <TrelloBoard />
    </BoardProvider>
  );
}

export default App;
