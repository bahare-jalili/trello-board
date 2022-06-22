import React, { useContext, useState } from "react";
import { BoardContext } from "../contextApi/BoardContext";
import { constants } from "../constants/constants";
import Modal from "../Modal/Modal";
import useShow from "../hooks/useShow";
import Button from "./Button";
import TextInput from "./TextInput";
import Error from "./Error";

function Board({ id, title, children }) {
  const { show: show, showModal: showModal, hideModal: hideModal } = useShow();
  const { submitCard, removeColumn } = useContext(BoardContext);
  const [dueDate, setDueDate] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [error, setError] = useState("");
  const handleChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDueDate(e.target.value);
  };
  const onSubmit = (e) => {
    if (!newTitle || !dueDate) {
      setError(constants.PLEASE_FILL_ALL_FIELDS);
    } else {
      setError("");
      hideModal();
      submitCard(id, newTitle, dueDate);
    }
  };
  const addModal = () => {
    return (
      <Modal title={title} onClose={hideModal} show={show} onSubmit={onSubmit}>
        <TextInput
          id="cardTitle"
          placeholder={constants.TITLE}
          type="text"
          value={newTitle}
          handleChange={handleChangeTitle}
        />
        <TextInput
          id="cardDueDate"
          placeholder={constants.DUE_DATE}
          type="date"
          value={dueDate}
          handleChange={handleChangeDate}
        />
        {error ? <Error text={error} /> : null}
      </Modal>
    );
  };
  const handleRemove = (e) => {
    removeColumn(id);
  };
  return (
    <>
      <div className="column">
        <p style={{ marginTop: "0" }}>{title}</p> {addModal()}
        {children}
        <Button
          className="addCard"
          style={{ marginTop: "20px" }}
          onClick={showModal}
          name={constants.ADD_CARD}
        />
        <Button
          className="removeColumn"
          style={{ marginTop: "20px" }}
          onClick={handleRemove}
          name={constants.REMOVE_COLUMN}
        />
      </div>
    </>
  );
}

export default React.memo(Board);
