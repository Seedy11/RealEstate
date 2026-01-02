/** @format */

import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80vh; // full screen hero
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0; // removes rounding for hero images
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); // semi-transparent overlay
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    padding: 0 2rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  }

  button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
  }

  button:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    button {
      font-size: 1rem;
      padding: 0.8rem 1.5rem;
    }
  }
`;

export default ImageWrapper;
