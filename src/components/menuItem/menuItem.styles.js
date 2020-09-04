import styled, { css } from "styled-components";

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  border: 1px solid black;
  ${flexCenter};
  flex-direction: column;
  height: 90px;
  padding: 5px 25px;

  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${({ size }) => (size ? "380px" : "240px")};
  border: 1px solid black;
  ${flexCenter};
  margin: 0 7.5px 15px;
  flex: 1 1 auto;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & img {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Content} {
      opacity: 0.9;
    }
  }

  @media (max-width: 800px) {
    height: 240px;
  }
`;
// cubic bezier doc: https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function

export const Image = styled.img`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
// background-image (position - center & cover the whole thing)

export const Title = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  text-transform: uppercase;
`;
