import React, { useContext, useState } from "react";
import { BoardContext } from "./BoardContext";
import Modal from "./Modal/Modal";

function Board({ id, title, children }) {
  const { columns, setColumns, submitCard } = useContext(BoardContext);
  const [show, setShow] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [error, setError] = useState("");
  const showModal = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const hideModal = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const handleChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDueDate(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!newTitle || !dueDate) {
      setError("please fill all fiels");
    } else {
      setError("");
      setShow(false);
      submitCard(id, newTitle, dueDate);
    }
  };
  console.log("columnssssss", columns);
  return (
    <>
      <div className="column">
        <p>{title}</p> <button onClick={showModal}>add card</button>
        <Modal
          title={title}
          onClose={hideModal}
          show={show}
          onSubmit={onSubmit}
        >
          <input
            placeholder="title"
            type="text"
            value={newTitle}
            onChange={handleChangeTitle}
          />
          <input
            placeholder="due date"
            type="date"
            value={dueDate}
            onChange={handleChangeDate}
          />
          {error ? (
            <p style={{ color: "red", fontSize: "12px" }}>{error}</p>
          ) : null}
        </Modal>
        {children}
      </div>
    </>
  );
}

export default Board;
