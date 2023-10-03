import React, {useEffect} from "react"
import "./accueil.prive.scss"

function AccueilPrive() {

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		const h1EntreprisePrive = document.querySelector(".activitiesPrive")
	// 		// const h1EntreprisePrive = document.querySelector(".titleAccueilFamilleEntreprise")
	// 		h1EntreprisePrive.style.opacity = "1";
	// 		h1EntreprisePrive.classList.add("animate__animated");
	// 		h1EntreprisePrive.classList.add("animate__fadeInUp");
	// 	}
	// 	, 3500
	// 	)
	// })

	return (
		<div className="homeAF">
			{/* <div className="activitiesPrive">
				<h2 className="babyShower">Baby-Shower</h2>
				<h2 className="anniversaire">Anniversaire</h2>
				<h2 className="mariage">Mariage</h2>
			</div> */}
			<img className="logoVRvibesAF" src="/icns/vr-vibes-logo.png" alt="logo vrvibes entreprise d'animation en réalité virtuelle sur paris" />
			<div className="imageVRFamilleAF1 animate__animated animate__backInLeft" />
			<div className="imageVRFamilleAF2 animate__animated animate__backInDown" />
			<div className="imageVRFamilleAF3 animate__animated animate__backInRight" />
			<div className="accueilImageAF"></div>
		</div>
	)
}

export default AccueilPrive;
