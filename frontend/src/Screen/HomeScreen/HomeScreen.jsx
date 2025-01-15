/** @format */

import React, { useEffect } from "react";
import crib from "../../Images/pexels-alex-staudinger-1732414.jpg";
import crib2 from "../../Images/pexels-asad-photo-maldives-1268871.jpg";
import crib3 from "../../Images/pexels-expect-best-323780.jpg";
import crib4 from "../../Images/pexels-mark-mccammon-2724749.jpg";
import { FaHouseChimney } from "react-icons/fa6";
import ImageWrapper from "./HomeScreen.element";
import "react-alice-carousel/lib/alice-carousel.css";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Button from "../../Components/Button/Button";
import GridContainer, {
  ThreeColumn,
  TwoColumn,
} from "../../StyledItems/GridContainer.elements";
import { Carousel } from "react-responsive-carousel";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Property } from "../../redux/slice/letting";
import { useDispatch, useSelector } from "react-redux";
import LargeContainer from "../../Components/LargeContainer/LargeContainer";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Property());
  }, [Property]);
  const property = useSelector((state) => state.lettings.PropertyItems);
  console.log("test", property);
  const recentProperty = property.slice(0, 3);

  const navigate = useNavigate();
  return (
    <>
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

      <TwoColumn style={{ backgroundColor: "white", padding: "12rem 5rem" }}>
        <Col>
          <ImageWrapper>
            {" "}
            <img src={crib4} />
          </ImageWrapper>
        </Col>
        <Col>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "blue",
            }}>
            Explore the properties
          </h2>
          Our team of highly skilled professionals comes from diverse
          backgrounds, bringing expertise in [List Key Areas of Expertise, e.g.,
          software development, healthcare, finance, etc.]. This diversity
          allows us to approach problems from multiple perspectives, resulting
          in creative and practical solutions. We pride ourselves on a
          collaborative work environment where innovation thrives, and we are
          committed to upholding the highest standards of quality and integrity.
          Whether working with startups or large enterprises, we believe in
          building strong partnerships and empowering our clients to achieve
          their goals.
        </Col>

        {/* </Row> */}
      </TwoColumn>
      <Container>
        <ThreeColumn>
          <Row>
            <h2
              style={{
                textAlign: "center",
                marginBottom: "2rem",
                color: "blue",
              }}>
              Explore the properties
            </h2>
            <Col style={{ textAlign: "center" }}>
              <FaPhoneAlt style={{ fontSize: "5rem", color: "blue" }} />
              <Col>
                Our team of highly skilled professionals comes from diverse
              </Col>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <CiMail style={{ fontSize: "5rem", color: "blue" }} />
              <Col>
                Our team of highly skilled professionals comes from diverse
              </Col>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <FaHouseChimney style={{ fontSize: "5rem", color: "blue" }} />
              <Col>
                Our team of highly skilled professionals comes from diverse
              </Col>
            </Col>
          </Row>
        </ThreeColumn>
      </Container>
      <Container>
        <ThreeColumn>
          <Row style={{ textAlign: "center" }}>
            <h2>Checkout out latest property </h2>
            {recentProperty.length === 0 ? (
              <Container>
                <p>letting Not available </p>
              </Container>
            ) : (
              recentProperty.map((property) => (
                <Col>
                  <LargeContainer
                    cardType='smallCard'
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
                  />
                </Col>
              ))
            )}
            <Button
              onClick={() => navigate("/letting")}
              text={"view all..."}></Button>
          </Row>
        </ThreeColumn>
      </Container>

      <Container style={{ marginTop: "5rem" }}>
        <p className='card-text' style={{ fontSize: "1.2rem" }}>
          sign up to get latest information about property
        </p>
        <InputGroup className='mb-3'>
          <Form.Control
            placeholder='Email....'
            aria-label="Recipient's username"
            aria-describedby='basic-addon2'
          />
          <Button variant='Danger' id='button-addon2' text={"Subscribe"}>
            Button
          </Button>
        </InputGroup>
      </Container>
    </>
  );
};

export default HomeScreen;
