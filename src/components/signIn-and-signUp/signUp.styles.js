import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const useStyles = makeStyles({
  signUp: {
    height: "80vh",
    alignItems: "center",
  },

  signUpContainer: {
    marginBottom: "2vh",
    padding: "3vh 3vw",
  },

  signUpHeader: {
    fontWeight: "bolder",
  },

  signInHeader: {
    fontWeight: "bolder",
    marginRight: "10px",
  },
});

export const SignIn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignInLink = styled(Link)`
  font-size: large;
  font-weight: bolder;
  &:hover {
    color: blue;
  }
`;
