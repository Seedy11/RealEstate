/** @format */

import React from "react";
import { Card } from "react-bootstrap";
import GoogleMapReact from "google-map-react";

function Map() {
  const handleApiLoaded = () => {};
  return (
    <Card style={{ height: "500px", width: "100%" }}>
      <GoogleMapReact
        style={{ height: "20px", width: "50%" }}
        bootstrapURLKeys={"real-estate-431418"}
        defaultCenter={{ lat: 59.955413, lng: 30.337844 }}
        defaultZoom={4}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}>
        <div lat={59.955413} lng={30.337844} text='My Marker' />
        {/* iuyhoiuhy */}
      </GoogleMapReact>
    </Card>
  );
}

export default Map;
