/** @format */

import React, { useEffect, useState } from "react";
import LargeContainer from "../../Components/LargeContainer/LargeContainer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
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

  useEffect(() => {
    dispatch(Property());
  }, [Property]);
  const property = useSelector((state) => state.lettings.PropertyItems);
  console.log("test", property);

  function deletePropertyList(property_id) {
    axios.delete(
      `http://localhost:3001/rentalProperties/delete/${property_id}`
    );
    setProperties(
      properties.filter((deleteProperty) => {
        return deleteProperty.property_id !== property_id;
      })
    );
  }

  React.useEffect(() => {
    async function searchPropertyList() {
      try {
        const getData = await axios.get(
          `http://localhost:3001/rentalProperties/citySearch/?City='yvyutv'&Bedrooms=8`
        );
        console.log("apis", getData);
      } catch (error) {
        return error;
      }
    }

    searchPropertyList();
  }, []);
  // }

  return (
    <Container>
      {/* <LettingContainer> */}
      <h1>Letting</h1>
      {/* <GridContainer> */}
      {/* <Container>
        <DropdownMenu DropdownName='Postcode' option={bedroom} />
        <DropdownMenu DropdownName='Max beds' option={bedroom} />
        <DropdownMenu DropdownName='Max beds' option={bedroom} />

        <DropdownMenu DropdownName='house Type' option={bedroom} />
        <DropdownMenu DropdownName='Min price' option={bedroom} />
      </Container> */}
      {property.length === 0 ? (
        <Container>
          <p>letting Not available </p>
        </Container>
      ) : (
        property.map((property) => (
          <>
            <LargeContainer
              cardType='LargeCard'
              id={property.PropertyID}
              key={property.PropertyID}
              Address={property.Address}
              Bedrooms={property.Bedrooms}
              Bathrooms={property.Bathrooms}
              Available_date={property.Available_date}
              Price={property.Price}
              Phone_number={property.Phone_number}
              City={property.City}
              onClick={() =>
                navigate(`/PropertyDetail/${property.property_id}`)
              }
              delete={() => {
                deletePropertyList(property.PropertyID);
              }}
            />
          </>
        ))
      )}
      <Container>
        <DropdownMenu DropdownName='Postcode' option={bedroom} />
        <DropdownMenu DropdownName='Max beds' option={bedroom} />
        <DropdownMenu DropdownName='Max beds' option={bedroom} />

        <DropdownMenu DropdownName='house Type' option={bedroom} />
        <DropdownMenu DropdownName='Min price' option={bedroom} />
      </Container>
    </Container>
  );
}

export default Letting;
