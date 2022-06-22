import React, { useContext } from "react";
import Board from "./Board";
import Cards from "./Cards";
import { BoardContext } from "./BoardContext";

function TrelloBoard() {
  const [newTitle, setNewtitle] = React.useState("");
  const { columns, setColumns } = useContext(BoardContext);
  const handleChange = (e) => {
    setNewtitle(e.target.value);
  };
  const addNewColumn = (e) => {
    e.preventDefault();
    setColumns([...columns, { title: newTitle, cards: [] }]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Trello board</p>
        <input type="text" value={newTitle} onChange={handleChange} />
        <button onClick={addNewColumn}>create new column</button>
      </header>
      <div className="row body">
        <div className="board">
          {columns.map((column, index) => (
            <Board key={index} title={column.title}>
              <Cards cards={column.cards} />
            </Board>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrelloBoard;
