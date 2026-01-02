/** @format */
import React, { useEffect } from "react";
import LargeContainer from "../../Components/LargeContainer/LargeContainer";
import { Link, useNavigate } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Property } from "../../redux/slice/letting";
import styled from "styled-components";

const PageContainer = styled(Container)`
  margin: 6rem auto 3rem auto;
`;

const AddPropertyCard = styled(Card)`
  text-align: center;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const PropertyGrid = styled(Row)`
  margin-bottom: 3rem;
  gap: 1.5rem;
`;

function AdminPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Property());
  }, [dispatch]);

  const property = useSelector((state) => state.lettings.PropertyItems || []);

  function deletePropertyList(property_id) {
    // Delete property via API
    fetch(
      `https://realestate-heruko-5c11eac23d0e.herokuapp.com/rentalProperties/delete/${property_id}`,
      { method: "DELETE" }
    ).then(() => {
      // Optionally update UI after delete
      window.location.reload();
    });
  }

  return (
    <PageContainer>
      <h2 className='mb-4'>Admin Panel</h2>

      <Row className='mb-4'>
        <Col md={4}>
          <AddPropertyCard>
            <Card.Title>Add New Property</Card.Title>
            <Card.Text>
              Quickly add a new property to your letting portfolio.
            </Card.Text>
            <Link to='/rentalForm'>
              <Button variant='primary'>Add Property</Button>
            </Link>
          </AddPropertyCard>
        </Col>
      </Row>

      <h4 className='mb-3'>All Properties</h4>
      {property.length === 0 ? (
        <p>No properties available.</p>
      ) : (
        <PropertyGrid>
          {property.map((prop) => (
            <Col md={4} key={prop.PropertyID}>
              <LargeContainer
                cardType='adminCard'
                PropertyID={prop.PropertyID}
                Address={prop.Address}
                Bedrooms={prop.Bedrooms}
                Bathrooms={prop.Bathrooms}
                Available_date={prop.Available_date}
                Price={prop.Price}
                Phone_number={prop.Phone_number}
                City={prop.City}
                onClick={() => navigate(`/PropertyDetail/${prop.PropertyID}`)}
                delete={() => deletePropertyList(prop.PropertyID)}
              />
            </Col>
          ))}
        </PropertyGrid>
      )}
    </PageContainer>
  );
}

export default AdminPage;
