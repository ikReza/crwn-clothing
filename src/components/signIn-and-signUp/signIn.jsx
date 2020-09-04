import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";

import CustomButton from "../customButton/customButton";

import {
  ContainerGrid,
  FormContainer,
  TypographyHint,
  Alternate,
  ChoiceLink,
} from "./signin-signup.styles";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(emailSignInStart({ email, password }));
  };

  return (
    <ContainerGrid container>
      <Grid item xs={10} sm={6} md={4}>
        <form onSubmit={handleSubmit}>
          <FormContainer elevation={5}>
            <TypographyHint align="center" variant="h4" gutterBottom>
              I already have an account
            </TypographyHint>
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
            <CustomButton variant="outlined" fullWidth type="submit">
              Sign In
            </CustomButton>
            <CustomButton
              variant="outlined"
              fullWidth
              onClick={() => dispatch(googleSignInStart())}
              isgooglesignin="true"
            >
              Sign In with Google
            </CustomButton>
          </FormContainer>
          <Alternate>
            <TypographyHint>Don't have an account?</TypographyHint>
            <ChoiceLink to="/signup">Sign Up</ChoiceLink>
          </Alternate>
        </form>
      </Grid>
    </ContainerGrid>
  );
};

export default SignIn;
