/** @format */

import React, { useState } from "react";
import PersonalDetail from "../../Form/PersonalDetail/PersonalDetail";
import Address from "../../Form/Address/Address";
import PropertyFeature from "../../Form/PropetyFeature/PropertyFeature";
import { Button, Container } from "react-bootstrap";
import GridContainer from "../../StyledItems/GridContainer.elements";
import axios from "axios";
import ImageUploader from "../../Form/ImageUploader/ImageUploader";

function RentalForm() {
  const [page, setPage] = useState(0);
  const [file, setFile] = useState("");
  const [uploadedImage, setUploadedImage] = useState({});
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
    Bathrooms: NaN,
    Bedrooms: NaN,
    Descriptions: "",
    Price: NaN,
    Images: [],
  });

  console.log(uploadedImage, "jyfgt");
  const postData = () => {
    const formData = new FormData();

    // append all fields
    for (const key in dataItems) {
      if (key !== "Images") {
        formData.append(key, dataItems[key]);
      }
    }

    // append images
    dataItems.Images.forEach((file) => {
      formData.append("Images", file); // must match backend multer field
    });

    axios
      .post("http://localhost:3001/rentalProperties", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => console.log("success", res.data))
      .catch((err) => console.error(err));
  };
  const pageRender = () => {
    if (page === 0) {
      return (
        <PersonalDetail dataItems={dataItems} setDataItems={setDataItems} />
      );
    } else if (page === 1) {
      return <Address dataItems={dataItems} setDataItems={setDataItems} />;
    } else if (page === 2) {
      return (
        <PropertyFeature dataItems={dataItems} setDataItems={setDataItems} />
      );
    } else if (page === 3) {
      return (
        <ImageUploader dataItems={dataItems} setDataItems={setDataItems} />
      );
    }
  };

  return (
    <Container style={{ margin: "5.5rem auto " }}>
      <h1>form</h1>

      <div>{pageRender()}</div>
      <GridContainer>
        <Button
          disabled={page === 0}
          onClick={() => {
            setPage((page) => page - 1);
          }}>
          Previous
        </Button>
        <Button
          onClick={() => {
            if (page === 3) {
              alert("form submitted");
              postData();
              // sendImage();
              console.log("data", dataItems);
            } else {
              setPage((page) => page + 1);
            }
          }}>
          {page === 4 ? "Submit" : "Next"}
        </Button>
      </GridContainer>
    </Container>
  );
}

export default RentalForm;
