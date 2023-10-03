import React, {useEffect} from "react"
import "./accueil.entreprise.scss"

function AccueilEntreprise() {

	useEffect(() => {
		setTimeout(() => {
			const h1EntrepriseAccueil = document.querySelector(".activities")
			// const h1EntrepriseFamille = document.querySelector(".titleAccueilFamilleEntreprise")
			h1EntrepriseAccueil.style.opacity = "1";
			h1EntrepriseAccueil.classList.add("animate__animated");
			h1EntrepriseAccueil.classList.add("animate__fadeInUp");
		}
		, 3500
		)
	})

	return (
		<div className="homeAE">
			<div className="activitiesEntreprise">
				<h2 className="team">Team-Building</h2>
				<h2 className="afterwork">Afterworks</h2>
				<h2 className="seminaire">Séminaires</h2>
			</div>
			<img className="logoVRvibesAE" src="/icns/vr-vibes-logo.png" alt="logo vrvibes entreprise d'animation en réalité virtuelle sur paris" />
			<div className="imageVREntrepriseAE1 animate__animated animate__backInLeft" />
			<div className="imageVREntrepriseAE2 animate__animated animate__backInDown" />
			<div className="imageVREntrepriseAE3 animate__animated animate__backInRight" />
			<div className="accueilImageAE"></div>
		</div>
	)
}

export default AccueilEntreprise;
