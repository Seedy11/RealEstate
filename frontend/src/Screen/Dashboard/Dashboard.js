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
} from "recharts";
import { Property } from "../../redux/slice/letting";

function Dashboard() {
  const dispatch = useDispatch();
  const demoUrl = "https://codesandbox.io/p/sandbox/simple-radar-chart-2p5sxm";
  const [properties, setProperties] = useState();

  useEffect(() => {
    dispatch(Property());
  }, [Property]);
  const property = useSelector((state) => state.lettings.PropertyItems);
  console.log("test", property);
  return (
    <Container
      style={{ marginTop: "9rem", marginBottom: "13rem", minHeigh: "100rem" }}>
      {/* <ResponsiveContainer> */}
      <ComposedChart
        width={500}
        height={400}
        data={property}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}>
        <CartesianGrid stroke='#f5f5f5' />
        <XAxis dataKey='' scale='band' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type='monotone' dataKey='Price' fill='#8884d8' stroke='#8884d8' />
        <Bar dataKey='' barSize={20} fill='#413ea0' />
        <Line type='monotone' dataKey='PropertyID' stroke='blue' />
      </ComposedChart>
      {/* </ResponsiveContainer> */}
    </Container>
  );
}

export default Dashboard;
