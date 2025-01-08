/** @format */

import React, { useState } from "react";
import PersonalDetail from "../../Form/PersonalDetail/PersonalDetail";
import Address from "../../Form/Address/Address";
import PropertyFeature from "../../Form/PropetyFeature/PropertyFeature";
import { Button } from "react-bootstrap";
import GridContainer from "../../StyledItems/GridContainer.elements";
import axios from "axios";
import ImageUploader from "../../Form/ImageUploader/ImageUploader";

function RentalForm() {
  const [page, setPage] = useState(0);
  const [file, setFile] = useState("");
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
  });

  const sendImage = async (e, file) => {
    // e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);

    const result = await axios.post(
      "http://localhost:3001/rentalProperties/imageUpload",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result.data);
  };

  const postData = (e) => {
    axios.post("http://localhost:3001/rentalProperties", dataItems).then(() => {
      console.log("success");
    });
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
      return <ImageUploader setFile={file} submit={sendImage} />;
    }
  };

  return (
    <div>
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
          {page === 3 ? "Submit" : "Next"}
        </Button>
      </GridContainer>
    </div>
  );
}

export default RentalForm;
