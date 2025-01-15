/** @format */

import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple,
} from "mdb-react-ui-kit";
import Footer from "./Footer.element";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

export default function App() {
  return (
    <>
      <footer className='bg-dark text-white py-4'>
        <Container>
          <Row>
            <Col className='text-center'>
              <h5>Follow Us</h5>
              <div className='d-flex justify-content-center'>
                <a href='https://www.facebook.com' className='text-white mx-2'>
                  <FaFacebook size={30} />
                </a>
                <a href='https://www.twitter.com' className='text-white mx-2'>
                  <FaTwitter size={30} />
                </a>
                <a href='https://www.instagram.com' className='text-white mx-2'>
                  <FaInstagram size={30} />
                </a>
                <a href='https://www.linkedin.com' className='text-white mx-2'>
                  <FaLinkedin size={30} />
                </a>
              </div>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col className='text-center'>
              <p>&copy; 2025 Your Company. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
