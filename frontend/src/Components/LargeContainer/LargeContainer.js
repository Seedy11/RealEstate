/** @format */

import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import crib from "../../Images/pexels-alex-staudinger-1732414.jpg";
import crib2 from "../../Images/pexels-asad-photo-maldives-1268871.jpg";
import crib3 from "../../Images/pexels-expect-best-323780.jpg";
import crib4 from "../../Images/pexels-mark-mccammon-2724749.jpg";
import Logo from "../../Images/logo.png";
import {
  CardContainer,
  ImageWrapper,
  Position,
} from "./LargeContainer.element";
import { Carousel } from "react-responsive-carousel";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";

const LargeContainer = (props) => {
  switch (props.cardType) {
    case "LargeCard":
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
                {/* <Card.Text>Available: {props.Available_date}</Card.Text> */}
                <Card.Text>£ {props.Price}</Card.Text>
                {/* <Card.Text>Address: {props.Address}</Card.Text>
            <Card.Text>City: {props.City}</Card.Text> */}

                <hr />
                <Position>
                  <Card.Text>
                    <FaBed /> : {props.Bedrooms}
                  </Card.Text>
                  <Card.Text>
                    <FaBath /> : {props.Bathrooms}
                  </Card.Text>
                </Position>
                <hr />

                <Position>
                  <Card.Text>
                    Address: {props.Address} City: {props.City}
                  </Card.Text>
                </Position>
                <hr />
                <Position>
                  <Card.Text>
                    <img
                      src={Logo}
                      className='card-img-top'
                      alt='...'
                      style={{ width: "3rem" }}
                    />
                  </Card.Text>
                  <Row>
                    <Card.Text>Tigers Estate Agents: </Card.Text>
                    <Card.Text>{props.Phone_number}</Card.Text>
                  </Row>
                </Position>
              </Card.Body>
            </Col>
          </Row>
        </CardContainer>
      );
    case "smallCard":
      return (
        <CardContainer
          style={{
            maxWidth: "400px",
            alignItems: "center",
          }}>
          <Row
            onClick={props.onClick}
            style={{ margin: "0rem 1rem", fontSize: "1rem" }}>
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
            {/* <Col style={{ margin: "1rem 2rem" }}> */}
            <Card.Body>
              {/* <Card.Text>Available: {props.Available_date}</Card.Text> */}
              <Card.Text>£ {props.Price}</Card.Text>
              {/* <Card.Text>Address: {props.Address}</Card.Text>
              <Card.Text>City: {props.City}</Card.Text> */}

              <hr />
              <Position style={{ fontSize: "1rem" }}>
                <Card.Text>
                  <FaBed /> : {props.Bedrooms}
                </Card.Text>
                <Card.Text>
                  <FaBath /> : {props.Bathrooms}
                </Card.Text>
              </Position>
              {/* <hr /> */}

              {/* <Position style={{ fontSize: "1rem" }}>
                <Card.Text>
                  <img
                    src={Logo}
                    className='card-img-top'
                    alt='...'
                    style={{ width: "3rem" }}
                  />
                </Card.Text>
                <Row>
                  <Card.Text>Tigers Estate Agents: </Card.Text>
                  <Card.Text>{props.Phone_number}</Card.Text>
                </Row>
              </Position> */}
            </Card.Body>
            {/* </Col> */}
          </Row>
        </CardContainer>
      );
    default:
      return;
  }
};

export default LargeContainer;
