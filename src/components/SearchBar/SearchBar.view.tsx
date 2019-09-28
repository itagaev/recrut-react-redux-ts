import * as React from "react";
import { SearchBarProps } from "./SearchBar.types";

export class SearchBar extends React.Component<SearchBarProps> {
  render() {
    const {
      valueCitySkill,
      valueSearchSkill,
      handleSearchItemChanged,
      handleSearchClicked
    } = this.props;
    return (
      <div>
        <input
          className="form-control m-2"
          value={valueSearchSkill}
          id="searchSkill"
          placeholder="Skill, for example JavaScript or C++"
          onChange={handleSearchItemChanged}
        />
        <input
          className="form-control m-2"
          value={valueCitySkill}
          id="searchCity"
          placeholder="City, for example Astana or Almaty"
          onChange={handleSearchItemChanged}
        />
        <button
          className="btn btn-primary m-2"
          onClick={handleSearchClicked}
          autoFocus
        >
          Search
        </button>
      </div>
    );
  }
}
