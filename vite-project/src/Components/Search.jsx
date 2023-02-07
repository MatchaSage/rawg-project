import React, { useState, useEffect } from "react";

export default function Search() {
  const [gameSearch, setGameSearch] = useState("");
  let inputField = "";
  let inputValue = "";

  useEffect(() => {
    console.log(gameSearch);
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
<<<<<<< HEAD
        onKeyDown={meme}
=======
        onChange={setSearch}
>>>>>>> f533ecb4b6333e038ba4a6a2fd54f6a83be66c47
      ></input>
    </div>
  );
}
