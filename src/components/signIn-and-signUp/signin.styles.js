import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const useStyles = makeStyles({
  signIn: {
    height: "80vh",
    alignItems: "center",
  },

  signInContainer: {
    marginBottom: "2vh",
    padding: "3vh 3vw",
  },

  signInHeader: {
    fontWeight: "bolder",
  },

  signUpHeader: {
    fontWeight: "bolder",
    marginRight: "10px",
  },
});

export const SignUp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpLink = styled(Link)`
  font-size: large;
  font-weight: bolder;
  &:hover {
    color: blue;
  }
`;
