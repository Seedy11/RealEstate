/** @format */

import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../Login/Login.element";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from "axios";
import FormCard from "./Register.element";

const Register = () => {
  const [first_Name, setFirstName] = useState("");
  const [Last_Name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tenant_password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const id = nanoid();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postData = () => {
    if (!first_Name || !Last_Name || !email || !tenant_password) {
      setErrorMessage(true);
      return;
    }

    axios
      .post("https://realestate-heruko-5c11eac23d0e.herokuapp.com/create", {
        first_Name,
        Last_Name,
        email,
        tenant_password,
        tenant_id: id,
      })
      .then(() => {
        console.log("success");
        navigate("/login"); // redirect to login after successful registration
      })
      .catch((err) => {
        console.log("Error:", err);
        setErrorMessage(true);
      });
  };

  return (
    <Container style={{ margin: "5rem auto" }}>
      <FormCard>
        <h2>Create Account</h2>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter first name'
              value={first_Name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter last name'
              value={Last_Name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={tenant_password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {errorMessage && (
            <p style={{ color: "red", marginBottom: "1rem" }}>
              Please fill in all fields
            </p>
          )}

          <Button
            variant='primary'
            type='button'
            onClick={postData}
            className='submit-btn'>
            Register
          </Button>

          <p className='login-link'>
            Already have an account? <Link to='../login'>Login here</Link>
          </p>
        </Form>
      </FormCard>
    </Container>
  );
};

export default Register;
