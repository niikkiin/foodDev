import styled from 'styled-components';
import { helpers } from 'utilities/styles/helpers.styles';

const { mainColor, secondaryColor} = helpers;

const getSideColor = (color) => {
  return color.color;
}

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

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  .title {
    width: 100%;
    background-color: ${secondaryColor};
    height: 4rem;
    font-size: 2rem;
    padding: 1rem;
    border-bottom 1px solid ${mainColor};
  }
  .content {
    width: 100%;
    background-color: pink;
    // NOTE TO BE REMOVED ONCE THERE IS AN ACTUAL CONTENT
    min-height: 20rem;
    padding: 1rem;
  }
`;