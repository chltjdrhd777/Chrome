import React from "react";
import "./SearchPage.scss";
import { useSelector } from "react-redux";
import { selectSearch } from "../redux/mainReducer";
import GoogleSearch from "../GoogleSearch";
import { Link } from "react-router-dom";
import Searchbar from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
function SearchPage() {
  const search = useSelector(selectSearch);
  const { data } = GoogleSearch(search.term);
  console.log(data);

  return (
    <div className="search">
      <div className="search_header">
        <Link to="/">
          <img
            className="search_logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>

        <div className="search_results">
          <Searchbar hideButtons />
          <div className="searchPage_options">
            <div className="search_optionIcon">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>

            <div className="search_optionIcon">
              <DescriptionIcon />
              <Link to="/news">News</Link>
            </div>
            <div className="search_optionIcon">
              <ImageIcon />
              <Link to="/images">Images</Link>
            </div>
            <div className="search_optionIcon">
              <LocalOfferIcon />
              <Link to="/shopping">Shopping</Link>
            </div>

            <div className="search_optionIcon">
              <RoomIcon />
              <Link to="/maps">Maps</Link>
            </div>

            <div className="searchPage_optionsRight">
              <div className="s_options">
                <Link to="/settings">Settings</Link>
              </div>

              <div className="s_options">
                <Link to="tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {search.term && (
        <div className="search_body">
          {data.items
            ? data.items.map((data) => (
                <div className="SeaerchPage_result">
                  <a href={data.link}>{data.displayLink}</a>
                  <a className="searchPage_result Title" href={data.link}>
                    <h2>{data.title}</h2>
                  </a>
                  <p className="searchPage_result Snippet">{data.snippet}</p>
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
