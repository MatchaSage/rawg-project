import React from "react";

export default function SearchResults(props) {
  let searchContainer = document.querySelector(".search-results");
  //   console.log(searchContainer);
  if (props.text !== "" && searchContainer !== null) {
    searchContainer.style.display = "flex";
  } else if (props.text === "" && searchContainer !== null) {
    searchContainer.style.display = "none";
  }
  return <div className="search-results">SearchResults</div>;
}
