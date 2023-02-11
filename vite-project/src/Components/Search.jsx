import React, { useState } from "react";
import SearchItems from "./SearchItems";

export default function Search() {
  function fetchApi() {
    fetch(
      `https://api.rawg.io/api/games?key=3649c080caa8421eb6efd3638ba5b10e&search=${searchText}`
    )
      .then((response) => response.json())
      .then((json) => setGamesArray(json));
  }

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
      <div className="search-container"></div>
    </div>
  );
}
