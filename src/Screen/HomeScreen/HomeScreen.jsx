/** @format */

import React, { useEffect } from "react";
import crib from "../../Images/pexels-alex-staudinger-1732414.jpg";
import crib2 from "../../Images/pexels-asad-photo-maldives-1268871.jpg";
import crib3 from "../../Images/pexels-expect-best-323780.jpg";
import crib4 from "../../Images/pexels-mark-mccammon-2724749.jpg";
import ImageWrapper from "./HomeScreen.element";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Button from "../../Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import GridContainer from "../../StyledItems/GridContainer.elements";
import axios from "axios";

const HomeScreen = ({ text }) => {
  const user = useSelector((state) => state);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://zillow56.p.rapidapi.com/search",
          {
            headers: {
              "X-RapidAPI-Key":
                "7ac5172469mshb5f78091104fb9ep181ee8jsn4e552dac05d5",
              "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
            },
          }
        );
        console.log("response", response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  });
  console.log("redux testing", user);

  // const options = {
  //   method: 'GET',
  //   url: 'https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice',
  //   params: {
  //     address: '5500 Grand Lake Drive, San Antonio, TX, 78244',
  //     propertyType: 'Single Family',
  //     bedrooms: '4',
  //     bathrooms: '2',
  //     squareFootage: '1600',
  //     compCount: '5'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': '7ac5172469mshb5f78091104fb9ep181ee8jsn4e552dac05d5',
  //     'X-RapidAPI-Host': 'realtymole-rental-estimate-v1.p.rapidapi.com'
  //   }
  // };

  // try {
  // 	const response =  axios.request(options);
  // 	console.log(response.data);
  // } catch (error) {
  // 	console.error(error);
  // }
  return (
    <>
      <ImageWrapper>
        <AliceCarousel autoPlay autoPlayInterval='2000'>
          <img src={crib} className='sliderimg' />
          <img src={crib2} className='sliderimg' />
          <img src={crib3} className='sliderimg' />
          <img src={crib4} className='sliderimg' />
        </AliceCarousel>
      </ImageWrapper>

      <h2>Explore the properties</h2>

      <Button text={"Renting"}></Button>
      <Button text={"Letting"}></Button>

      <GridContainer style={{ margin: "5rem 0rem" }}>
        <div className='card grid-item'>
          <img src={crib} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href='#' className='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
        <div className='card grid-item'>
          <img src={crib2} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href='#' className='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
        <div className='card grid-item'>
          <img src={crib3} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href='#' className='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
        <div className='card grid-item'>
          <img src={crib4} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
