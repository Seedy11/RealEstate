/** @format */

import React, { useEffect, useState } from "react";
import LargeContainer from "../../Components/LargeContainer/LargeContainer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Property } from "../../redux/slice/letting";
import { TwoColumn } from "../../StyledItems/GridContainer.elements";

function AdminPage() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState();
  const dispatch = useDispatch();
  // const [deleteProperty, setDeleteProperty] = useState();
  const bedroom = [
    "1 Bedroom",
    "2 Bedroom",
    "3 Bedroom",
    "4 Bedroom",
    "5 Bedroom",
  ];

  useEffect(() => {
    dispatch(Property());
  }, [Property]);
  const property = useSelector((state) => state.lettings.PropertyItems);
  console.log("test", property);

  function deletePropertyList(property_id) {
    axios.delete(
      `https://realestate-heruko-5c11eac23d0e.herokuapp.com/rentalProperties/delete/${property_id}`
    );
    setProperties(
      properties.filter((deleteProperty) => {
        return deleteProperty.property_id !== property_id;
      })
    );
  }

  React.useEffect(() => {
    async function searchPropertyList() {
      try {
        const getData = await axios.get(
          `https://realestate-heruko-5c11eac23d0e.herokuapp.com/rentalProperties/citySearch/?City='yvyutv'&Bedrooms=8`
        );
        console.log("apis", getData);
      } catch (error) {
        return error;
      }
    }

    searchPropertyList();
  }, []);
  // }

  return (
    <Container style={{ margin: "9rem auto 9rem auto" }}>
      <TwoColumn style={{ padding: "12rem 5rem" }}>
        <div>
          {property.length === 0 ? (
            <Container>
              <p>letting Not available </p>
            </Container>
          ) : (
            property.map((property) => (
              <>
                <LargeContainer
                  cardType='adminCard'
                  PropertyID={property.PropertyID}
                  key={property.PropertyID}
                  Address={property.Address}
                  Bedrooms={property.Bedrooms}
                  Bathrooms={property.Bathrooms}
                  Available_date={property.Available_date}
                  Price={property.Price}
                  Phone_number={property.Phone_number}
                  City={property.City}
                  onClick={() =>
                    navigate(`/PropertyDetail/${property.property_id}`)
                  }
                  delete={() => {
                    deletePropertyList(property.property_id);
                  }}
                />
              </>
            ))
          )}
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Add Property </Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Card.Link href='#'>Card Link</Card.Link> */}
              <Link to='/rentalForm' className='nav-decoration'>
                Add Property
              </Link>
              {/* <Card.Link href='#'>Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        </div>
      </TwoColumn>
    </Container>
  );
}

export default AdminPage;
