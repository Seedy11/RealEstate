/** @format */

import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FormCard from "./Login.element"; // styled component
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const getUserData = async () => {
    if (!email || !password) {
      setLoginStatus("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://peaceful-ocean-19804-a5eacab3df7e.herokuapp.com/login",
        { email: email, tenant_password: password }
      );

      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus("Login successful!");
        navigate("/letting"); // Redirect on successful login
      }
    } catch (error) {
      console.log(error);
      setLoginStatus("Login failed. Please try again.");
    }
  };

  return (
    <Container style={{ margin: "5rem auto" }}>
      <FormCard>
        <h2>Login</h2>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {loginStatus && (
            <p
              style={{
                color: loginStatus.includes("successful") ? "green" : "red",
                marginBottom: "1rem",
                textAlign: "center",
              }}>
              {loginStatus}
            </p>
          )}

          <Button
            variant='primary'
            type='button'
            onClick={getUserData}
            className='submit-btn'>
            Login
          </Button>

          <p className='login-link'>
            Don't have an account? <Link to='../register'>Register here</Link>
          </p>
        </Form>
      </FormCard>
    </Container>
  );
};

export default Login;
