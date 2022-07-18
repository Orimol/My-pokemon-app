import React from "react";

function Dice({ player, points }) {
  let style = {
    marginTop: player === "p" ? "5%" : "10px",
  };
  return (
    <div>
      <p className="dice-text">
        {player === "p" ? "Player Dice" : "Opponent Dice"}
      </p>
      <div className="dice">
        <p>{points}</p>
      </div>
    </div>
  );
}

export default Dice;
/*<p className="dice-text" style={style}>*/
