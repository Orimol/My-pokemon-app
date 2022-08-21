function getPokemon() {
  const rand = Math.round(1 + Math.random() * 150);
  const imghref = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rand}.png`;
  return imghref;
}
export default getPokemon;
