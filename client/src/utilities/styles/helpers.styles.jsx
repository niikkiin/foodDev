import { css } from 'styled-components';
/**
 * Helper styles and themes for global usage
 */
export const helpers = {
	mainColor: '#412D18',
	secondaryColor: '#F9F9F9',
	accentColor: '#FDBD10',

	googleButtonColor: '#D22A2A',
	facebookButtonColor: '#5A23B9',
	// mainTint: '#525966',
	// mainRGB: '165, 174, 214',

	// successColor: '#1DBE17',
	// warningColor: '#E69316',
	// dangerColor: '#BE174E',
	// successHighlightColor: '#083623',

	boxShadow: '10px 25px 45px 0px rgba(0,0,0,0.25)',
};

export const breakpoints = {
	highResDesktop: '(min-width: 1281px)',
	desktop: '(min-width: 1025px) and (max-width: 1280px)',
	tabletLandscape: '(min-width: 961px) and (max-width: 1024px)',
	tabletPortrait: '(min-width: 641px) and (max-width: 960px)',
	phone: '(min-width: 320px) and (max-width: 640px)',
};

export const displayColumnCenter = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const displayRowCenter = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;

// SECTION ANIMATIONS
export const shrinkLabelStyles = css`
	top: -1.8rem;
	font-size: 1.3rem;
	color: ${helpers.accentColor};
`;