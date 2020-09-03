import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { signUpStart } from "../../redux/user/userActions";
import CustomButton from "../customButton/customButton";

import {
  ContainerGrid,
  TypographyHint,
  FormContainer,
  Alternate,
  ChoiceLink,
} from "./signin-signup.styles";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      alert("Password don't match");
      setPassword("");
      setRePassword("");
      return;
    }

    dispatch(signUpStart({ displayName, email, password }));
  };

  return (
    <ContainerGrid container>
      <Grid item xs={10} sm={6} md={4}>
        <form onSubmit={handleSubmit}>
          <FormContainer elevation={5}>
            <TypographyHint align="center" variant="h4" gutterBottom>
              I don't have an account
            </TypographyHint>
            <TextField
              fullWidth
              margin="dense"
              variant="outlined"
              label="Name"
              required
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <TextField
              fullWidth
              margin="dense"
              variant="outlined"
              label="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              margin="dense"
              variant="outlined"
              label="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              fullWidth
              margin="dense"
              variant="outlined"
              label="Confirm Password"
              type="password"
              required
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
            <CustomButton variant="outlined" fullWidth type="submit">
              Sign Up
            </CustomButton>
          </FormContainer>
          <Alternate>
            <TypographyHint>Already have an account?</TypographyHint>
            <ChoiceLink to="/signin">Sign In</ChoiceLink>
          </Alternate>
        </form>
      </Grid>
    </ContainerGrid>
  );
};

export default SignUp;
