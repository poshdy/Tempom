import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="sticky left-[15%] flex-1 top-1 "
    >
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="flex items-center justify-between p-2 w-[20%] ">
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="bg-transparent text-white placeholder:text-white outline-none border-none "
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
      </div>
    </form>
  );
};
export default Searchbar;
