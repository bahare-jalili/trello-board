import React from "react";
import { constants } from "../constants/constants";
import Button from "./Button";
import CompareDate from "../utils/CompareDate";

function Card({ cardId, card, onShowEditModal, onShowMoveModal }) {
  return (
    <div className="cards">
      <span>
        {card.title} (
        <span style={{ color: CompareDate(card.dueDate) }}>{card.dueDate}</span>
        )
      </span>
      <Button
        className="edit"
        style={{ float: "right" }}
        onClick={(e) => onShowEditModal(e, card, cardId)}
        name={constants.EDIT}
      />
      <Button
        className="move"
        style={{ float: "right" }}
        onClick={(e) => onShowMoveModal(e, card, cardId)}
        name={constants.MOVE}
      />
    </div>
  );
}

export default React.memo(Card);
