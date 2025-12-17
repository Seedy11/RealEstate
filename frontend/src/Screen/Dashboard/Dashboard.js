/** @format */

import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
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
import {
  ThreeColumn,
  TwoColumn,
} from "../../StyledItems/GridContainer.elements";
import LargeContainer from "../../Components/LargeContainer/LargeContainer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const dispatch = useDispatch();
  const demoUrl = "https://codesandbox.io/p/sandbox/simple-radar-chart-2p5sxm";
  const [properties, setProperties] = useState();
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const navigate = useNavigate();

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
        dominantBaseline='central'>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
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

  useEffect(() => {
    dispatch(Property());
  }, [Property]);
  const property = useSelector((state) => state.lettings.PropertyItems);
  console.log("test", property);
  return (
    <ResponsiveContainer
      style={{
        margin: "9rem 0rem",
        // backgroundColor: "black",
      }}>
      <ThreeColumn>
        <Row
          style={{
            margin: "1rem",
            backgroundColor: "white",
            maxHeight: "300px",
          }}>
          {/* <ResponsiveContainer> */}
          <ComposedChart
            width={500}
            height={250}
            data={property}
            margin={{
              top: 20,
              right: 0,
              bottom: 0,
              left: 20,
            }}>
            <CartesianGrid stroke='#f5f5f5' />
            <XAxis dataKey='' scale='band' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type='monotone'
              dataKey='Price'
              fill='#8884d8'
              stroke='#8884d8'
            />
            <Bar dataKey='' barSize={20} fill='#413ea0' />
            <Line type='monotone' dataKey='PropertyID' stroke='blue' />
          </ComposedChart>
          {/* </ResponsiveContainer> */}
        </Row>
        <Row
          style={{
            margin: "1rem",
            backgroundColor: "white",
            textAlign: "center",
            paddingTop: "8rem",
          }}>
          {/* <ResponsiveContainer> */}
          <div>
            <h3>Net income</h3>
            <h3>£36500</h3>
          </div>
          {/* </ResponsiveContainer> */}
        </Row>
        <Row
          style={{
            margin: "1rem",
            // backgroundColor: "white",
            textAlign: "center",
          }}>
          {/* <ResponsiveContainer> */}
          <Row
            style={{
              margin: "1rem",
              backgroundColor: "white",
            }}>
            <h3>Revenue</h3>
            <h2>£5000000</h2>
          </Row>
          <Row
            style={{
              margin: "1rem",
              backgroundColor: "white",
              padding: "3rem",
            }}>
            <h3>£100500</h3>
          </Row>
          {/* </ResponsiveContainer> */}
        </Row>
      </ThreeColumn>
      <TwoColumn>
        {" "}
        <Container
          style={
            {
              // margin: "2rem",
              // backgroundColor: "white",
            }
          }>
          {/* <ResponsiveContainer> */}
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
                      // deletePropertyList(property.property_id);
                      navigate("/");
                    }}
                  />
                </>
              ))
            )}
            <Link to='/rentalForm' className='nav-decoration'>
              Add Property
            </Link>
          </div>
          {/* </ResponsiveContainer> */}
        </Container>{" "}
        <Container
          style={{
            marginRight: "2rem",
            backgroundColor: "white",
          }}>
          {/* <ResponsiveContainer> */}
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill='#8884d8'
              dataKey='value'>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <CartesianGrid stroke='#f5f5f5' />
              <XAxis dataKey='' scale='band' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type='monotone'
                dataKey='Price'
                fill='#8884d8'
                stroke='#8884d8'
              />
              <Bar dataKey='' barSize={20} fill='#413ea0' />
              <Line type='monotone' dataKey='PropertyID' stroke='blue' />
            </Pie>
          </PieChart>
          {/* </ResponsiveContainer> */}
        </Container>
      </TwoColumn>
    </ResponsiveContainer>
  );
}

export default Dashboard;
