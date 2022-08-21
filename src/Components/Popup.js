import React from "react";
import "../Popup.css";

const Popup = (props) => {
  return (
    <div className="flex-item-middle, modal, modal_content">
      <span className="close" onClick={props.closePopup}>
        &times;
      </span>
      <h1>{`${props.winner} win!`}</h1>
    </div>
  );
};

export default Popup;
