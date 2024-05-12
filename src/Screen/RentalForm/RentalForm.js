/** @format */

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormContainer from "../Login/Login.element";
import axios from "axios";

function RentalForm() {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [feature, setFeature] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [available_date, setAvailable_date] = useState("");
  const [bathrooms, setBathrooms] = useState("");

  const postData = () => {
    axios
      .post("http://localhost:3001/rentalProperties", {
        Address: address,
        State: state,
        City: city,
        ZipCode: zipCode,
        bedrooms: bedrooms,
        features: feature,
        descriptions: descriptions,
        available_date: available_date,
        bathrooms: bathrooms,
      })
      .then(() => {
        console.log("success");
      });
  };

  return (
    <div>
      {" "}
      <FormContainer>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Address </Form.Label>
            <Form.Control
              type='name'
              placeholder='Address'
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>City </Form.Label>
            <Form.Control
              type='name'
              placeholder='City '
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>State:</Form.Label>
            <Form.Control
              type='name'
              placeholder='Post code'
              onChange={(e) => setState(e.target.value)}
              value={state}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Post code: </Form.Label>
            <Form.Control
              type='name'
              placeholder='City '
              onChange={(e) => setZipCode(e.target.value)}
              value={zipCode}
            />
          </Form.Group>{" "}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>bedrooms: </Form.Label>
            <Form.Control
              type='name'
              placeholder='Address'
              onChange={(e) => setBedrooms(e.target.value)}
              value={bedrooms}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>bathrooms: </Form.Label>
            <Form.Control
              type='name'
              placeholder='Address'
              onChange={(e) => setBathrooms(e.target.value)}
              value={bathrooms}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Feature </Form.Label>
            <Form.Control
              type='name'
              placeholder='Feature'
              onChange={(e) => setFeature(e.target.value)}
              value={feature}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Descriptions: </Form.Label>
            <Form.Control
              type='name'
              placeholder='Address'
              onChange={(e) => setDescriptions(e.target.value)}
              value={descriptions}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Available date: </Form.Label>
            <Form.Control
              type='name'
              placeholder='Feature'
              onChange={(e) => setAvailable_date(e.target.value)}
              value={available_date}
            />
          </Form.Group>
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
    </div>
  );
}

export default RentalForm;
