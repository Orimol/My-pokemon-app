import React, { useState, useEffect } from "react";
import { Dice } from "./index";

function Attack({ changeDice, newGame, blockAttack }) {
  const [pdice, setPdice] = useState(null);
  const [odice, setOdice] = useState(null);

  useEffect(() => {
    setPdice(0);
    setOdice(0);
  }, [newGame]);

  return (
    <div className="flex-dice-container">
      <Dice className="flex-dice" player="p" points={pdice} />
      <Dice className="flex-dice" player="o" points={odice} />
      <button className="flex-button" onClick={rollDice}>
        Attack!
      </button>
    </div>
  );

  function rollDice() {
    if (blockAttack) return;
    let rpdice = Math.floor(1 + Math.random() * 6);
    let rodice = Math.floor(1 + Math.random() * 6);
    changeDice([rpdice, rodice]);
    setPdice(rpdice);
    setOdice(rodice);
  }
}

export default Attack;
/*className="flex-container"*/
