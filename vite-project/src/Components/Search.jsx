import React, { useState, useEffect, useRef } from "react";
import SearchResults from "./SearchResults";

let gamesArray;

export default function Search() {
  const [gameSearch, setGameSearch] = useState("");
  let inputField = "";
  let inputValue = "";

  const searchRef = useRef(gameSearch);
  searchRef.current = gameSearch;

  async function getGameData(searchText) {
    try {
      let response = await fetch(
        `https://api.rawg.io/api/games?key=3649c080caa8421eb6efd3638ba5b10e&search=${searchText}&ordering=-metacritic`
      );
      let data = await response.json();
      return data.results;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      getGameData(gameSearch).then((games) => {
        gamesArray = games;
        console.log(gamesArray);
      });
    }, 500);
    return function () {
      clearTimeout(timeout);
    };
  }, [gameSearch]);

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
