import { useState } from "react";

const Search = (props) => {
  // perform a task in response to an event
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // eslint-disable-next-line react/prop-types
    props.onSearch(event);
  };
  return (
    <div>
      <label htmlFor="search">Find Workout: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
};

export default Search;