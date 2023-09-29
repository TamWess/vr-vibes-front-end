import React from "react"
import "./accueil.prive.scss"

function AccueilPrive() {

	return (
		<div className="homeAF">
			<img className="logoVRvibesAF" src="/icns/vr-vibes-logo.png" alt="logo vrvibes entreprise d'animation en réalité virtuelle sur paris" />
			<div className="imageVRFamilleAF1 animate__animated animate__backInLeft" />
			<div className="imageVRFamilleAF2 animate__animated animate__backInDown" />
			<div className="imageVRFamilleAF3 animate__animated animate__backInRight" />
			<div className="accueilImageAF"></div>
		</div>
	)
}

export default AccueilPrive;
