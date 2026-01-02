/** @format */

import styled from "styled-components";

const FormCard = styled.div`
  max-width: 450px;
  margin: auto;
  padding: 2.5rem 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #2c3e50;
  }

  .form-control {
    border-radius: 10px;
    padding: 0.8rem 1rem;
    font-size: 0.95rem;
    border: 1px solid #ccc;
    transition: border-color 0.3s;

    &:focus {
      border-color: #blue; /* Airbnb pink accent */
      box-shadow: 0 0 0 0.2rem rgba(255, 90, 95, 0.2);
    }
  }

  .submit-btn {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border-radius: 10px;
    margin-top: 1rem;
    background-color: #blue;
    border: none;
    transition: background-color 0.3s;

    &:hover {
      background-color: dark blue;
    }
  }

  .login-link {
    text-align: center;
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #555;

    a {
      color: #blue;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default FormCard;
