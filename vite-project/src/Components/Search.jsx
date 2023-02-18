import React, { useState, useEffect } from "react";
import SearchItems from "./SearchItems";

export default function Search() {
  const [gamesArray, setGamesArray] = useState([]);
  const [searchText, setSearchText] = useState("");

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=3649c080caa8421eb6efd3638ba5b10e&search=${searchText}`
    )
      .then((res) => res.json())
      .then((json) =>
        setGamesArray(
          json.results.slice(0, 5).map((game) => {
            return <SearchItems key={game.id} name={game.name} />;
          })
        )
      );
  }, [searchText]);

  return (
    <div className="search">
      <div className="input-container">
        <h1>Game Recommender</h1>
        <input
          type="text"
          name="gameSearch"
          className="game-input"
          placeholder="Search game.."
          value={searchText}
          onChange={handleChange}
        ></input>
      </div>
      <div className="search-container">{gamesArray}</div>
    </div>
  );
}
