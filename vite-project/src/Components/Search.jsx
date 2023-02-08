import React, { useState, useEffect, useRef } from "react";
import SearchResults from "./SearchResults";

export default function Search() {
  const [gameSearch, setGameSearch] = useState("");
  let inputField = "";
  let inputValue = "";

  const searchRef = useRef(gameSearch);
  searchRef.current = gameSearch;

  async function getGameData(searchText) {
    let response = await fetch(
      `https://api.rawg.io/api/games?key=3649c080caa8421eb6efd3638ba5b10e&search=${searchText}&ordering=-metacritic`
    );
    let data = await response.json();
    console.log(data);
    return data;
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      getGameData(searchRef.current);
    }, 500);

    return function () {
      clearTimeout(timeout);
    };
  }, [gameSearch]);

  function setSearch() {
    inputField = document.getElementsByClassName("game-input");
    inputValue = inputField[0].value;
    setGameSearch(inputValue);
    console.log(gameSearch);
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
