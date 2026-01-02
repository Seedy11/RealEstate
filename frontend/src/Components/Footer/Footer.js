/** @format */
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { FooterContainer } from "./Footer.element";

export default function AppFooter() {
  return (
    <FooterContainer>
      <Container>
        <Row className='social-row'>
          <Col className='text-center'>
            <h5>Follow Us</h5>
            <div className='social-icons'>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noopener noreferrer'>
                <FaFacebook />
              </a>
              <a
                href='https://www.twitter.com'
                target='_blank'
                rel='noopener noreferrer'>
                <FaTwitter />
              </a>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noopener noreferrer'>
                <FaInstagram />
              </a>
              <a
                href='https://www.linkedin.com'
                target='_blank'
                rel='noopener noreferrer'>
                <FaLinkedin />
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
    </FooterContainer>
  );
}
