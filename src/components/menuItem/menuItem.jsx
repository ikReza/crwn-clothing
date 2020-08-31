import React from "react";
import { withRouter } from "react-router-dom";
// withRouter is a higher-order component. A higher order component is essentially a function that takes any component
// as an argument and returns a modified component.
// https://reactjs.org/docs/higher-order-components.html

import "./menuItem.scss";
import {
  MenuItemContainer,
  Image,
  Content,
  Title,
  Subtitle,
} from "./menuItem.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      {/* We want to increase the size of the image only. If we wrap this div around content div, 
      content will also increase. So to avoid that we're using this extra div */}
      <Image imageUrl={imageUrl} />
      <Content>
        <Title>{title}</Title>
        <Subtitle>Shop Now</Subtitle>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
