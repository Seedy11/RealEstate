/** @format */

import React from "react";
import FormContainer from "../../Screen/Login/Login.element";
import { Container, Form } from "react-bootstrap";

function PersonalDetail({ dataItems, setDataItems }) {
  return (
    <Container>
      <FormContainer>
        <Form>
          <h1>PersonalDetail</h1>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>First name</Form.Label>
            <Form.Control
              placeholder='First Name'
              name='name'
              value={dataItems.First_name}
              onChange={(e) => {
                setDataItems({ ...dataItems, First_name: e.target.value });
              }}
              required
            />
          </Form.Group>{" "}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              placeholder='Last Name'
              name='lastName'
              value={dataItems.Last_name}
              onChange={(e) => {
                setDataItems({ ...dataItems, Last_name: e.target.value });
              }}
              required
            />
          </Form.Group>{" "}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              placeholder='Email address'
              name='email'
              value={dataItems.Email}
              onChange={(e) => {
                setDataItems({ ...dataItems, Email: e.target.value });
              }}
              required
            />
          </Form.Group>{" "}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Phone number </Form.Label>
            <Form.Control
              placeholder='phone number'
              type='name'
              name='Phone'
              value={dataItems.Phone_number}
              onChange={(e) => {
                setDataItems({ ...dataItems, Phone_number: e.target.value });
              }}
              required
            />
          </Form.Group>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default PersonalDetail;
