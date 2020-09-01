import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./loading.scss";

const Loading = () => {
  return (
    <div className="circular-progress">
      <CircularProgress />
    </div>
  );
};

export default Loading;
