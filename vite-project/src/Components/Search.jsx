import React, { useState, useEffect } from "react";

export default function Search() {
  const [gameSearch, setGameSearch] = useState("");

  useEffect(() => {
    console.log("works!");
  }, [gameSearch]);

  function search() {
    setGameSearch((prev) => {
      return prev;
    });
  }

  return (
    <div className="searchBlock">
      <h1>Game recommender</h1>
      <input
        type="text"
        name="gameSearch"
        placeholder="Search game.."
        onKeyDown={search}
      ></input>
    </div>
  );
}
