/** @format */

import React from "react";
import FormContainer from "../../Screen/Login/Login.element";
import { Container, Form } from "react-bootstrap";

function PropertyFeature({ dataItems, setDataItems }) {
  return (
    <Container>
      <FormContainer>
        <Form>
          <h1>Property Feature</h1>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Bathroom:</Form.Label>
            <Form.Control
              placeholder='Bathroom'
              name='Postcode'
              type='number'
              value={dataItems.Bathrooms}
              onChange={(e) => {
                setDataItems({ ...dataItems, Bathrooms: e.target.value });
              }}
              required
            />
          </Form.Group>{" "}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Bedrooms:</Form.Label>
            <Form.Control
              type='number'
              name='email'
              value={dataItems.Bedrooms}
              onChange={(e) => {
                setDataItems({ ...dataItems, Bedrooms: e.target.value });
              }}
              required
            />
          </Form.Group>{" "}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>available</Form.Label>
            <Form.Control
              type='text'
              name='email'
              value={dataItems.Available_date}
              onChange={(e) => {
                setDataItems({ ...dataItems, Available_date: e.target.value });
              }}
              required
            />
          </Form.Group>{" "}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Price:</Form.Label>
            <Form.Control
              type='number'
              name='email'
              value={dataItems.Price}
              onChange={(e) => {
                setDataItems({ ...dataItems, Price: e.target.value });
              }}
              required
            />
          </Form.Group>{" "}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Description & features of the property:</Form.Label>
            <Form.Control
              placeholder='Description...'
              as='textarea'
              rows={4}
              value={dataItems.Descriptions}
              onChange={(e) => {
                setDataItems({
                  ...dataItems,
                  Descriptions: e.target.value,
                });
              }}
              required
            />
          </Form.Group>
        </Form>
      </FormContainer>
    </Container>
    // <div>
    //   <h1>PropertyFeature</h1>

    //   <p>
    //     Feature:{" "}
    //     <input
    //       name='textarea'
    //       value={dataItems.PropertyFeature}
    //       onChange={(e) => {
    //         setDataItems({ ...dataItems, PropertyFeature: e.target.value });
    //       }}
    //     />
    //   </p>
    //   <p>
    //     Property description:{" "}
    //     <input
    //       name='textarea'
    //       value={dataItems.PropertyDescription}
    //       onChange={(e) => {
    //         setDataItems({ ...dataItems, PropertyDescription: e.target.value });
    //       }}
    //     />
    //   </p>
    // </div>
  );
}

export default PropertyFeature;
