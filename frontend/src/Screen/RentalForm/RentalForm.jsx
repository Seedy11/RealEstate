/** @format */
import React, { useState } from "react";
import PersonalDetail from "../../Form/PersonalDetail/PersonalDetail";
import Address from "../../Form/Address/Address";
import PropertyFeature from "../../Form/PropetyFeature/PropertyFeature";
import ImageUploader from "../../Form/ImageUploader/ImageUploader";
import { Button, Container, ProgressBar } from "react-bootstrap";
import GridContainer from "../../StyledItems/GridContainer.elements";
import axios from "axios";
import styled from "styled-components";

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

function RentalForm() {
  const [page, setPage] = useState(0);
  const [dataItems, setDataItems] = useState({
    First_name: "",
    Last_name: "",
    Email: "",
    Phone_number: "",
    Address: "",
    Postcode: "",
    City: "",
    Available_date: "",
    Country: "",
    State: "",
    Bathrooms: 0,
    Bedrooms: 0,
    Descriptions: "",
    Price: 0,
    Images: [],
  });

  const postData = () => {
    const formData = new FormData();

    for (const key in dataItems) {
      if (key !== "Images") {
        formData.append(key, dataItems[key]);
      }
    }

    dataItems.Images.forEach((file) => {
      formData.append("Images", file);
    });

    axios
      .post(
        "https://stark-spire-28814-ebfee6c4755b.herokuapp.com/rentalProperties",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      .then((res) => alert("Property submitted successfully!"))
      .catch((err) => console.error(err));
  };

  const pageRender = () => {
    switch (page) {
      case 0:
        return (
          <PersonalDetail dataItems={dataItems} setDataItems={setDataItems} />
        );
      case 1:
        return <Address dataItems={dataItems} setDataItems={setDataItems} />;
      case 2:
        return (
          <PropertyFeature dataItems={dataItems} setDataItems={setDataItems} />
        );
      case 3:
        return (
          <ImageUploader dataItems={dataItems} setDataItems={setDataItems} />
        );
      default:
        return null;
    }
  };

  return (
    <Container style={{ margin: "5rem auto", maxWidth: "800px" }}>
      <FormTitle>Rental Property Form</FormTitle>

      {/* Progress bar */}
      <ProgressBar
        now={((page + 1) / 4) * 100}
        className='mb-4'
        label={`Step ${page + 1}/4`}
      />

      {/* Render step */}
      <div>{pageRender()}</div>

      {/* Navigation buttons */}
      <ButtonGroup>
        <Button
          variant='secondary'
          disabled={page === 0}
          onClick={() => setPage((prev) => prev - 1)}>
          Previous
        </Button>

        <Button
          variant={page === 3 ? "success" : "primary"}
          onClick={() => {
            if (page === 3) {
              postData();
            } else {
              setPage((prev) => prev + 1);
            }
          }}>
          {page === 3 ? "Submit" : "Next"}
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default RentalForm;
