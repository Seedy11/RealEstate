/** @format */

import React from "react";
import ContainerButton from "./Button.element";

const Button = ({ text, onClick }) => {
  return (
    <ContainerButton>
      <button onClick={onClick} type='button'>
        {text}
      </button>
    </ContainerButton>
  );
};

export default Button;
