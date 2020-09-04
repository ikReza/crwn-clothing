import styled from "styled-components";
import { Link } from "react-router-dom";

export const SmallScreenContainer = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Hamburger = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;

  span {
    width: 20px;
    height: 3px;
    background-color: ${({ open }) => (open ? "#808080" : "#000")};
    transform-origin: -1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const MobileOptionContainer = styled.div`
  position: fixed;
  background-color: whitesmoke;
  top: 0;
  right: 0;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-around;
  height: 20vh;
  width: 100%;
  z-index: 10;
  transform: translateY(10vh);
  transition: transform 3s ease-in-out;
`;

export const MobileOptionLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  padding: 5px auto;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
