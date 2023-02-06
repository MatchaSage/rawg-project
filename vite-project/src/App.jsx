import { useState } from "react";
import "./style.css";
import Search from "./Components/Search.jsx";
import GameInfo from "./Components/GameInfo.jsx";

export default function App() {
  return (
    <div className="app">
      <Search />
      <GameInfo />
    </div>
  );
}
