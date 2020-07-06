import styled, {css} from 'styled-components';
import { helpers } from 'utilities/styles/helpers.styles';

const { mainColor, mainTint, facebookButtonColor, googleButtonColor, secondaryColor, accentColor} = helpers;

const getButtonStyles = props => {
  if (props.isGoogleButton) {
    return googleButtonStyles;
  } else if (props.isFacebookButton){
    return facebookButtonStyles;
  }

  return submitButtonStyles;
};

const submitButtonStyles = css`
  color: ${mainColor};
  border: none;
  outline: none;
  background-color: ${accentColor};
  &:hover,
  &:focus {
    border: 1px solid ${accentColor};
    background-color: transparent;
    color: ${accentColor};
  }
`;
const googleButtonStyles = css`
  color: ${secondaryColor};
  border: none;
  outline: none;
  background-color: ${googleButtonColor};
  &:hover,
  &:focus {
    border: 1px solid ${googleButtonColor};
    background-color: transparent;
    color: ${googleButtonColor};
  }
`;
const facebookButtonStyles = css`
  color: ${secondaryColor};
  border: none;
  outline: none;
  background-color: ${facebookButtonColor};
  &:hover,
  &:focus {
    border: 1px solid ${facebookButtonColor};
    background-color: transparent;
    color: ${facebookButtonColor};
  }
`;


export const CustomButtonContainer = styled.button`
  min-width: 10rem;
  width: auto;
  margin: 0.8rem 0;
  display: inline-block;
  height: 5rem;
  letter-spacing: 0.1rem;
  line-height: 5rem;
  padding: 0 3.5rem 0 3.5rem;
  font-size: 1.7rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${mainTint};
  border: 1px solid ${mainTint};
  background-color: transparent;
  border-radius: 1rem;
  
  &:hover {
    color: ${accentColor};
    border: 1px solid ${accentColor};
  }
  
  &:active {
    outline: none;
  }
  
  ${getButtonStyles};
  }
`;