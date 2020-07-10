import React from 'react';

// styled-components
import { HeaderContainer } from './header.styles';

export const Header = () => (
	<HeaderContainer>
		<div className='search-bar'>search bar</div>
		<div className="profile-dropdown">Profile Dropdown</div>
	</HeaderContainer>
);