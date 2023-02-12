import React, { useState, useEffect } from "react";
import SearchItems from "./SearchItems";

export default function Search() {
  const [gamesArray, setGamesArray] = useState([]);
  const [containerGames, setContainerGames] = useState([]);
  let searchText;

  function fetchApi() {
    searchText = document.querySelector(".game-input").value;
    fetch(
      `https://api.rawg.io/api/games?key=3649c080caa8421eb6efd3638ba5b10e&search=${searchText}`
    )
      .then((response) => response.json())
      .then((json) => setGamesArray(json.results));
  }

  useEffect(() => {
    setContainerGames(
      gamesArray.slice(0, 5).map((game) => {
        return <SearchItems name={`${game.name}`} />;
      })
    );
  }, [gamesArray]);

  return (
    <div className="search">
      <div className="input-container">
        <h1>Game Recommender</h1>
        <input
          type="text"
          name="gameSearch"
          className="game-input"
          placeholder="Search game.."
          onChange={fetchApi}
        ></input>
      </div>
      <div className="search-container">{containerGames}</div>
    </div>
  );
}
