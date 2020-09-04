import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  width: 95%;
  font-size: 28px;
  color: tomato;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 26px;
  }
`;

export const ErrorImageSubText = styled.h2`
  width: 95%;
  font-size: 22px;
  color: #2f8e89;
  text-align: justify;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;
