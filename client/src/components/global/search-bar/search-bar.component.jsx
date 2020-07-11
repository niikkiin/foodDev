import React from 'react';

// styled-components
import { SearchBarContainer, SearchInput, SearchBarSubmit } from './search-bar.styles';

// icon
import { Icon } from '@iconify/react';
import bxSearchAlt from '@iconify/icons-bx/bx-search-alt';

export const SearchBar = () => {

  return (
    <SearchBarContainer>
      <div className="input-container">
        <SearchInput type="text" placeholder="Search For..." />
      </div>
      <SearchBarSubmit type="submit" className="btn">
        <Icon icon={bxSearchAlt} className='icon' />
      </SearchBarSubmit>
    </SearchBarContainer>
  );
}

