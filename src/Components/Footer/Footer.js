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

export default function App() {
  return (
    <>
      <MDBFooter className='text-center text-white'>
        <Footer>
          <MDBContainer
            className='p-4'
            style={{
              borderRadius: "5px",
              marginBottom: "2rem",
              backgroundColor: "white",
              border: "1px solid #dee2e6",
            }}>
            <section className=''>
              <MDBRow>
                <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                  <MDBRipple
                    rippleColor='light'
                    className='bg-image hover-overlay shadow-1-strong rounded'>
                    <img
                      src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp'
                      className='w-100'
                    />
                    <a href='#!'>
                      <div
                        className='mask'
                        style={{
                          backgroundColor: "rgba(251, 251, 251, 0.2)",
                        }}></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                  <MDBRipple
                    rippleColor='light'
                    className='bg-image hover-overlay shadow-1-strong rounded'>
                    <img
                      src='https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp'
                      className='w-100'
                    />
                    <a href='#!'>
                      <div
                        className='mask'
                        style={{
                          backgroundColor: "rgba(251, 251, 251, 0.2)",
                        }}></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                  <MDBRipple
                    rippleColor='light'
                    className='bg-image hover-overlay shadow-1-strong rounded'>
                    <img
                      src='https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp'
                      className='w-100'
                    />
                    <a href='#!'>
                      <div
                        className='mask'
                        style={{
                          backgroundColor: "rgba(251, 251, 251, 0.2)",
                        }}></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                  <MDBRipple
                    rippleColor='light'
                    className='bg-image hover-overlay shadow-1-strong rounded'>
                    <img
                      src='https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp'
                      className='w-100'
                    />
                    <a href='#!'>
                      <div
                        className='mask'
                        style={{
                          backgroundColor: "rgba(251, 251, 251, 0.2)",
                        }}></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                  <MDBRipple
                    rippleColor='light'
                    className='bg-image hover-overlay shadow-1-strong rounded'>
                    <img
                      src='https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp'
                      className='w-100'
                    />
                    <a href='#!'>
                      <div
                        className='mask'
                        style={{
                          backgroundColor: "rgba(251, 251, 251, 0.2)",
                        }}></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                  <MDBRipple
                    rippleColor='light'
                    className='bg-image hover-overlay shadow-1-strong rounded'>
                    <img
                      src='https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp'
                      className='w-100'
                    />
                    <a href='#!'>
                      <div
                        className='mask'
                        style={{
                          backgroundColor: "rgba(251, 251, 251, 0.2)",
                        }}></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>
        </Footer>
        <div
          className='text-center p-3'
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2024 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
}
