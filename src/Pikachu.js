
import { useEffect, useState } from 'react';
import axios from 'axios';

function Pikachu() {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    // alert("hye ths is my revolver ");
    async function getData() {
      const res = await axios.get(
        `  https://pokeapi.co/api/v2/pokemon/${num} `
      );
      console.log(res);
      setMoves(res.data.name);
      setName(res.data.moves);
    }
    getData();
  });

  return (
    <div className="App">
      <h1>Pokemon</h1>

      <h1> {""}my name is <span style={{ color: "red" }}> {name} </span> </h1>
      <h1>{""}You choose <span style={{ color: "red" }}> {num} </span> value</h1>
      <br />
      <h1>{""} i have <span style={{ color: "green" }}> {moves} moves</span></h1>

      <select value={num} onChange={(event) => {
        setNum(event.target.value);
      }}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="6">6</option>

      </select>
    </div>
  );
}

export default Pikachu;
