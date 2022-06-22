import React from "react";
import { BoardContext } from "./BoardContext";

export const BoardProvider = ({ children }) => {
  const [columns, setColumns] = React.useState([
    { title: "column1", cards: [{ title: "title1", dueDate: "2022-06-21" }] },
  ]);
  const submitCard = (id, newTitle, dueDate) => {
    setColumns((columns) => {
      const copy = [...columns];
      copy[id].cards.push({ title: newTitle, dueDate: dueDate });
      return copy;
    });
  };
  return (
    <BoardContext.Provider value={{ columns, setColumns, submitCard }}>
      {children}
    </BoardContext.Provider>
  );
};
