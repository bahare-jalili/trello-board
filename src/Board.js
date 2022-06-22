import React from "react";

function Board({ title, children }) {
  return (
    <>
      <div className="column">
        <p>{title}</p>
        {children}
      </div>
    </>
  );
}

export default Board;
