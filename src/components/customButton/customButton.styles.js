import styled, { css } from "styled-components";
import { Button } from "@material-ui/core";

const buttonStyles = css`
  background-color: black !important;
  color: white !important;

  &:hover {
    background-color: white !important;
    color: black !important;
  }
`;

const invertedButtonStyles = css`
  background-color: white !important;
  color: black !important;

  &:hover {
    background-color: black !important;
    color: white !important;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4 !important;
  border: none !important;

  &:hover {
    background-color: #357ae8 !important;
    color: white !important;
  }
`;

const getButtonStyles = ({ isgooglesignin, inverted }) => {
  if (isgooglesignin) {
    return googleSignInStyles;
  }

  return inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled(Button)`
  font-weight: bolder !important;
  letter-spacing: 2px;
  border: 1px solid black !important;
  margin-top: 1vh !important;

  ${getButtonStyles}
`;
