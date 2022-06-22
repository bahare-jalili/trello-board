import React from "react";

function Cards({ cards }) {
  return (
    <>
      {cards.map((card, index) => (
        <p key={index}>{card.title}</p>
      ))}
    </>
  );
}

export default Cards;
