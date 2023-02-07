import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";

export default function Search() {
  const [gameSearch, setGameSearch] = useState("");
  let inputField = "";
  let inputValue = "";

  useEffect(() => {}, [gameSearch]);

  function setSearch() {
    inputField = document.getElementsByClassName("game-input");
    inputValue = inputField[0].value;
    setGameSearch(inputValue);
  }

  return (
    <div className="searchBlock">
      <h1>Game recommender</h1>
      <input
        type="text"
        name="gameSearch"
        className="game-input"
        placeholder="Search game.."
        onChange={setSearch}
      ></input>
      <SearchResults text={gameSearch} />
    </div>
  );
}
