import React, { useEffect } from "react"
import "./accueil.entreprise.scss"

function AccueilEntreprise() {

	useEffect(() => {
		// frises défilant de droite à gauche

		const frise30 = document.querySelector(".frise30");
		const frise32 = document.querySelector(".frise32");
		const frise34 = document.querySelector(".frise34");

		// frises défilant de droite à gauche
		const frise31 = document.querySelector(".frise31");
		const frise33 = document.querySelector(".frise33");
		const frise35 = document.querySelector(".frise35");

		if (window.screen.width < 576) {

		}


		// --------FIN DE REPONSIVE------


		// -----Frises qui se déplacent vers la droite----

		let friseRight = -1500;

		setInterval(() => {
			frise30.style.right = `${friseRight}px`
			friseRight += 20

			frise32.style.right = `${friseRight}px`
			friseRight += 20

			frise34.style.right = `${friseRight}px`
			friseRight += 20

			if (frise30.style.right, frise32.style.right, frise34.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		// ------Frises qui se déplacent vers la gauche----

		let friseLeft = -1500

		setInterval(() => {
			frise31.style.left = `${friseLeft}px`
			friseLeft += 20

			frise33.style.left = `${friseLeft}px`
			friseLeft += 20

			frise35.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise31.style.left, frise33.style.left, frise35.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)
	})

	return (
		<div className="homeAE">
			<img className="logoVRvibesAE" src="/icns/vr-vibes-logo.png" alt="logo vrvibes entreprise d'animation en réalité virtuelle sur paris" />
			<div className="imageVREntrepriseAE1 animate__animated animate__backInLeft" />
			<div className="imageVREntrepriseAE2 animate__animated animate__backInDown" />
			<div className="imageVREntrepriseAE3 animate__animated animate__backInRight" />
			<div className="accueilImageAE"></div>
			<img className="frise30" src="/img/frise-double-green-pastel.png" />
			<img className="frise31" src="/img/frise-double-green-pastel.png" />
			<img className="frise32" src="/img/frise-double-green-pastel.png" />
			<img className="frise33" src="/img/frise-double-green-pastel.png" />
			<img className="frise34" src="/img/frise-double-green-pastel.png" />
			<img className="frise35" src="/img/frise-double-green-pastel.png" />
		</div>
	)
}

export default AccueilEntreprise;
