import React from 'react';

// styled components
import { Main, Container } from './admin-layout.styles';

// components
import { Sidebar } from 'components/sidebar/sidebar.component';
import { Header } from 'components/header/header.component';

const AdminLayout = ({ children }) => {
	return (
		<Container>
			<div class='menu-icon'>
				burger
			</div>
			<Sidebar />
			<Header>
				<div className='date'>Date</div>
				<div className='profile'>Profile</div>
			</Header>
			<Main>{children}</Main>
		</Container>
	);
};

export default AdminLayout;
