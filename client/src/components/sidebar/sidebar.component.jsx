import React from 'react';

import { Container, LogoContainer, Divider, LinkGroup } from './sidebar.styles';

import { Route, Link } from 'react-router-dom';

export const Sidebar = () => {
	return (
		<Container>
			<div className='close'>close</div>
			<LogoContainer>Food App</LogoContainer>
			<div className='divider-container'>
				<Divider />
			</div>


			<div className='dashboard'>Dashboard</div>
			{/* TODO improve component */}
			<div className='divider-container'>
				<Divider />
			</div>
			<LinkGroup>
				<div className='group-title'>Account</div>
				<ul className='list'>
					<ListItemLink activeOnlyWhenExact={true} to='/users'>
						Manage Users
					</ListItemLink>
					<ListItemLink activeOnlyWhenExact={true} to='/merchants'>
						Manage Merchant
					</ListItemLink>
					<ListItemLink activeOnlyWhenExact={true} to='/users'>
						Manage User
					</ListItemLink>
				</ul>
			</LinkGroup>
			<div className='divider-container'>
				<Divider />
			</div>
			<LinkGroup>
				<div className='group-title'>Reports && Suggestions</div>
				<ul className='list'>
					<ListItemLink activeOnlyWhenExact={true} to='/merchant'>
						Merchant Report
					</ListItemLink>
					<ListItemLink activeOnlyWhenExact={true} to='/delivery'>
						Delivery Report
					</ListItemLink>
					<ListItemLink activeOnlyWhenExact={true} to='/user'>
						User Report
					</ListItemLink>
					<ListItemLink activeOnlyWhenExact={true} to='/logout'>
						Logout
					</ListItemLink>
				</ul>
			</LinkGroup>
		</Container>
	);
};

const ListItemLink = ({ to, activeOnlyWhenExact, children }) => {
	return (
		<Route
			path={to}
			exact={activeOnlyWhenExact}
			children={({ match }) => (
				<li className={match ? 'list-item active' : 'list-item'}>
					<Link className='link-list' to={to}>
						{children}
					</Link>
				</li>
			)}
		/>
	);
};
