import React from "react";

export default function SearchResults(props) {
  if (props.games.results !== undefined) {
    console.log(props.games.results[0].name);
  }

  let searchContainer = document.querySelector(".search-results");
  if (props.text !== "" && searchContainer !== null) {
    searchContainer.style.display = "flex";
  } else if (props.text === "" && searchContainer !== null) {
    searchContainer.style.display = "none";
  }
  return (
    <div className="search-results">
      <h1>SearchResults</h1>
      <h2>
        {(() => {
          if (props.games.results !== undefined) {
            {
              return props.games.results[0].name;
            }
          }
        })()}
      </h2>
    </div>
  );
}
