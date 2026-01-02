/** @format */
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LargeContainer from "../../Components/LargeContainer/LargeContainer";
import { Property } from "../../redux/slice/letting";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

function Letting() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.lettings.PropertyItems || []);

  const bedroomOptions = [
    "1 Bedroom",
    "2 Bedroom",
    "3 Bedroom",
    "4 Bedroom",
    "5 Bedroom",
  ];
  const houseTypeOptions = ["Flat", "Detached", "Semi-Detached", "Terraced"];
  const priceOptions = ["£500", "£1000", "£1500", "£2000", "£2500"];

  useEffect(() => {
    dispatch(Property());
  }, [dispatch]);

  return (
    <Container style={{ padding: "2rem 0" }}>
      <h1 style={{ marginBottom: "2rem", fontWeight: "bold" }}>Lettings</h1>

      {/* Filters */}
      <Row className='mb-4 g-3'>
        <Col xs={6} md={2}>
          <DropdownMenu DropdownName='Postcode' option={bedroomOptions} />
        </Col>
        <Col xs={6} md={2}>
          <DropdownMenu DropdownName='Max Beds' option={bedroomOptions} />
        </Col>
        <Col xs={6} md={2}>
          <DropdownMenu DropdownName='Min Beds' option={bedroomOptions} />
        </Col>
        <Col xs={6} md={2}>
          <DropdownMenu DropdownName='House Type' option={houseTypeOptions} />
        </Col>
        <Col xs={6} md={2}>
          <DropdownMenu DropdownName='Min Price' option={priceOptions} />
        </Col>
        <Col xs={6} md={2}>
          <DropdownMenu DropdownName='Max Price' option={priceOptions} />
        </Col>
      </Row>

      {/* Property Grid */}
      {properties.length === 0 ? (
        <p>No properties available for letting</p>
      ) : (
        <>
          {properties.map((property) => (
            <Col key={property.PropertyID}>
              <LargeContainer
                cardType='LargeCard'
                images={property.images}
                id={property.PropertyID}
                Address={property.Address}
                Bedrooms={property.Bedrooms}
                Bathrooms={property.Bathrooms}
                Available_date={property.Available_date}
                Price={property.Price}
                Phone_number={property.Phone_number}
                City={property.City}
                onClick={() =>
                  navigate(`/PropertyDetail/${property.PropertyID}`)
                }
              />
            </Col>
          ))}
        </>
      )}
    </Container>
  );
}

export default Letting;
