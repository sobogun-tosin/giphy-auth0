import React, { FormEvent, useState } from "react";
import "./Search.scss";
import { VscSearch } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Search = () => {
  const [item, setItems] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <form className="form-group" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search all the GIF and Stickers"
          name="item"
          value={item}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setItems(e.currentTarget.value)
          }
        />
        <Link to={`/search/${item}`}>
          <button>
            <VscSearch />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Search;
