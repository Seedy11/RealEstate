/** @format */

import React from "react";
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
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
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

      {/* <Button text={"Renting"}></Button>
      <Button text={"Letting"}></Button> */}
      <TwoColumn>
        <Row>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Explore the properties
          </h2>

          <Col style={{ textAlign: "center" }}>
            Our team of highly skilled professionals comes from diverse
            backgrounds, bringing expertise in [List Key Areas of Expertise,
            e.g., software development, healthcare, finance, etc.]. This
            diversity allows us to approach problems from multiple perspectives,
            resulting in creative and practical solutions. We pride ourselves on
            a collaborative work environment where innovation thrives, and we
            are committed to upholding the highest standards of quality and
            integrity. Whether working with startups or large enterprises, we
            believe in building strong partnerships and empowering our clients
            to achieve their goals.
          </Col>
        </Row>
      </TwoColumn>
      <ThreeColumn>
        <Row>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Explore the properties
          </h2>
          <Col style={{ textAlign: "center" }}>
            <FaPhoneAlt style={{ fontSize: "5rem" }} />
            <Col>
              Our team of highly skilled professionals comes from diverse
            </Col>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <CiMail style={{ fontSize: "5rem" }} />
            <Col>
              Our team of highly skilled professionals comes from diverse
            </Col>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <FaHouseChimney style={{ fontSize: "5rem" }} />
            <Col>
              Our team of highly skilled professionals comes from diverse
            </Col>
          </Col>
        </Row>
      </ThreeColumn>

      <Row style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>Checkout out latest property </h2>

        <Button
          onClick={() => navigate("/letting")}
          text={"view all..."}></Button>
      </Row>

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
    </>
  );
};

export default HomeScreen;
