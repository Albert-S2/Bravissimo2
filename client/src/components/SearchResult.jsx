const SearchResult = ({ result }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <img src={result.colours[0].images.listing.src} />
      <div
        className="swatch border-2 border-black rounded m-auto mt-2 mb-2"
        style={{ backgroundColor: result.colours[0].swatch }}
      ></div>
      <h4>{result.styleName}</h4>
      <h5 className="text-sm">{result.colours[0].sizeRange}</h5>
    </div>
  );
};

export default SearchResult;
