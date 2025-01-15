/** @format */

import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "./Login.element";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  async function getUserData() {
    // try {
    //   const data = await axios.post("http://localhost:3001/login", {
    //     email: email,
    //     password: password,
    //   });
    //   console.log("data", data);
    // } catch (error) {
    //   console.log(error);
    // }
    axios
      .post("http://localhost:3001/login", {
        email: email,
        tenant_password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].email);
        }
      });
  }
  // getUserData();
  return (
    <Container>
      <FormContainer>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Link to='../register'>Register</Link>
            <h1>{loginStatus}</h1>
          </Form.Group>

          <Button
            variant='primary'
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              // userValidation(e.target.value);
              getUserData();
            }}>
            Submit
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;
