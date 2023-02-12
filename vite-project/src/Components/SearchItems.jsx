import React from "react";

export default function SearchItems(props) {
  console.log(props.name);
  return (
    <div className="search-items">
      <span>{props.name}</span>
    </div>
  );
}
