import React, { useEffect, useState } from "react";
import { HealthBar } from "./index";
import getPokemon from "../Services/pokemonService";

const PlayerInfo = (props) => {
  const [health, setHealth] = useState(100);
  const [pokemon, setPokemon] = useState(getPokemon());
  const imgStyle = {
    animation: health <= 0 ? "Image-pokemon-spin infinite 1s linear" : "",
  };
  const spanstyle = {
    color: "#FFFFFF",
  };
  const didLost = (currentHealth) => {
    if (currentHealth <= 0) props.announceWinner(props.player.playerName);
  };

  const changeHealth = (damage) => {
    setHealth(health - damage < 0 ? 0 : health - damage);
    didLost(health - damage);
  };

  useEffect(() => {
    changeHealth(props.player.damage);
  }, [props.player.damage]);

  useEffect(() => {
    setHealth(100);
    setPokemon(getPokemon());
  }, [props.newGame]);
  /*
  dependecie array - apply the useEffect only when there is changes in one of the array arguments
  argument can be props or state
  */

  return (
    <div className={props.player.className}>
      <h1>
        <span style={spanstyle}>{props.player.playerName}</span>
      </h1>
      <HealthBar id={props.player.playerName} health={health}></HealthBar>
      <img
        className="image"
        style={imgStyle}
        src={pokemon}
        width="350"
        height="200"
        alt={`${props.player.playerName} pokemon`}
      />
    </div>
  );
};

export default PlayerInfo;
