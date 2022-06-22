import React, { useContext, useState } from "react";
import { BoardContext } from "../contextApi/BoardContext";
import { constants } from "../constants/constants";
import Modal from "../Modal/Modal";
import useShow from "../hooks/useShow";
import TextInput from "./TextInput";
import Error from "./Error";
import SelectInput from "./SelectInput";
import Card from "./Card";

function Cards({ cards, columnId }) {
  const { show: show, showModal: showModal, hideModal: hideModal } = useShow();
  const {
    show: show2,
    showModal: showModal2,
    hideModal: hideModal2,
  } = useShow();
  const { columns, editCard, moveCard } = useContext(BoardContext);
  const [dueDate, setDueDate] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("");
  const [id, setId] = useState("");
  const [card, setCard] = useState("");
  const [error, setError] = useState("");

  const onEdit = (e) => {
    if (!newTitle || !dueDate) {
      setError(constants.PLEASE_FILL_ALL_FIELDS);
    } else {
      setError("");
      hideModal();
      editCard(columnId, id, newTitle, dueDate);
    }
  };
  const onMove = (e) => {
    if (!selectedColumn) {
      setError(constants.PLEASE_SELECT_COLUMN);
    } else {
      setError("");
      moveCard(columnId, selectedColumn, id, card);
      hideModal2();
    }
  };
  const handleChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDueDate(e.target.value);
  };
  const onSelectColumn = (e) => {
    setSelectedColumn(e.target.value);
  };
  const editModal = () => {
    return (
      <Modal
        title={constants.EDIT}
        onClose={hideModal}
        show={show}
        onSubmit={onEdit}
      >
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
  const moveModal = () => {
    const otherColumns = columns.map((column, index) => {
      if (index != columnId)
        return (
          <option key={index} value={index}>
            {column.title}
          </option>
        );
    });
    return (
      <Modal
        title={constants.MOVE}
        onClose={hideModal2}
        show={show2}
        onSubmit={onMove}
      >
        <SelectInput
          data={otherColumns}
          value={selectedColumn}
          handleChange={onSelectColumn}
        />
        {error ? <Error text={error} /> : null}
      </Modal>
    );
  };
  const showEditModal = (e, card, index) => {
    showModal();
    setNewTitle(card.title);
    setDueDate(card.dueDate);
    setId(index);
  };
  const showMoveModal = (e, card, index) => {
    showModal2();
    setId(index);
    setCard(card);
  };
  return (
    <>
      {cards && cards.length
        ? cards.map((card, index) => (
            <Card
              key={index}
              cardId={index}
              card={card}
              onShowEditModal={showEditModal}
              onShowMoveModal={showMoveModal}
            />
          ))
        : null}
      {editModal()}
      {moveModal()}
    </>
  );
}

export default React.memo(Cards);
