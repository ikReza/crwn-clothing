import styled from "styled-components";
import landing from "../../assets/landing.jpg";

export const Hero = styled.div`
  text-align: center;
  padding: 200px 20px;
  margin-bottom: 10vh;
  background-color: #222;
  color: white;

  @supports (background-blend-mode: multiply) {
    background-image: url(${landing});
    width: 99%;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
  }

  @media (max-width: 600px) {
    padding: 100px 20px;
  }
`;

export const PrimaryTitle = styled.div`
  font-size: 4rem;
  font-weight: bolder;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 3rem;
  }

  @media (max-width: 360px) {
    font-size: 2rem;
  }
`;

export const SecondaryTitle = styled.p`
  font-size: 1.1rem;

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;
