import React, { useEffect } from "react";
import "./Modal.css";
import { constants } from "../constants/constants";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);
  if (!props.show) {
    return null;
  }

  return (
    <div
      className={`modal ${props.show ? "enter-done" : "exit"}`}
      onClick={props.onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <button id="closeDialog" onClick={props.onClose} className="button">
            {constants.CLOSE}
          </button>
          <button id="submitCard" onClick={props.onSubmit} className="button">
            {constants.SUBMIT}
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Modal);
