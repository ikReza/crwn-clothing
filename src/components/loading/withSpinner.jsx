import React from "react";
import Loading from "./loading";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? <Loading /> : <WrappedComponent {...otherProps} />;
  };

  return Spinner;
};

export default WithSpinner;
