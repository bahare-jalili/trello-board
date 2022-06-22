import React from "react";
import { BoardContext } from "./BoardContext";

export const BoardProvider = ({ children }) => {
  const [columns, setColumns] = React.useState([
    { title: "column1", cards: [{ title: "title1", time: "10000" }] },
    { title: "column2", cards: [{ title: "title2", time: "10000" }] },
    { title: "column3", cards: [{ title: "title3", time: "10000" }] },
    { title: "column4", cards: [{ title: "title4", time: "10000" }] },
  ]);
  return (
    <BoardContext.Provider value={{ columns, setColumns }}>
      {children}
    </BoardContext.Provider>
  );
};
