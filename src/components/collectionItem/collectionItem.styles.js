import styled from "styled-components";
import CustomButton from "../customButton/customButton";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative !important;

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex !important;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      img {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 85%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 15%;
  text-align: right;
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute !important;
  top: 255px;
  display: none !important;

  @media screen and (max-width: 800px) {
    display: block !important;
    opacity: 0.9;
    min-width: unset !important;
  }
`;
