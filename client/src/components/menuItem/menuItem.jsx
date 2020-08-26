import React from "react";
import { withRouter } from "react-router-dom";
// withRouter is a higher-order component. A higher order component is essentially a function that takes any component
// as an argument and returns a modified component.
// https://reactjs.org/docs/higher-order-components.html

import "./menuItem.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      {/* We want to increase the size of the image only. If we wrap this div around content div, 
      content will also increase. So to avoid that we're using this extra div */}
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
