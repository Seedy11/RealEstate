/** @format */

import React, { useEffect } from "react";
import FormContainer from "../../Screen/Login/Login.element";
import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { postcodeInfo } from "../../redux/slice/postcode";

function Address({ dataItems, setDataItems }) {
  const dispatch = useDispatch();
  const [postcode, setPostcode] = useState("");
  const [setAddressData, AddressData] = useState("");

  React.useEffect(() => {
    async function AddressData() {
      try {
        const propertiesData = await axios.get(
          `https://realestate-heruko-5c11eac23d0e.herokuapp.com/rentalProperties/propertyList/${AddressData}`
        );
        return setAddressData(propertiesData.data[0]);
        // console.log(propertiesData.data);
      } catch (error) {
        return error;
      }
    }
    AddressData();
  }, []);

  useEffect(() => {
    dispatch(postcodeInfo(postcode));
  }, [postcodeInfo]);
  const postco = useSelector((state) => state.postcodeInfo.postcodeDetail);

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
                // setPostcode(dataItems.Address);
                setDataItems({
                  ...dataItems,
                  Address: e.target.value,
                });
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
              onBlur={(e) => {
                setPostcode(e.target.value);
                setDataItems({
                  ...dataItems,
                  Postcode: e.target.value,
                  latitude: postco.latitude,
                  longitude: postco.longitude,
                });
                console.log("postcode4", postco);
              }}
              // onChange={(e) => {
              //   setDataItems({
              //     ...dataItems,
              //     Postcode: e.target.value,
              //     latitude: postco.latitude,
              //     longitude: postco.longitude,
              //   });
              // }}
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
                setDataItems({
                  ...dataItems,
                  City: e.target.value,
                });
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
