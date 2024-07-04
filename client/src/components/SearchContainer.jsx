import { useState, useEffect } from "react";
import axios from "axios";
import SearchControls from "./SearchControls";
import SearchResult from "./SearchResult";

const SearchContainer = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [collection, setCollection] = useState("bikini");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/search?collection=${collection}`)
      .then((res) => setSearchResults(res.data));
  }, [collection]);

  return (
    <div className="flex flex-wrap mb-4">
      <SearchControls setCollection={setCollection} />
      {searchResults && searchResults.map((result) => (
        <SearchResult result={result} />
      ))}
    </div>
  );
};

export default SearchContainer;
