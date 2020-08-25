import React from "react";
import "./menuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
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

export default MenuItem;
