/** @format */

import React, { useEffect } from "react";
import crib from "../../Images/pexels-alex-staudinger-1732414.jpg";
import crib2 from "../../Images/pexels-asad-photo-maldives-1268871.jpg";
import crib3 from "../../Images/pexels-expect-best-323780.jpg";
import crib4 from "../../Images/pexels-mark-mccammon-2724749.jpg";

// import "react-alice-carousel/lib/alice-carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageWrapper from "../HomeScreen/HomeScreen.element";
import GridContainer, {
  TwoColumn,
} from "../../StyledItems/GridContainer.elements";
import { Button, Container } from "react-bootstrap";
import FormContainer from "../Login/Login.element";

const PropertyDetail = () => {
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
      <TwoColumn>
        <Container>
          <h2>Features</h2>

          <ul>
            <GridContainer>
              <div>
                <li>Bedrooms: 4</li>
                <li>bathrooms: 2</li>
                <li>price: $650.00</li>
              </div>
              <div>
                <li>available: now</li>
                <li>City: leeds</li>
                <li>Post code: lS4 5LP</li>
              </div>
            </GridContainer>
          </ul>

          <hr />
          <h2>Lettings details</h2>
          <ul>
            <li>
              Bedrooms: 4 spacious bedrooms, including a luxurious master suite
              with a walk-in closet and en-suite bathroom.
            </li>
            <li>
              Living Space: Approximately 2,500 sq. ft. of living space,
              thoughtfully designed for both relaxation and entertaining.
            </li>
            <li>
              Kitchen: Gourmet kitchen with stainless steel appliances, granite
              countertops, a large island, and ample cabinet space.
            </li>
            <li>
              Living Areas: Open-concept living and dining areas with hardwood
              floors, large windows, and a cozy fireplace.
            </li>
          </ul>

          <hr />

          <h2>property description</h2>
          <p>
            and ample cabinet space. Living Areas: Open-concept living and
            dining areas with hardwood floors, large windows, and a cozy
            fireplace. Outdoor Space: Beautifully landscaped front and
            backyards, featuring a patio area perfect for outdoor dining and
            entertaining. Garage: Attached 2-car garage with additional storage
            space. Additional Features: Central heating and air conditioning,
            energy-efficient windows, a security system, and a laundry room.
            Location: Situated in a highly desirable neighborhood, this home is
            just minutes away from top-rated schools, parks, shopping centers,
            and dining options. The quiet streets and friendly community
            atmosphere make it an ideal place to raise a family. Highlights:
            Master Suite: The master bedroom is a true retreat, complete with a
            spa-like bathroom featuring a soaking tub, double vanity, and a
            separate shower. Outdoor Living: Enjoy the outdoor space year-round
            with a covered patio, lush lawn, and a garden area perfect for green
            thumbs. Modern Conveniences: The home is equipped with smart home
            technology, allowing you to control the lighting, thermostat, and
            security system from your smartphone.
          </p>
        </Container>

        <Container>
          <FormContainer>
            <h2>contact us</h2>
            <Button>Call agent</Button>
            {/* <br />
            <br /> */}
            <Button>Request details</Button>
          </FormContainer>
        </Container>
      </TwoColumn>
      <hr />
    </>
  );
};

export default PropertyDetail;
