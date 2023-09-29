import React from "react"
import "./accueil.entreprise.scss"

function AccueilEntreprise() {

	return (
		<div className="homeAE">
			<img className="logoVRvibesAE" src="/icns/vr-vibes-logo.png" alt="logo vrvibes entreprise d'animation en réalité virtuelle sur paris" />
			<div className="imageVREntrepriseAE1 animate__animated animate__backInLeft" />
			<div className="imageVREntrepriseAE2 animate__animated animate__backInDown" />
			<div className="imageVREntrepriseAE3 animate__animated animate__backInRight" />
			<div className="accueilImageAE"></div>
		</div>
	)
}

export default AccueilEntreprise;
