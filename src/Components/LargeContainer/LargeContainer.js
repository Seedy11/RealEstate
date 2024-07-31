/** @format */

import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import crib from "../../Images/pexels-alex-staudinger-1732414.jpg";
import crib2 from "../../Images/pexels-asad-photo-maldives-1268871.jpg";
import crib3 from "../../Images/pexels-expect-best-323780.jpg";
import crib4 from "../../Images/pexels-mark-mccammon-2724749.jpg";
import { CardContainer, ImageWrapper } from "./LargeContainer.element";
import { Carousel } from "react-responsive-carousel";

const LargeContainer = (props) => {
  return (
    <CardContainer>
      <Row onClick={props.onClick}>
        <Col>
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
        </Col>
        <Col style={{ margin: "1rem 2rem" }}>
          <Card.Body>
            <Card.Text>Property number: {props.id}</Card.Text>
            <Card.Text>Address: {props.Address}</Card.Text>
            <Card.Text>City: {props.City}</Card.Text>
            <hr />
            <Card.Text>Bedroom: {props.bedrooms}</Card.Text>
            <Card.Text>Bathrooms: {props.bathrooms}</Card.Text>
            <Card.Text>Available: {props.available_date}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </CardContainer>
  );
};

export default LargeContainer;
