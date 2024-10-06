/** @format */

import React, { useState } from "react";
import PersonalDetail from "../../Form/PersonalDetail/PersonalDetail";
import Address from "../../Form/Address/Address";
import PropertyFeature from "../../Form/PropetyFeature/PropertyFeature";
import { Button } from "react-bootstrap";
import GridContainer from "../../StyledItems/GridContainer.elements";
import axios from "axios";
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
    Country: "",
    State: "",
    Bathrooms: NaN,
    Bedrooms: NaN,
    Descriptions: "",
    Price: NaN,
  });
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
            if (page === 2) {
              // alert("form submitted");
              postData();
              console.log("data", dataItems);
            } else {
              setPage((page) => page + 1);
            }
          }}>
          {page === 2 ? "Submit" : "Next"}
        </Button>
      </GridContainer>
    </div>
  );
}

export default RentalForm;
