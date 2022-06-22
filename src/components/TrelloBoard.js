import React, { Suspense, useContext } from "react";
import { BoardContext } from "../contextApi/BoardContext";
import { constants } from "../constants/constants";
import TextInput from "./TextInput";
import Button from "./Button";
import Header from "./Header";
const Board = React.lazy(() => import("./Board.js"));
const Cards = React.lazy(() => import("./Cards.js"));

function TrelloBoard() {
  const [newTitle, setNewtitle] = React.useState("");
  const { columns, setColumns } = useContext(BoardContext);
  const handleChange = (e) => {
    setNewtitle(e.target.value);
  };
  const addNewColumn = (e) => {
    setColumns([...columns, { title: newTitle, cards: [] }]);
  };
  return (
    <>
      <Header />
      <div className="row body">
        <TextInput
          id="columnName"
          placeholder="column name"
          type="text"
          value={newTitle}
          handleChange={handleChange}
        />
        <Button
          className="addColumn"
          style={null}
          onClick={addNewColumn}
          name={constants.CREATE_NEW_COLUMN}
        />
      </div>
      <div className="row">
        <div className="board">
          {columns.map((column, index) => (
            <Suspense
              key={index}
              fallback={<div className="column">{constants.LOADING}</div>}
            >
              <Board id={index} title={column.title}>
                <Suspense fallback={<div>{constants.LOADING}</div>}>
                  <Cards cards={column.cards} columnId={index} />
                </Suspense>
              </Board>
            </Suspense>
          ))}
        </div>
      </div>
    </>
  );
}

export default React.memo(TrelloBoard);
