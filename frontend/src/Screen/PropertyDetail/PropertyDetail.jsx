/** @format */

import React, { useEffect } from "react";
import crib from "../../Images/pexels-alex-staudinger-1732414.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Map from "../../Components/Map/Map";
import { PropertyInfo } from "../../redux/slice/propetydetail";
import {
  ImageWrapper,
  PropertyDetailContainer,
} from "./PropertyDetail.element";
import GridContainer, {
  TwoColumn,
} from "../../StyledItems/GridContainer.elements";
import FormContainer from "../Login/Login.element";

const PropertyDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PropertyInfo(id));
  }, [dispatch, id]);

  const property = useSelector(
    (state) => state.PropertyInfo.PropertyDetailItems
  );

  if (!property) return <h2>No property found</h2>;

  return (
    <PropertyDetailContainer>
      <Container style={{ maxWidth: "1200px", marginTop: "2rem" }}>
        {/* IMAGE CAROUSEL */}
        <ImageWrapper>
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {property.images && property.images.length > 0 ? (
              property.images.map((image) => (
                <div key={image.imageId}>
                  <img
                    src={`https://stark-spire-28814-ebfee6c4755b.herokuapp.com/uploads/${image.imageUrl}`}
                    alt='Property'
                  />
                </div>
              ))
            ) : (
              <img src={crib} alt='No property' />
            )}
          </Carousel>
          {/* PRICE TAG */}
          <div className='price-tag'>£ {property.Price}</div>
        </ImageWrapper>

        {/* TWO COLUMN LAYOUT */}
        <TwoColumn style={{ marginTop: "2rem", gap: "2rem" }}>
          {/* LEFT COLUMN: FEATURES + DESCRIPTION + MAP */}
          <div>
            {/* FEATURES CARD */}
            <div className='card-section'>
              <h2>Features</h2>
              <GridContainer>
                <div>
                  <ul>
                    <li>
                      <strong>Bedrooms:</strong> {property.Bedrooms}
                    </li>
                    <li>
                      <strong>Bathrooms:</strong> {property.Bathrooms}
                    </li>
                    <li>
                      <strong>Price:</strong> £{property.Price}
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <strong>Available:</strong> {property.Available_date}
                    </li>
                    <li>
                      <strong>City:</strong> {property.City}
                    </li>
                    <li>
                      <strong>Postcode:</strong> {property.Postcode}
                    </li>
                  </ul>
                </div>
              </GridContainer>
            </div>

            {/* DESCRIPTION CARD */}
            <div className='card-section'>
              <h2>Property Description</h2>
              <p>{property.Descriptions}</p>
            </div>

            {/* MAP CARD */}
            <div className='card-section'>
              <Map />
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT */}
          <div>
            <FormContainer
              className='card-section'
              style={{ textAlign: "center", position: "sticky", top: "2rem" }}>
              <h2>Contact Us</h2>
              <p>
                <strong>Phone:</strong> {property.Phone_number}
              </p>
              <p>
                <strong>Email:</strong> {property.Email}
              </p>
            </FormContainer>
          </div>
        </TwoColumn>
      </Container>
    </PropertyDetailContainer>
  );
};

export default PropertyDetail;
