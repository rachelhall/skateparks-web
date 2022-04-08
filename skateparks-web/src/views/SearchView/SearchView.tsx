import React, { useState } from "react";
import TextInput from "src/styleComponents/TextInput";
import { IPark, useParksQuery } from "src/generated/graphql";
import "./SearchView.scss";
import ListItem from "src/styleComponents/ListItem";
import SearchInput from "src/styleComponents/SearchInput";
import ParkSearchResult from "src/styleComponents/ParkSearchResult";
import { PARK_VIEW_ROUTE } from "src/apps/SkateparksApp/skateparksAppRoutes";
import { Link } from "react-router-dom";

interface IProps {}

export const SearchView: React.FC<IProps> = (props) => {
  const {} = props;
  const { data } = useParksQuery();
  const parks = data?.listParks.parks;

  const [inputValue, setInputValue] = useState("");

  const filteredParks = parks?.filter((park) => {
    if (inputValue.length > 0) {
      return park.title.toLowerCase().includes(inputValue.toLowerCase());
    } else return parks;
  });

  // const handleClick = () => {
  //   return PARK_VIEW_ROUTE;
  // };

  return (
    <div className="SearchView">
      <div className="SearchView-top">
        <SearchInput
          placeholder="Search"
          value={inputValue}
          onChange={(value) => {
            setInputValue(value);
          }}
          className="SearchView-searchbox"
        />
      </div>

      {filteredParks?.map((park, index) => (
        <Link
          key={index}
          to={PARK_VIEW_ROUTE}
          style={{ textDecoration: "none" }}
        >
          <ParkSearchResult
            // onClick={handleClick}
            city={park.city}
            description={park.description}
            image={park.imageUrl}
            state={park.state}
            title={park.title}
          />
        </Link>
      ))}
    </div>
  );
};

export default SearchView;
