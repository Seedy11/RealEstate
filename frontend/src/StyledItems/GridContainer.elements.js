/** @format */

import styled from "styled-components";
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  margin-bottom: 2rem;
  .grid-item {
    padding: 10px;
  }
  @media only screen and (max-device-width: 480px) {
    grid-template-columns: none;
  }
`;

export const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  // margin: 10rem 0rem;
  font-size: 1rem;
  .grid-item {
    padding: 10px;
  }
  @media only screen and (max-device-width: 480px) {
    grid-template-columns: none;
  }
`;
export const ThreeColumn = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  margin: 12rem 0rem;
  font-size: 0.9rem;
  .grid-item {
    padding: 10px;
  }
  @media only screen and (max-device-width: 480px) {
    grid-template-columns: none;
  }
`;

export const Column = styled.div`
  align-items: center;
`;
export default GridContainer;
