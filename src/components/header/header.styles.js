import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  height: 9vh;
  width: 100%;
  margin-bottom: 4vh;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    padding: 10px;
    margin-bottom: 3vh;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px;
  ${flexCenter}

  @media screen and (max-width: 800px) {
    width: 60px;
    padding: 10px;
  }
`;

export const OptionContainer = styled.div`
  width: 50%;
  ${flexCenter}
  justify-content: flex-end;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
