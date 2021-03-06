import styled from 'styled-components';

import { displayCenterSpaceBetween } from 'utilities/styles/helpers.styles';
import { helpers, breakpoints } from 'utilities/styles/helpers.styles';

const { phone, tabletPortrait } = breakpoints;

const { secondaryColor } = helpers;

export const HeaderContainer = styled.div`
	background-color: ${secondaryColor};
  grid-area: header;
  height: 5rem;
  
  ${displayCenterSpaceBetween};
  
  font-size: 2rem;
	.date {
  }

  @media ${phone} {
    .search-bar {
      margin-left: 4.2rem;
    }
  }
  @media ${tabletPortrait} {
    .search-bar {
      margin-left: 4.2rem;
    }
  }
`;