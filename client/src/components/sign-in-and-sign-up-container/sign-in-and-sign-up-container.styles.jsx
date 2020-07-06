import styled from 'styled-components';

import { displayRowCenter, helpers, breakpoints } from 'utilities/styles/helpers.styles';
const { mainColor } = helpers;
const { phone, tabletPortrait, tabletLandscape, desktop, highResDesktop } = breakpoints;

export const Wrapper = styled.div`
	height: 100vh;
	${displayRowCenter};
  text-align: center;
  
  h1 {
    margin: 1rem 0;
    font-size: 2.8rem;
    color: ${mainColor};
  }

  .svg {
    margin: 2rem;
  }

  @media ${phone} {
    flex-direction: column;
    .svg {
      margin: 0;
    }
    .svg-items {
      display: none;
    }
    .content {
      margin: 1rem;
      display: block;
    }
  }

  @media ${tabletPortrait} {
    flex-direction: column;
    .svg {
      margin: 0;
    }
    .svg-items {
      display: none;
    }
    .content {
      display: block;
    }
  }

  @media ${tabletLandscape} {
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    .svg-items {
      width: 150%;
    }
    .content {
      margin: 0 4rem 0 25rem;
    }
  }

  @media ${desktop} {
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    .svg-items {
      width: 150%;
    }
    .content {
      margin: 0 4rem 0 25rem;
    }
  }
`;
