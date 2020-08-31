import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";

import CustomButton from "../customButton/customButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import {
  ContainerGrid,
  FormContainer,
  TypographyHint,
  Alternate,
  ChoiceLink,
} from "./signin-signup.styles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerGrid container>
      <Grid item xs={12} sm={6} md={4}>
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
              onClick={signInWithGoogle}
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
