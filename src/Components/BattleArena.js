import React, { useState } from "react";
import { PlayerInfo, Attack, Popup } from "./index";

const BattleArena = (props) => {
  const [damage, setTurn] = useState([0, 0]); //[userDamage, computerDamage]
  const [newGame, setNewGame] = useState(true);
  const [isEndGame, setIsEndGame] = useState(false);
  const [winner, setWinner] = useState(null);

  const players = [
    {
      playerName: "User",
      className: "flex-item-left",
      damage: damage[0],
      newGame: newGame,
    },
    {
      playerName: "Computer",
      className: "flex-item-right",
      damage: damage[1],
      newGame: newGame,
    },
  ];

  let currentLoser = null;

  const changeDice = (damages) => {
    setTurn([damages[0], damages[1]]); //damaged[userDamage, computerDamage]
  };
  const startNewGame = () => {
    setIsEndGame(false);
    setNewGame(!newGame);
  };
  const getWinner = (loser) => {
    setIsEndGame(true);
    if (loser === players[0].playerName /*"player-pokemon"*/) {
      currentLoser = loser;
      setWinner(players[1].playerName /*"opponent-pokemon"*/);
    } else if (currentLoser === null) {
      setWinner(players[0].playerName /*"player-pokemon"*/);
    }
    setTimeout(startNewGame, 2500);
  };

  const closePopUp = () => {
    setWinner(null);
  };

  return (
    <div className="flex-container">
      {players.map((player, playerIndex) => {
        return (
          <PlayerInfo
            key={playerIndex}
            player={player}
            announceWinner={getWinner}
            newGame={newGame}
          ></PlayerInfo>
        );
      })}
      <Attack
        className="flex-item-middle"
        changeDice={changeDice}
        newGame={newGame}
        isEndGame={isEndGame}
        players={players}
      ></Attack>
      {winner ? (
        <div className="flex-div">
          <Popup closePopup={closePopUp} winner={winner} />
        </div>
      ) : null}
    </div>
  );
};

export default BattleArena;
