/** @format */

import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 20px;
  }

  .price-tag {
    position: absolute;
    bottom: 20px;
    left: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 8px 15px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const PropertyDetailContainer = styled.div`
  .card-section {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  p,
  li {
    color: #555;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;
