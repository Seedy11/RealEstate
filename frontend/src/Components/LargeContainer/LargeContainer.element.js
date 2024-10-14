/** @format */

import styled from "styled-components";

export const CardContainer = styled.h2`
  background-color: white;
  border: 2px solid #dee2e6;
  border-radius: 20px;
  height: 370px;
  padding: 5px 10px;
  margin: 2rem 0rem;
  font-size: 25px;
  font-weight: 150;
  font-style: italic;

  img {
    border-radius: 1rem;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;

    img {
      height: 300px;
      width: 360px;
      border-radius: 20px;
    }
  }
`;
export const ImageWrapper = styled.h2`
  color: white;

  img {
    max-height: 250px;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
    align-item: center;
  }
`;
