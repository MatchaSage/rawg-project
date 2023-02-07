import React from "react";
import { useState } from "react";

export default function Search() {
  async function fetchGameData() {
    const response = await fetch(
      "https://api.rawg.io/api/games?key=3649c080caa8421eb6efd3638ba5b10e",
      { mode: "cors" }
    );
    const data = await response.json();
    console.log(data);
  }

  const [gameSearch, setGameSearch] = useState();

  return (
    <div className="searchBlock">
      <h1>Game recommender</h1>
      <input
        type="text"
        name="gameSearch"
        value={gameSearch}
        placeholder="Search game.."
        onKeyDown={meme}
      ></input>
    </div>
  );
}
