import React, { useState } from "react";

const Dictionary = () => {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definiton`);
  }
  
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <form onClick={search}>
      <input name="search" onChange={handleKeywordChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Dictionary;
