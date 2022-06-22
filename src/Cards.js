import React, { useContext } from "react";
import { BoardContext } from "./BoardContext";

function Cards({ cards }) {
  const { columns, setColumns, submitCard } = useContext(BoardContext);
  return (
    <>
      {cards && cards.length
        ? cards.map((card, index) => (
            <div key={index}>
              <span>{card.title}</span>
            </div>
          ))
        : null}
    </>
  );
}

export default Cards;
