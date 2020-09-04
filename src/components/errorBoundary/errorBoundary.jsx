import React from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  ErrorImageSubText,
} from "./errorBoundary.styles";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/O0DCcQy.png" />
          <ErrorImageText>This Page is Melted in the Sun</ErrorImageText>
          <ErrorImageSubText>
            People questioned your desire to get strawberry. “That’s the worst
            flavor,” they said. But you are strong and independent so you got it
            anyway. And honestly, it wasn’t great. Luckily, two licks in a bike
            whizzed past you and knocked the cone out of your hand. “Oh no!” you
            yelled as the creamy pink became a mess in the dirt. But really you
            were happy.
          </ErrorImageSubText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
