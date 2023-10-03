import React, { useEffect, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

import "./map.scss"

function MyGoogleMap() {

const titleMyMapRef = useRef (null)

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
	})

	useEffect(() => {



		window.addEventListener('scroll', function () {
			const offsetTop = titleMyMapRef.current?.offsetTop
			const titleMyMap = document.querySelector(".titleMyMap")

			if (window.scrollY > (offsetTop - 100)) {
				titleMyMap.style.opacity = "1";
			}
		})

	})


	// return isLoaded && est l'équivalent de if(isloaded)
	return isLoaded && (
		<>
			<div className="divTitleMyMap" ref={titleMyMapRef}>
				<h2 className="titleMyMap">Nous intervenons dans <br /> toute la région île-de-France</h2>
			</div>
			<GoogleMap
				zoom={11.3}
				center={{ lat: 48.855, lng: 2.35 }}
				mapContainerClassName="mapContainer"
			></GoogleMap>

		</>
	)
}

export default React.memo(MyGoogleMap)