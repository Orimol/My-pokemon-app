import React, { useEffect, useState } from "react";
import { HealthBar } from "./index";
import getPokemon from "./../Services/getPokemon";

function PlayerInfo(props) {
  const [health, setHealth] = useState(100);
  const [pokemon, setPokemon] = useState(getPokemon());
  const imgStyle = {
    // transform: health - props.damage <= 0 ? "rotate(90deg)" : "",
    animation: health <= 0 ? "Image-pokemon-spin infinite 1s linear" : "",
  };
  const spanstyle = {
    color: "#FFFFFF",
  };
  function changeHealth(damage) {
    setHealth(health - damage < 0 ? 0 : health - damage);
    didLost(health - damage);
  }

  function didLost(currentHealth) {
    if (currentHealth <= 0) props.announceWinner(props.playerName);
  }

  useEffect(() => {
    changeHealth(props.damage);
  }, [props.turn]);

  useEffect(() => {
    setHealth(100);
    setPokemon(getPokemon());
  }, [props.newGame]);
  /*
  dependecie array - apply the useEffect only when there is changes in one of the array arguments
  argument can be props or state
  */

  return (
    <div className={props.playerName}>
      <h1>
        <span style={spanstyle}>{props.playerName}</span>
      </h1>
      <HealthBar id={props.playerName} health={health}></HealthBar>
      <img
        className="image"
        style={imgStyle}
        src={pokemon}
        width="350"
        height="200"
      />
    </div>
  );
}

export default PlayerInfo;
