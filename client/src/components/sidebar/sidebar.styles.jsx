import styled from 'styled-components';

import { breakpoints, helpers } from 'utilities/styles/helpers.styles';

const { tabletLandscape, desktop, highResDesktop } = breakpoints;
const { accentColor, secondaryColor } = helpers;

export const Container = styled.div`
	background-color: ${accentColor};
	color: ${secondaryColor};
	font-size: 1.6rem;

	.divider-container {
		text-align: center;
		font-size: 0;
		margin: 0.5rem 0;
	}

	display: none;
	grid-area: sidebar;

	.dashboard {
		padding: 2rem;
		font-size: 2rem;
	}

	@media ${tabletLandscape} {
		display: flex;
		flex-direction: column;
	}
	@media ${desktop} {
		display: flex;
		flex-direction: column;
	}
	@media ${highResDesktop} {
		display: flex;
		flex-direction: column;
	}
	ul {
		padding: 0;
		list-style-type: none;
		li {
			padding: 0.5rem 1rem;
			color: #ddd;

			&.active,
			.active {
				background-color: rgba(255, 255, 255, 0.2);
			}
			.link-list {
				text-decoration: none;
				color: ${secondaryColor};
			}
			&:hover {
				background-color: rgba(255, 255, 255, 0.2);
				cursor: pointer;
			}
		}
	}
`;

export const LogoContainer = styled.div`
	text-align: center;
	padding: 2rem;
	font-size: 2.5rem;
`;

export const Divider = styled.div`
	display: inline-block;
	height: 1px;

	background-color: ${secondaryColor};
	width: 80%;
`;

export const LinkGroup = styled.div`
	padding: 0 2rem;

	.group-title {
		font-size: 1.4rem;
		padding-left: 0.3rem;
		margin-bottom: 1rem;
	}
`;
