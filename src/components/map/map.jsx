import React, { useEffect } from "react";
import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from "@react-google-maps/api";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "./map.scss"

// région ile de france

function GoogleMapSection() {

	const { isLoaded } = useLoadScript({
		googleMapsAPIKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
	});
	if (!isLoaded) return <div>Loading...</div>;

	// useEffect(()=>{

	// })

	return (
		<GoogleMap zoom={11} center={{ lat: 48.866667, lng: 2.333333 }} mapContainerClassName="mapContainer"></GoogleMap>
	)
}

export default GoogleMapSection;

