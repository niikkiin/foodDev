import styled from 'styled-components';
import { breakpoints, helpers } from 'utilities/styles/helpers.styles';

const { mainGray } = helpers;
const { phone, tabletPortrait, tabletLandscape, desktop, highResDesktop } = breakpoints;

export const Title = styled.h1`
	font-size: 3rem;
	color: #fff;
`;

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr; /* Side nav is hidden on mobile */
	grid-template-rows: 50px 1fr 50px;
	grid-template-areas:
		'header'
		'main';
	height: 100vh;

	.menu-icon {
		display: none;
	}

	@media ${phone} {
		.menu-icon {
			position: fixed;
			display: flex;
			top: 5px;
			left: 10px;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			z-index: 1;
			cursor: pointer;
			padding: 12px;
			background-color: #DADAE3;
		}
	}

	@media ${tabletPortrait} {
		.menu-icon {
			position: fixed;
			display: flex;
			top: 5px;
			left: 10px;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			z-index: 1;
			cursor: pointer;
			padding: 12px;
			background-color: #DADAE3;
		}
	}



	@media ${tabletLandscape} {
		grid-template-columns: 240px 1fr; /* Show the side nav for non-mobile screens */
		grid-template-areas:
			'sidebar header'
			'sidebar main';
	}
	@media ${desktop} {
		grid-template-columns: 240px 1fr; /* Show the side nav for non-mobile screens */
		grid-template-areas:
			'sidebar header'
			'sidebar main';
	}
	@media ${highResDesktop} {
		grid-template-columns: 240px 1fr; /* Show the side nav for non-mobile screens */
		grid-template-areas:
			'sidebar header'
			'sidebar main';
	}
`;

export const Main = styled.header`
	grid-area: main;
	padding: 1.5rem 5rem;
	background-color: ${mainGray};
`;