import React from "react";

import { Hero, PrimaryTitle, SecondaryTitle } from "./landingPage.styles";

const LandingPage = () => {
  return (
    <Hero>
      <PrimaryTitle>
        Amazing clothing
        <br />
        at an amazing price
      </PrimaryTitle>
      <SecondaryTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </SecondaryTitle>
    </Hero>
  );
};

export default LandingPage;
