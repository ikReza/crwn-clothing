import React from "react";
import { Button } from "@material-ui/core";

import "./customButton.scss";

const CustomButton = ({ children, ...otherProps }) => {
  console.log(children);
  console.log(otherProps);
  return (
    <Button className="custom-button" {...otherProps}>
      {children}
    </Button>
  );
};

export default CustomButton;
