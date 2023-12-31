import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
const animationtime = {
  enter: 400,
  exit: 700,
};
const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationtime}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClose",
      }}
    >
      <div className={"Modal"}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
