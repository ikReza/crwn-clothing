import React from "react";
import { Button } from "@material-ui/core";

import "./customButton.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <Button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
