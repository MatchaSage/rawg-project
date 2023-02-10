import React, { useState } from "react";
import SearchResults from "./SearchResults";

export default function Search() {
  const [gamesArray, setGamesArray] = useState([]);
  let searchText;

  function setSearchText() {
    let inputField = "";
    let inputValue = "";
    inputField = document.getElementsByClassName("game-input");
    inputValue = inputField[0].value;
    searchText = inputValue;
    handleGamesArray();
  }

  function handleGamesArray() {
    fetch(
      `https://api.rawg.io/api/games?key=3649c080caa8421eb6efd3638ba5b10e&search=${searchText}`
    )
      .then((response) => response.json())
      .then((json) => setGamesArray(json));
  }

  return (
    <div className="search-block">
      <h1>Game Recommender</h1>
      <input
        type="text"
        name="gameSearch"
        className="game-input"
        placeholder="Search game.."
        onChange={setSearchText}
      ></input>
      <SearchResults text={searchText} games={gamesArray} />
    </div>
  );
}
