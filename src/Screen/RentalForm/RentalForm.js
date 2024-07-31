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
  const [image_url, setImage] = useState();

  const postData = (e) => {
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
        // image_url: image,
      })
      .then(() => {
        console.log("success");
      });
  };
  // console.log("image", image);
  // const postData = async (e, image_url) => {
  //   const formData = new FormData();
  //   formData.append("image", image_url);

  //   const result = await axios.post(
  //     "http://localhost:3001/rentalProperties",
  //     formData,
  //     {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     }
  //   );
  //   console.log("fgcvff", result.data);
  // };
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
              placeholder='post code'
              onChange={(e) => setZipCode(e.target.value)}
              value={zipCode}
            />
          </Form.Group>{" "}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Bedrooms: </Form.Label>
            <Form.Control
              type='name'
              placeholder='Bedrooms'
              onChange={(e) => setBedrooms(e.target.value)}
              value={bedrooms}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Bathrooms: </Form.Label>
            <Form.Control
              type='name'
              placeholder='Bathrooms'
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
              as='textarea'
              placeholder='Descriptions'
              onChange={(e) => setDescriptions(e.target.value)}
              value={descriptions}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Available date: </Form.Label>
            <Form.Control
              type='name'
              placeholder='Available date'
              onChange={(e) => setAvailable_date(e.target.value)}
              value={available_date}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Image </Form.Label>

            <input
              type='file'
              name='image'
              id='image'
              onChange={(e) => setImage(e.target.files[0])}
              accept='image/png, image/jpeg'
            />
          </Form.Group>
          <Button
            variant='primary'
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              // userValidation(e.target.value);
              // console.log("test66", image_url);
              postData(image_url);
            }}>
            Submit
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
}

export default RentalForm;
