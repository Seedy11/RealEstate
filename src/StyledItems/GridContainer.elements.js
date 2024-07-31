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
  margin-bottom: 2rem;
  .grid-item {
    padding: 10px;
  }
  @media only screen and (max-device-width: 480px) {
    grid-template-columns: none;
  }
`;
export default GridContainer;
