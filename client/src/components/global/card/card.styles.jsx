import styled, {css} from 'styled-components';
import { helpers } from 'utilities/styles/helpers.styles';

const getSideColor = (color) => {
  return color.color;
}

const { secondaryColor } = helpers;

export const CardSmContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 1rem;
  background-color: ${secondaryColor};
  border-left: 0.9rem solid ${getSideColor};

  .title,
  .number {
    font-size: 1.5rem;
  }

  .number {
    padding: 0.5rem 1.5rem;
  }
`;