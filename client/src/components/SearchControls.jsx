import React from "react";

const SearchControls = ({ setCollection }) => {
  return (
    <div className="w-full m-4">
      <label htmlFor="collections">Collection:</label>
      <select
        name="collections"
        id="collections"
        className="m-4 ml-1"
        onChange={(e) => setCollection(e.target.value)}
      >
        <option value="bikini">Bikini</option>
        <option value="lingerie">Lingerie</option>
        <option value="sport">Sport</option>
      </select>

      <label htmlFor="itemLimit">Item Limit:</label>
      <select name="itemLimit" id="itemLimit" className="m-4 ml-1">
        <option value="all">All</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="40">40</option>
      </select>
    </div>
  );
};

export default SearchControls;
