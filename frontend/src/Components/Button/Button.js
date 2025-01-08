/** @format */

import React from "react";
import ContainerButton from "./Button.element";

const Button = ({ text, onClick }) => {
  return (
    <ContainerButton>
      <button onClick={onClick} type='Button' class='btn btn-primary'>
        {text}
      </button>
    </ContainerButton>
  );
};

export default Button;
