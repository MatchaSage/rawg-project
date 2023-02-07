import React from "react";

export default function SearchResults(props) {
  let searchContainer = document.querySelector(".search-results");
  console.log(searchContainer);
  if (props.text !== "") {
    searchContainer.style.display = "flex";
  }
  return <div className="search-results">SearchResults</div>;
}
