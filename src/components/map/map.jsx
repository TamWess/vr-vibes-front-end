import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

import "./map.scss"

function GoogleMapSection() {

	const { isLoaded } = useLoadScript({
		googleMapsAPIKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
		// a changer sur next par NEXT_PUBLIC...
	});
	if (!isLoaded) return <div>Loading...</div>;


	return (
		<GoogleMap zoom={11} center={{ lat: 48.866667, lng: 2.333333 }} mapContainerClassName="mapContainer"></GoogleMap>
	)
}

export default GoogleMapSection;

