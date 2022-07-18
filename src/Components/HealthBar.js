import React from "react";

function HealthBar(props) {
  let style = {
    width: parseInt(props.health) + "%",
    backgroundColor:
      props.health > 25 ? "rgb(14, 150, 14)" : "rgb(117, 15, 15)",
  };
  return (
    <div className="health-bar-grey">
      <div id={props.id} className="health-bar-green" style={style}>
        {props.health}%
      </div>
    </div>
  );
}

export default HealthBar;
