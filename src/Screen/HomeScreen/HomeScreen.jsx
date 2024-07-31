/** @format */

import React, { useEffect } from "react";
import crib from "../../Images/pexels-alex-staudinger-1732414.jpg";
import crib2 from "../../Images/pexels-asad-photo-maldives-1268871.jpg";
import crib3 from "../../Images/pexels-expect-best-323780.jpg";
import crib4 from "../../Images/pexels-mark-mccammon-2724749.jpg";
import ImageWrapper from "./HomeScreen.element";
import "react-alice-carousel/lib/alice-carousel.css";
import Button from "../../Components/Button/Button";
import GridContainer from "../../StyledItems/GridContainer.elements";
import { Carousel } from "react-responsive-carousel";

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

      <h2>Explore the properties</h2>

      <Button text={"Renting"}></Button>
      <Button text={"Letting"}></Button>

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
    </>
  );
};

export default HomeScreen;
