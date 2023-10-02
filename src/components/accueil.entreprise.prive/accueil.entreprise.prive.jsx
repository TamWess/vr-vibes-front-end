import React, { } from "react"
import "./accueil.entreprise.prive.scss"

function AccueilEntreprisePrive() {

	return (
		<div className="home">
			<img className="logoVRvibes" src="/icns/vr-vibes-logo.png" alt="logo vrvibes entreprise d'animation en réalité virtuelle sur paris" />
			<div className="imageVREntreprise" />
			<div className="imageVRFamille" />
			<div className="accueilImage"/>
			<h1 className="titleAccueilFamilleEntreprise">
				Animation VR pour accompagner vos événements
			</h1>
		</div>
	)
}

export default AccueilEntreprisePrive;
