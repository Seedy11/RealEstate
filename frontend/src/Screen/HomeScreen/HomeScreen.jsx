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
import {
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
  const FeatureCard = ({ icon, title, description }) => (
    <Col style={{ textAlign: "center", marginBottom: "2rem" }}>
      <div style={{ fontSize: "4rem", color: "#007bff", marginBottom: "1rem" }}>
        {icon}
      </div>
      <h5>{title}</h5>
      <p>{description}</p>
    </Col>
  );

  const navigate = useNavigate();
  return (
    <>
      <ImageWrapper>
        <Carousel showThumbs={false} infiniteLoop autoPlay interval={5000}>
          {[crib, crib2, crib3, crib4].map((img, idx) => (
            <div key={idx}>
              <img src={img} alt={`Property ${idx + 1}`} />
              <div className='overlay'>
                <h1>Find Your Dream Home</h1>
                <button onClick={() => navigate("/letting")}>
                  Explore Properties
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </ImageWrapper>

      <TwoColumn
        style={{
          backgroundColor: "#f8f9fa",
          padding: "6rem 5rem",
          borderRadius: "20px",
          gap: "2rem",
        }}>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <img
            src={crib4}
            alt='Explore Properties'
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Col>

        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 1rem",
          }}>
          <h2
            style={{
              color: "#007bff",
              marginBottom: "1rem",
              fontWeight: "700",
              fontSize: "2rem",
            }}>
            Explore Our Properties
          </h2>
          <p
            style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#495057" }}>
            Discover premium properties in prime locations. Our team helps you
            find the perfect home or investment opportunity with a personalized
            touch.
          </p>
          <Button
            onClick={() => navigate("/letting")}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#959ca3ff")
            }>
            View Listings
          </Button>
        </Col>
      </TwoColumn>
      <Container
      // style={{
      //   textAlign: "center",
      //   margin: "10rem",
      // }}
      >
        <ThreeColumn style={{ marginBottom: "6rem" }}>
          <Row>
            <FeatureCard
              icon={<FaPhoneAlt />}
              title='Call Us'
              description='Reach our team anytime'
            />
            <FeatureCard
              icon={<CiMail />}
              title='Email Support'
              description='Get in touch via email'
            />
            <FeatureCard
              icon={<FaHouseChimney />}
              title='Property Visits'
              description='Schedule viewings easily'
            />
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
                <Col key={property.PropertyID}>
                  <LargeContainer
                    cardType='smallCard'
                    id={property.PropertyID}
                    images={property.images}
                    Address={property.Address}
                    Bedrooms={property.Bedrooms}
                    Bathrooms={property.Bathrooms}
                    Price={property.Price}
                    onClick={() =>
                      navigate(`/PropertyDetail/${property.PropertyID}`)
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

      <Container style={{ marginTop: "5rem", textAlign: "center" }}>
        <h3>Subscribe for Latest Listings</h3>
        <p>Get updates about new properties directly in your inbox</p>
        <InputGroup
          className='mb-3'
          style={{ maxWidth: "500px", margin: "auto" }}>
          <Form.Control placeholder='Email...' />
          <Button text='Subscribe' />
        </InputGroup>
      </Container>
    </>
  );
};

export default HomeScreen;
