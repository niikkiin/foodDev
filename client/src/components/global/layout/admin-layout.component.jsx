import React from 'react';

// styled components
import { Main, Container, Title } from './admin-layout.styles';

// components
import { Sidebar } from 'components/admin/sidebar/sidebar.component';
import { Header } from 'components/admin/header/header.component';

const AdminLayout = ({ children, title }) => {
	return (
		<Container>
			<div class='menu-icon'>burger</div>
			<Sidebar />
			<Header>
				<div className='date'>Date</div>
				<div className='profile'>Profile</div>
			</Header>
			<Main>
				<Title>{title}</Title>
				{children}
			</Main>
		</Container>
	);
};

export default AdminLayout;
