import React from 'react'
import ContainerButton from './Button.element'

const Button = ({text}) => {
  return (
    <ContainerButton>
        <button type="Button" class="btn btn-primary">{text}</button>
    </ContainerButton>
  )
}

export default Button