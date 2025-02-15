/** @format */

import styled from "styled-components";

const ImageWrapper = styled.h2`
  color: white;

  img {
    height: 500px;
    width: 100%;
    object-fit: cover;

    border-radius: 20px;
    align-item: center;
  }
`;
const PropertyDetailContainer = styled.h2`
  .background {
    background-color: white;
    padding: 2rem 5rem;
    margin: 2rem 0rem;
    border-radius: 10px;
  }
`;

export { ImageWrapper, PropertyDetailContainer };
