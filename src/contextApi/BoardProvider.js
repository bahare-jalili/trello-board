import React, { useEffect } from "react";
import { BoardContext } from "./BoardContext";
const initialState = JSON.parse(localStorage.getItem("columns")) || [];
export const BoardProvider = ({ children }) => {
  const [columns, setColumns] = React.useState(initialState);
  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns]);
  const submitCard = (id, newTitle, dueDate) => {
    setColumns((columns) => {
      const copy = [...columns];
      copy[id].cards.push({ title: newTitle, dueDate: dueDate });
      return copy;
    });
  };
  const moveCard = (columnId, selectedColumn, cardId, card) => {
    setColumns((columns) => {
      const copy = [...columns];
      copy[selectedColumn].cards.push(card);
      copy[columnId].cards.splice(cardId, 1);
      return copy;
    });
  };
  const editCard = (columnId, cardId, newTitle, dueDate) => {
    setColumns((columns) => {
      const copy = [...columns];
      copy[columnId].cards[cardId] = { title: newTitle, dueDate: dueDate };
      return copy;
    });
  };
  const removeColumn = (id) => {
    setColumns((columns) => {
      const copy = [...columns];
      copy.splice(id, 1);
      return copy;
    });
  };
  return (
    <BoardContext.Provider
      value={{
        columns,
        setColumns,
        submitCard,
        moveCard,
        editCard,
        removeColumn,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
