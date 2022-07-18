import React, { useState } from "react";
import { PlayerInfo, Attack, Popup } from "./index";

function BattleArena(props) {
  const [turn, setTurn] = useState([0, 0]);
  const [newGame, setNewGame] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [popup, setPopup] = useState(null);
  let currentLoser = null;
  let blockAttack = false;
  function changeDice(num) {
    setTurn([num[0], num[1]]);
  }
  function getWinner(loser) {
    blockAttack = true;
    setEndGame(true);
    if (loser === "player-pokemon") {
      currentLoser = loser;
      setPopup("opponent-pokemon");
    } else if (currentLoser === null) {
      setPopup("player-pokemon");
    }
    setTimeout(newGamef, 2500);
  }

  function newGamef() {
    setEndGame(false);
    setNewGame(newGame + 1);
  }

  function togglePop() {
    setPopup(null);
  }

  return (
    <div
      style={{
        backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/007/190/735/original/mma-octagon-arena-stage-background-free-vector.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",

        // width: "100%",
        // height: "100%",
      }}
    >
      <PlayerInfo
        className="player-pokemon"
        damage={turn[0]}
        turn={turn}
        announceWinner={getWinner}
        newGame={newGame}
      ></PlayerInfo>
      <PlayerInfo
        className="opponent-pokemon"
        damage={turn[1]}
        turn={turn}
        announceWinner={getWinner}
        newGame={newGame}
      ></PlayerInfo>
      {popup ? <Popup closePopup={togglePop} winner={popup} /> : null}
      <Attack
        changeDice={changeDice}
        newGame={newGame}
        blockAttack={endGame}
      ></Attack>
    </div>
  );
}

export default BattleArena;
