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
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px;
  ${flexCenter}
`;

export const OptionContainer = styled.div`
  width: 50%;
  ${flexCenter}
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
`;
