/** @format */

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../Login/Login.element";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { addedUser } from "../../redux/slice/register";
import { useDispatch } from "react-redux";
import axios from "axios";

const Register = () => {
  const [first_Name, setFirstName] = useState("");
  const [Last_Name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tenant_password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const id = nanoid();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  // const userData = {
  //   tenant_id: id,
  //   first_Name: first_Name,
  //   Last_Name: Last_Name,
  //   Email: email,
  //   Password: tenant_password,
  //   // reTypePassword: rePassword,
  // };

  // const userValidation = (e) => {
  //   if (!firstName || !lastName || !email || !password || !rePassword)
  //     setErrorMessage(true);
  //   else if (password === rePassword) {
  //     dispatch(addedUser(userData));
  //     setErrorMessage(false);
  //     navigation("/letting");
  //   } else {
  //     setErrorMessage(true);
  //   }
  // };

  const postData = () => {
    axios
      .post("http://localhost:3001/create", {
        first_Name: first_Name,
        Last_Name: Last_Name,
        email: email,
        tenant_password: tenant_password,
        tenant_id: id,
      })
      .then(() => {
        console.log("success");
      });
  };
  return (
    <FormContainer>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
            value={first_Name}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
            value={Last_Name}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email </Form.Label>
          <Form.Control
            type='email'
            placeholder='email address'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        {/* <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Re-type Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={(e) => setRePassword(e.target.value)}
            value={rePassword}
          />
        </Form.Group> */}
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={tenant_password}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Link to='../login'>Login here</Link>
        </Form.Group>
        {errorMessage ? (
          <p style={{ color: "red" }}>field can not be empty</p>
        ) : null}
        <Button
          variant='primary'
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            // userValidation(e.target.value);
            postData(e.target.value);
          }}>
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Register;
