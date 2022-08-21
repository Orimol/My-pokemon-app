import React from "react";

const Dice = ({ player, points }) => {
  let style = {
    marginTop: player === "User" ? "5%" : "10px",
  };
  return (
    <div>
      <p className="dice-text">
        {`${player} Dice`}
        {/* {player === "p" ? "Player Dice" : "Opponent Dice"} */}
      </p>
      <div className="dice">
        <p>{points}</p>
      </div>
    </div>
  );
};

export default Dice;
