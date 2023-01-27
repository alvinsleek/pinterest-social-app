import React from "react";
// create input to write our search item
// handle the input

function SearchBox({ search, setSearch }) {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Posts"
        value={search}
        onChange={handleSearch}
        className="mb-3 mx-2 mt-2"
      />
    </div>
  );
}

export default SearchBox;
