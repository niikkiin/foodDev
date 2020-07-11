import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { accentColor } = helpers;

export const SearchBarContainer = styled.form`
  display: flex;
`;

export const SearchBarSubmit = styled.button`
  border: none;
  background-color: ${accentColor};
  cursor: pointer;
  outline: none;

  .icon {
    color: #fff;
    // padding: 0 0.3rem;
    min-width: 4rem; 
    font-size: 2.4rem;
  }
`;

export const SearchInput = styled.input`
  min-width: 30rem;
  height: 3.6rem;
  font-size: 2rem;
  padding: 1rem;

  background: rgba(196, 196, 196, 0.2);
  border: none;
  outline: none;


  // &:active,
  // &:focus {
    
  // }
`;