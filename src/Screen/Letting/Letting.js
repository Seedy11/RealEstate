/** @format */

import React, { useEffect, useState } from "react";
import LargeContainer from "../../Components/LargeContainer/LargeContainer";
import LettingContainer from "./Letting.element";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import GridContainer from "../../StyledItems/GridContainer.elements";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { useDispatch, useSelector } from "react-redux";
import { Property } from "../../redux/slice/letting";

function Letting() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState();
  const dispatch = useDispatch();
  // const [deleteProperty, setDeleteProperty] = useState();
  const bedroom = [
    "1 Bedroom",
    "2 Bedroom",
    "3 Bedroom",
    "4 Bedroom",
    "5 Bedroom",
  ];

  // React.useEffect(() => {
  //   async function propertyListData() {
  //     try {
  //       const propertiesData = await axios.get(
  //         "http://localhost:3001/rentalProperties/propertyList"
  //       );
  //       setProperties(propertiesData.data);
  //       console.log(propertiesData.data);
  //     } catch (error) {
  //       return error;
  //     }
  //   }
  //   propertyListData();
  // }, []);

  useEffect(() => {
    dispatch(Property());
  }, [Property]);
  const property = useSelector((state) => state.lettings.PropertyItems);
  console.log("test", property);

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
      {/* <LettingContainer> */}
      <h1>Letting</h1>
      {/* <GridContainer> */}
      <DropdownMenu DropdownName='Postcode' option={bedroom} />
      <DropdownMenu DropdownName='Max beds' option={bedroom} />
      <DropdownMenu DropdownName='Max beds' option={bedroom} />

      <DropdownMenu DropdownName='house Type' option={bedroom} />
      <DropdownMenu DropdownName='Min price' option={bedroom} />

      <Button
        // style={{ width: "100%" }}
        onClick={() => navigate("/rentalForm")}>
        {" "}
        Add Property{" "}
      </Button>

      {!property ? (
        <Container>
          <p>letting Not available </p>
        </Container>
      ) : (
        property.map((property) => (
          <>
            <LargeContainer
              id={property.PropertyID}
              key={property.PropertyID}
              Address={property.Address}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              available_date={property.available_date}
              City={property.City}
              onClick={() => navigate(`/PropertyDetail/${property.PropertyID}`)}
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
