import React, { useEffect, useRef } from "react"
import "./accueil.entreprise.prive.scss"
import 'animate.css';

function AccueilEntreprisePrive() {

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		const h1EntrepriseFamille = document.querySelector(".titleAccueilFamilleEntreprise")
	// 		// const h1EntrepriseFamille = document.querySelector(".titleAccueilFamilleEntreprise")
	// 		h1EntrepriseFamille.style.opacity = "1";
	// 		h1EntrepriseFamille.classList.add("animate__animated");
	// 		h1EntrepriseFamille.classList.add("animate__fadeInUp");
	// 	}
	// 	, 3500
	// 	)
	// })

	return (
		<div className="home">
			<img className="logoVRvibes" src="/icns/vr-vibes-logo.png" alt="logo vrvibes entreprise d'animation en réalité virtuelle sur paris" />
			<div className="imageVREntreprise" />
			<div className="imageVRFamille" />
			<div className="accueilImage" />
			{/* <div className="divH1">
				<h1 className="titleAccueilFamilleEntreprise" >
					Animations VR pour <br/> accompagner vos événements
				</h1>
			</div> */}
		</div>
	)
}

export default AccueilEntreprisePrive;
