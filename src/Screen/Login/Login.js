import React from 'react'
import { Button,  Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from './Login.element'

const Login = () => {
  return (
    <FormContainer >
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Link to="register">Register</Link>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    </FormContainer>
    
  )
}

export default Login