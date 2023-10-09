import React, { useEffect, useRef } from "react"
import "./accueil.entreprise.prive.scss"
import 'animate.css';

function AccueilEntreprisePrive() {

	const titleAccueilFERef = useRef (null)

	useEffect(() => {
		setTimeout(() => {
			if (!titleAccueilFERef.current) {
				return
			  }
			
			titleAccueilFERef.current.classList.add("animate__animated");
			titleAccueilFERef.current.classList.add("animate__fadeInUp");
		}
		, 3500
		)
	},[])

	return (
		<div className="home">
			<img className="logoVRvibes" src="/icns/vr-vibes-logo.png" alt="logo vrvibes entreprise d'animation en réalité virtuelle sur paris" />
			<div className="imageVREntreprise" />
			<div className="imageVRFamille" />
			<div className="accueilImage" />
			<div className="divH1">
				<h1 className="titleAccueilFamilleEntreprise" ref={titleAccueilFERef} >
					Animations VR pour <br/> accompagner vos événements
				</h1>
			</div>
		</div>
	)
}

export default AccueilEntreprisePrive;
