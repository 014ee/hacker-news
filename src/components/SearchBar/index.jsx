import React from "react";

import { IconSearch } from "assets/icons";
import { SearchBlock, SearchInput, Area } from "./styles";

const SearchBar = function ({ tag, onChange }) {
  return (
    <SearchBlock>
      <SearchInput
        type="search"
        value={tag}
        onChange={onChange}
        placeholder="Search"
      />
      <Area>
        <IconSearch />
      </Area>
    </SearchBlock>
  );
};

export default React.memo(SearchBar);
