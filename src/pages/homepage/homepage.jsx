import React from "react";
import Directory from "../../components/directory/directory";
import LandingPage from "../../components/landingPage/landingPage";

import { HomePageContainer } from "./homepage.styles";

const Homepage = () => {
  return (
    <HomePageContainer>
      <LandingPage />
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
