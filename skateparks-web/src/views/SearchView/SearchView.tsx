import React, { useState } from "react";
import { IPark, useParksQuery } from "src/generated/graphql";
import "./SearchView.scss";
import SearchInput from "src/styleComponents/SearchInput";
import ParkSearchResult from "src/components/ParkSearchResult";
import { Link } from "react-router-dom";
import { PARK_VIEW_ROUTE } from "src/apps/SkateparksApp/skateparksAppRoutes";

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
          className="SearchView-Link"
          to={PARK_VIEW_ROUTE}
          state={{ park }}
          style={{ textDecoration: "none" }}
        >
          <ParkSearchResult key={index} park={park} />
        </Link>
      ))}
    </div>
  );
};

export default SearchView;
