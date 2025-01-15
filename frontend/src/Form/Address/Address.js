/** @format */

import React from "react";
import FormContainer from "../../Screen/Login/Login.element";
import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Address({ dataItems, setDataItems }) {
  const [setAddressData, AddressData] = useState("");
  React.useEffect(() => {
    async function AddressData() {
      try {
        const propertiesData = await axios.get(
          `http://localhost:3001/rentalProperties/propertyList/${AddressData}`
        );
        return setAddressData(propertiesData.data[0]);
        // console.log(propertiesData.data);
      } catch (error) {
        return error;
      }
    }
    AddressData();
  }, []);
  return (
    <Container>
      <FormContainer>
        <Form>
          <h1>Address</h1>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Address:</Form.Label>
            <Form.Control
              placeholder='Address'
              name='name'
              value={dataItems.Address}
              onChange={(e) => {
                setDataItems({ ...dataItems, Address: e.target.value });
              }}
              required
            />
          </Form.Group>{" "}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Post code:</Form.Label>
            <Form.Control
              placeholder='Post code'
              name='Postcode'
              value={dataItems.Postcode}
              onChange={(e) => {
                setDataItems({ ...dataItems, Postcode: e.target.value });
              }}
              required
            />
          </Form.Group>{" "}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>City:</Form.Label>
            <Form.Control
              placeholder='City'
              name='email'
              value={dataItems.City}
              onChange={(e) => {
                setDataItems({ ...dataItems, City: e.target.value });
              }}
              required
            />
          </Form.Group>{" "}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Country:</Form.Label>
            <Form.Control
              placeholder='Country'
              type='name'
              value={dataItems.Country}
              onChange={(e) => {
                setDataItems({ ...dataItems, Country: e.target.value });
              }}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>State:</Form.Label>
            <Form.Control
              placeholder='State'
              type='name'
              value={dataItems.State}
              onChange={(e) => {
                setDataItems({ ...dataItems, State: e.target.value });
              }}
              required
            />
          </Form.Group>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default Address;
