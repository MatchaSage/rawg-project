import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";

export default function Search() {
  const [gameSearch, setGameSearch] = useState("");
  const [gamesArray, setGamesArray] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fetchData = async () => {
        const result = await fetch(
          `https://api.rawg.io/api/games?key=3649c080caa8421eb6efd3638ba5b10e&search=${gameSearch}&ordering=-metacritic`
        );
        result.json().then((json) => {
          setGamesArray(json.results);
        });
      };
      fetchData();
    }, 500);

    return function () {
      clearTimeout(timeout);
    };
  }, [gameSearch]);

  function setSearch() {
    let inputField = "";
    let inputValue = "";
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
      <SearchResults text={gameSearch} array={gamesArray} />
    </div>
  );
}
