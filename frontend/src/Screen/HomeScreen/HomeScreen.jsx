/** @format */

import React, { useEffect } from "react";
import crib from "../../Images/pexels-alex-staudinger-1732414.jpg";
import crib2 from "../../Images/pexels-asad-photo-maldives-1268871.jpg";
import crib3 from "../../Images/pexels-expect-best-323780.jpg";
import crib4 from "../../Images/pexels-mark-mccammon-2724749.jpg";
import crib5 from "../../Images/mortgage.jpg";
import ImageWrapper from "./HomeScreen.element";
import "react-alice-carousel/lib/alice-carousel.css";
import Button from "../../Components/Button/Button";
import GridContainer, {
  TwoColumn,
} from "../../StyledItems/GridContainer.elements";
import { Carousel } from "react-responsive-carousel";
import { Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";

const HomeScreen = ({ text }) => {
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
      <br></br>

      {/* <Button text={"Renting"}></Button>
      <Button text={"Letting"}></Button> */}
      <TwoColumn>
        <Row>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Explore the properties
          </h2>

          <Col sm={8}>
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
          <Col sm={2}>
            <Image
              style={{ width: "300px", height: "300px" }}
              src={crib5}
              roundedCircle
            />
          </Col>
        </Row>
      </TwoColumn>

      <Row style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>Checkout out latest property </h2>

        <Button text={"view all..."}></Button>
      </Row>

      <GridContainer style={{ margin: "5rem 0rem" }}>
        <div className='card grid-item'>
          <img src={crib} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Letting</h5>
            <p className='card-text'>
              check our most recent property to let with photos
            </p>
            <a href='#' className='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
        <div className='card grid-item'>
          <img src={crib2} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Sales </h5>
            <p className='card-text'>
              check out for property for sales for investor and mortgages
            </p>
            <a href='#' className='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
        <div className='card grid-item'>
          <img src={crib3} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Free validation</h5>
            <p className='card-text'>get a free and accurate valuation.</p>
            <a href='#' className='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
        <div className='card grid-item'>
          <img src={crib4} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Mortgage</h5>
            <p className='card-text'>
              get a mortgage with and calculate the mortgage
            </p>
            <a href='#' className='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
      </GridContainer>
      <p className='card-text'>
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
