"use client";
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "86vh",
};

const center = {
  lat: 35.62773,
  lng: 139.72291,
};

const zoom = 18;

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Map;
