import React from "react";
import "./search-box.css";

const SearchBox = ({ handleSearch, placeholder, className }) => (
  <div>
    <input
      type="search"
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={handleSearch}
    />
  </div>
);

export default SearchBox;
