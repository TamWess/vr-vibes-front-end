import React, {useEffect, useRef} from "react"
import "./accueil.prive.scss"

function AccueilPrive() {

	const activitiesPriveRef = useRef (null)

	useEffect(() => {
		setTimeout(() => {
			if (!activitiesPriveRef.current) {
				return
			  }
			activitiesPriveRef.current.classList.add("animate__animated");
			activitiesPriveRef.current.classList.add("animate__fadeInUp");
		}
		, 3500
		)
	},[])

	return (
		<div className="homeAF">
			<div className="activitiesPrive" ref={activitiesPriveRef}>
				<h2 className="babyShower">Baby-Shower</h2>
				<h2 className="anniversaire">Anniversaire</h2>
				<h2 className="mariage">Mariage</h2>
			</div>
			<img className="logoVRvibesAF" src="/icns/vr-vibes-logo.png" alt="logo vrvibes entreprise d'animation en réalité virtuelle sur paris" />
			<div className="imageVRFamilleAF1 animate__animated animate__backInLeft" />
			<div className="imageVRFamilleAF2 animate__animated animate__backInDown" />
			<div className="imageVRFamilleAF3 animate__animated animate__backInRight" />
			<div className="accueilImageAF" ></div>
		</div>
	)
}

export default AccueilPrive;
