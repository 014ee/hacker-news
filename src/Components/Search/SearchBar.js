import React from 'react';
import { IconSearch } from '../../Assets/Icons';
import { SearchBlock, SearchInput, Area } from './Styles';

const SearchBar = function () {
  return (
    <SearchBlock>
      <SearchInput placeholder='Search' />
      <Area>
        <IconSearch />
      </Area>
    </SearchBlock>
  );
};

export default SearchBar;
