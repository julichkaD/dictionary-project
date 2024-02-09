import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            cols="30"
            rows="10"
          />
          <button type="submit">Search</button>
        </form>
        <div className="hint">suggested words: sunset, wine, vacation..</div>
      </section>
      <Results results={results} />
    </div>
  );
}

export default Dictionary;
