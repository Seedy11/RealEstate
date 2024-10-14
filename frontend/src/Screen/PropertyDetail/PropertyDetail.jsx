/** @format */

import React, { useEffect, useState } from "react";
import crib from "../../Images/pexels-alex-staudinger-1732414.jpg";
import crib2 from "../../Images/pexels-asad-photo-maldives-1268871.jpg";
import crib3 from "../../Images/pexels-expect-best-323780.jpg";
import crib4 from "../../Images/pexels-mark-mccammon-2724749.jpg";

// import "react-alice-carousel/lib/alice-carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageWrapper from "../HomeScreen/HomeScreen.element";
import GridContainer, {
  TwoColumn,
} from "../../StyledItems/GridContainer.elements";
import { Button, Container } from "react-bootstrap";
import FormContainer from "../Login/Login.element";
import { useDispatch } from "react-redux";
import { Property } from "../../redux/slice/letting";
import { useParams } from "react-router-dom";
import Map from "../../Components/Map/Map";
import axios from "axios";

const PropertyDetail = () => {
  const params = useParams();
  const [property, setProperties] = useState();
  const PropertyID = params.id;
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function propertyListData() {
      try {
        const propertiesData = await axios.get(
          `http://localhost:3001/rentalProperties/propertyList/${PropertyID}`
        );
        return setProperties(propertiesData.data[0]);
        // console.log(propertiesData.data);
      } catch (error) {
        return error;
      }
    }
    propertyListData();
  }, []);
  console.log("test", property);
  return (
    <>
      {!property ? (
        <h2>no property</h2>
      ) : (
        <Container>
          {/* <Map /> */}
          <ImageWrapper>
            <Carousel>
              <div>
                <img src={crib} />
              </div>
              <div>
                <img src={crib2} />
              </div>
              <div>
                <img src={crib3} />
              </div>
              <div>
                <img src={crib4} />
              </div>
            </Carousel>
          </ImageWrapper>
          <TwoColumn>
            <Container>
              <h2>Features</h2>

              <ul>
                <GridContainer>
                  <div>
                    <li>Bedrooms: {property.Address}</li>
                    <li>bathrooms: {property.Bathrooms}</li>
                    <li>price: $650.00</li>
                  </div>
                  <div>
                    <li>available: {property.Available_date}</li>
                    <li>City: {property.City}</li>
                    <li>Post code: {property.PostCode}</li>
                  </div>
                </GridContainer>
              </ul>

              <hr />
              <h2>Lettings details</h2>
              <ul>
                <li>
                  Bedrooms: 4 spacious bedrooms, including a luxurious master
                  suite with a walk-in closet and en-suite bathroom.
                </li>
              </ul>

              <hr />

              <h2>property description</h2>
              <p>Description: {property.Descriptions}</p>

              <hr />

              <Map />
            </Container>

            <Container>
              <FormContainer>
                <h2>contact us</h2>
                <Button>Call agent</Button>
                {/* <br />
            <br /> */}
                <Button>Request details</Button>
              </FormContainer>
            </Container>
          </TwoColumn>
          <hr />
        </Container>
      )}
    </>
  );
};

export default PropertyDetail;
