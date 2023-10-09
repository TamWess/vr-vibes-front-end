import React, { useEffect, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

import "./map.scss"

function MyGoogleMap() {

const divTitleMyMapRef = useRef (null)
const titleMyMapRef = useRef (null)

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
	})

	useEffect(() => {



		window.addEventListener('scroll', function () {
			const offsetTopMap = divTitleMyMapRef.current?.offsetTop

			if (window.scrollY > (offsetTopMap - 600)) {
				if (!titleMyMapRef.current) {
					return
				  }
				titleMyMapRef.current.style.opacity = "1";
			}
		})

	})


	// return isLoaded && est l'équivalent de if(isloaded)
	return isLoaded && (
		<>
			<div className="divTitleMyMap" ref={divTitleMyMapRef}>
				<h2 className="titleMyMap" ref={titleMyMapRef}>Nous intervenons dans <br /> toute la région île-de-France</h2>
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