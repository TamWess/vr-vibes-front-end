import React from "react"
import "./accueil.entreprise.scss"


function AccueilEntreprise() {

	/*
	const activitiesRef = useRef (null)

	useEffect(() => {
		setTimeout(() => {
			activitiesRef.current.style.opacity = "1";
			activitiesRef.current.classList.add("animate__animated");
			activitiesRef.current.classList.add("animate__fadeInUp");
		}
		, 3500
		)
	})
	*/

	return (
		<div className="homeAE">
			<div className="activitiesEntreprise animate__animated animate__fadeInUp animate__delay-3s" /*ref={activitiesRef} */>
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
