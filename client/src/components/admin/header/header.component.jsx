import React from 'react';

// styled-components
import { HeaderContainer } from './header.styles';
import { SearchBar } from 'components/global/search-bar/search-bar.component';

export const Header = () => (
	<HeaderContainer>
		<SearchBar className='search-bar' />
		<div className="profile-dropdown">Profile Dropdown</div>
	</HeaderContainer>
);