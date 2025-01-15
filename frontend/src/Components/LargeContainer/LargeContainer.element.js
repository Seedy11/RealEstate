/** @format */

import styled from "styled-components";

export const CardContainer = styled.h2`
  background-color: white;
  border: 1px solid #dee2e6;
  border-radius: 20px;
  max-height: 800px;
  // padding: 5px 10px;
  margin: 1rem 0rem;
  font-size: 20px;
  // font-weight: 150;
  font-style: italic;

  img {
    border-radius: 1rem;
  }

  @media only screen and (max-width: 600px) {
    // display: flex;
    // align-items: center;
    font-size: 13px;
    img {
      max-height: 1400px;
      width: 60px;
      // border-radius: 20px;
    }
  }
`;
export const ImageWrapper = styled.h2`
  color: white;

  img {
    max-height: 300px;
    width: 100%;
    object-fit: cover;
    // border-radius: 20px;
    align-item: center;
  }
`;
export const Position = styled.h2`
  display: flex;
  gap: 2rem;
  font-size: 20px;
  font-style: italic;
  @media only screen and (max-width: 600px) {
    // display: flex;
    // align-items: center;
    font-size: 13px;
  }
`;
