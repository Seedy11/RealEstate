/** @format */

import React from "react";
import styled from "styled-components";

const ContainerButton = styled.div`
  display: inline-block;

  button {
    background-color: blue; /* Airbnb pink */
    color: white;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: dark blue;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }
`;
export default ContainerButton;
