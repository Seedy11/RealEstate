/** @format */

import React, { useState } from "react";
import LargeContainer from "../../Components/LargeContainer/LargeContainer";
import LettingContainer from "./Letting.element";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import GridContainer from "../../StyledItems/GridContainer.elements";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

function Letting() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState();
  // const [deleteProperty, setDeleteProperty] = useState();
  const bedroom = [
    "1 Bedroom",
    "2 Bedroom",
    "3 Bedroom",
    "4 Bedroom",
    "5 Bedroom",
  ];

  React.useEffect(() => {
    async function propertyListData() {
      try {
        const propertiesData = await axios.get(
          "http://localhost:3001/rentalProperties/propertyList"
        );
        setProperties(propertiesData.data);
        console.log(propertiesData.data);
      } catch (error) {
        return error;
      }
    }
    propertyListData();
  }, []);

  function deletePropertyList(PropertyID) {
    axios.delete(`http://localhost:3001/rentalProperties/delete/${PropertyID}`);
    setProperties(
      properties.filter((deleteProperty) => {
        return deleteProperty.PropertyID !== PropertyID;
      })
    );
  }

  return (
    <Container>
      <LettingContainer>
        <h1>Letting</h1>
        <GridContainer>
          <DropdownMenu DropdownName='Postcode' option={bedroom} />
          <DropdownMenu DropdownName='Max beds' option={bedroom} />
          <DropdownMenu DropdownName='Max beds' option={bedroom} />

          <DropdownMenu DropdownName='house Type' option={bedroom} />
          <DropdownMenu DropdownName='Min price' option={bedroom} />
          <Container className='buttonAlignment'>
            <Button style={{ backgroundColor: "black", width: "100%" }}>
              {" "}
              Search
            </Button>
            <Button
              style={{ width: "100%" }}
              onClick={() => navigate("/rentalForm")}>
              {" "}
              Add Property{" "}
            </Button>
          </Container>
        </GridContainer>
      </LettingContainer>
      {!properties ? (
        <Container>
          <p>letting Not available </p>
        </Container>
      ) : (
        properties.map((property) => (
          <>
            <LargeContainer
              id={property.PropertyID}
              key={property.PropertyID}
              Address={property.Address}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              available_date={property.available_date}
              City={property.City}
              onClick={() => navigate("/PropertyDetail")}
              delete={() => {
                deletePropertyList(property.PropertyID);
              }}
            />
          </>
        ))
      )}
    </Container>
  );
}

export default Letting;
