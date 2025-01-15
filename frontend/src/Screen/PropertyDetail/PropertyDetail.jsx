/** @format */

import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Map from "../../Components/Map/Map";
import { PropertyInfo } from "../../redux/slice/propetydetail";

const PropertyDetail = () => {
  const params = useParams();
  const property_id = params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PropertyInfo(property_id));
  }, [PropertyInfo]);
  const property = useSelector(
    (state) => state.PropertyInfo.PropertyDetailItems[0]
  );
  console.log("testdetail", property);

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
                    <li>Bedrooms: {property.Bathrooms}</li>
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
