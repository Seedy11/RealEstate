/** @format */
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  ComposedChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Property } from "../../redux/slice/letting";
import LargeContainer from "../../Components/LargeContainer/LargeContainer";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const MetricCard = styled(Card)`
  text-align: center;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const demoPieData = [
  { name: "Sold", value: 400 },
  { name: "Available", value: 300 },
  { name: "Pending", value: 200 },
  { name: "Rented", value: 100 },
];

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const property = useSelector((state) => state.lettings.PropertyItems || []);

  useEffect(() => {
    dispatch(Property());
  }, [dispatch]);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline='central'
        fontSize={12}>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Container fluid style={{ marginTop: "5rem" }}>
      <h2 className='mb-4'>Dashboard</h2>

      {/* Metrics */}
      <Row className='mb-4'>
        <Col md={4}>
          <MetricCard>
            <h5>Total Revenue</h5>
            <h3>£5,000,000</h3>
          </MetricCard>
        </Col>
        <Col md={4}>
          <MetricCard>
            <h5>Net Income</h5>
            <h3>£36,500</h3>
          </MetricCard>
        </Col>
        <Col md={4}>
          <MetricCard>
            <h5>Total Properties</h5>
            <h3>{property.length}</h3>
          </MetricCard>
        </Col>
      </Row>

      {/* Charts */}
      <Row className='mb-5'>
        <Col lg={8} md={12}>
          <Card className='p-3 mb-4'>
            <h5>Price Trend</h5>
            <ComposedChart
              width={600}
              height={300}
              data={property}
              margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
              <CartesianGrid stroke='#f5f5f5' />
              <XAxis dataKey='Address' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type='monotone'
                dataKey='Price'
                fill='#8884d8'
                stroke='#8884d8'
              />
              <Bar dataKey='Price' barSize={20} fill='#413ea0' />
              <Line type='monotone' dataKey='PropertyID' stroke='#ff7300' />
            </ComposedChart>
          </Card>
        </Col>
        <Col lg={4} md={12}>
          <Card className='p-3 mb-4'>
            <h5>Property Status</h5>
            <PieChart width={300} height={300}>
              <Pie
                data={demoPieData}
                cx='50%'
                cy='50%'
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill='#8884d8'
                dataKey='value'>
                {demoPieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </Card>
        </Col>
      </Row>

      {/* Properties List */}
      <h4 className='mb-3'>Properties</h4>
      <Row className='g-4'>
        {property.length === 0 ? (
          <Col>
            <p>No properties available.</p>
          </Col>
        ) : (
          property.map((prop) => (
            <Col md={4} key={prop.PropertyID}>
              <LargeContainer
                cardType='adminCard'
                PropertyID={prop.PropertyID}
                Address={prop.Address}
                Bedrooms={prop.Bedrooms}
                Bathrooms={prop.Bathrooms}
                Price={prop.Price}
                Phone_number={prop.Phone_number}
                City={prop.City}
                onClick={() => navigate(`/PropertyDetail/${prop.PropertyID}`)}
              />
            </Col>
          ))
        )}
      </Row>

      <div className='mt-4'>
        <Link to='/rentalForm'>
          <Button variant='primary'>Add Property</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Dashboard;
