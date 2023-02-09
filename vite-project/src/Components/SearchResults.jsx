import React from "react";

export default function SearchResults(props) {
  console.log(props.array);
  let searchContainer = document.querySelector(".search-results");
  if (props.text !== "" && searchContainer !== null) {
    searchContainer.style.display = "flex";
  } else if (props.text === "" && searchContainer !== null) {
    searchContainer.style.display = "none";
  }
  return <div className="search-results">SearchResults</div>;
}
