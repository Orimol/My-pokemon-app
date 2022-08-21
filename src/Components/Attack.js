import React, { useState, useEffect } from "react";
import { Dice } from "./index";

const Attack = ({ changeDice, newGame, isEndGame, players }) => {
  const [pdice, setPdice] = useState(null);
  const [odice, setOdice] = useState(null);

  const dice = [
    { player: players[0].playerName, points: pdice },
    { player: players[1].playerName, points: odice },
  ];

  useEffect(() => {
    setPdice(0);
    setOdice(0);
  }, [newGame]);

  const rollDice = () => {
    if (isEndGame) return;
    let rpdice = Math.floor(1 + Math.random() * 6);
    let rodice = Math.floor(1 + Math.random() * 6);
    changeDice([rpdice, rodice]);
    setPdice(rpdice);
    setOdice(rodice);
  };
  return (
    <div className="flex-dice-container">
      {dice.map((dice, diceIndex) => {
        return (
          <Dice
            key={diceIndex}
            className="flex-dice"
            player={dice.player}
            points={dice.points}
          ></Dice>
        );
      })}
      {/* <Dice className="flex-dice" player="p" points={pdice} />
      <Dice className="flex-dice" player="o" points={odice} /> */}
      <button className="flex-button" onClick={rollDice}>
        Attack!
      </button>
    </div>
  );
};

export default Attack;
