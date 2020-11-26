import React, { useState } from "react";
import "./Search.scss";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/Slices/searchSlice";

function Search({ hideButtons }) {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const history = useHistory();
  const Search = (e) => {
    e.preventDefault();
    history.push("./search");
    dispatch(setSearchTerm(input));
  };

  return (
    <form className="Search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search_buttons">
          <Button variant="outlined" onClick={Search} type="submit">
            Google Search
          </Button>

          <Button variant="outlined">I'm feeling good</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            variant="outlined"
            onClick={Search}
            type="submit"
            className="search_buttonsHidden"
          >
            Google Search
          </Button>

          <Button variant="outlined" className="search_buttonsHidden">
            I'm feeling good
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
