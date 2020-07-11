import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { mainColor } = helpers;

export const SocialButtonHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrLine = styled.div`
	display: flex;
  justify-content: center;
  margin-top: 1.3rem;
	.line {
		background-color: ${mainColor};
		width:90%;
		height: 1px;
		border-radius: 5rem;
		margin: 1rem 0 -1rem 0;
	}
	.or {
		font-size: 1.5rem;
    margin: 0rem 2rem;
	}
`;