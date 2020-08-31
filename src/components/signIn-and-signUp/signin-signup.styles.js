import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography, Paper, Grid } from "@material-ui/core";

export const ContainerGrid = styled(Grid)`
  height: 80vh;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled(Paper)`
  margin-bottom: 2vh;
  padding: 3vh 3vw;
`;

export const TypographyHint = styled(Typography)`
  font-weight: bolder;
`;

export const Alternate = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChoiceLink = styled(Link)`
  font-size: large;
  font-weight: bolder;
  margin-left: 10px;
  &:hover {
    color: blue;
  }
`;
