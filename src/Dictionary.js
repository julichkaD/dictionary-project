import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";


function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
   setPhotos(response.data.photos);
  }
  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    //documentation: https://www.pexels.com/
    let pexelsApiKey =
      "vsBNNQJRg0HhErlsJXgAMFjpEEW70aYKWVDFOJOWXEjmxellsWukeEuE";
      let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
      let headers = { Authorization: `${pexelsApiKey}` };
      axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          {/* <button type="submit">Search</button> */}
        </form>
        <div className="hint">suggested words: sunset, wine, vacation..</div>
      </section>
      <Results results={results} />
      <Photos photos = {photos}/>
    </div>
  );
}

export default Dictionary;
