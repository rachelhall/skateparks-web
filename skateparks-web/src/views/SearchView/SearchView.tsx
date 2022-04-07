import React, { useState } from "react";
import TextInput from "src/styleComponents/TextInput";
import { Park, useParksQuery } from "src/generated/graphql";
import "./SearchView.scss";
import ListItem from "src/styleComponents/ListItem";

interface IProps {}

export const SearchView: React.FC<IProps> = (props) => {
  const {} = props;
  const { data } = useParksQuery();
  const parks = data?.listParks.parks;

  const [inputValue, setInputValue] = useState("");
  const inputValueLowerCase = inputValue.toLowerCase();
  const returnArray: string[] = [];
  const parksReturn = parks?.forEach((park) => {
    if (
      inputValue.length > 0 &&
      park?.title.toLocaleLowerCase().includes(inputValueLowerCase)
    ) {
      returnArray.push(park.title);
    }
  });

  const returnArrayRender = returnArray.map((park) => {
    return <ListItem>{park}</ListItem>;
  });
  return (
    <div className="SearchView">
      <TextInput
        value={inputValue}
        onChange={(value) => {
          setInputValue(value);
        }}
        className="SearchView-searchbox"
      />
      <div>{returnArrayRender}</div>
    </div>
  );
};

export default SearchView;
