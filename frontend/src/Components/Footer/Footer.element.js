/** @format */

import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #1f1f1f;
  color: #fff;
  padding: 2rem 0;
  font-family: "Arial", sans-serif;

  h5 {
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    a {
      color: #fff;
      font-size: 1.5rem;
      transition: color 0.3s, transform 0.3s;

      &:hover {
        color: blue;
        transform: scale(1.2);
      }
    }
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #ccc;
  }

  @media (max-width: 600px) {
    padding: 1.5rem 0;

    .social-icons {
      gap: 1rem;

      a {
        font-size: 1.2rem;
      }
    }

    p {
      font-size: 0.8rem;
    }
  }
`;
