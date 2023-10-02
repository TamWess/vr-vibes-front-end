import React from "react";
import { GoogleMap, useJsApiLoader  } from "@react-google-maps/api";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

import "./map.scss"

function MyGoogleMap() {
	const { isLoaded } = useJsApiLoader({
	  id: 'google-map-script',
	  googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
	})
	// return isLoaded && est l'équivalent de if(isloaded)
	return isLoaded && (
		<GoogleMap
			zoom={11}
			center={{ lat: 48.866667, lng: 2.333333 }}
			mapContainerClassName="mapContainer"
		></GoogleMap>
	)
}
  
  export default React.memo(MyGoogleMap)