import React, { useEffect } from "react"
import "./accueil.entreprise.scss"

function AccueilEntreprise() {

	useEffect(()=>{
				// frises défilant de droite à gauche
				
				const frise30 = document.querySelector(".frise30");
				const frise32 = document.querySelector(".frise32");
				const frise34 = document.querySelector(".frise34");
				
				// frises défilant de droite à gauche
				const frise31 = document.querySelector(".frise31");
				const frise33 = document.querySelector(".frise33");
				const frise35 = document.querySelector(".frise35");



		if(window.screen.width<576){
		
		}	


		// --------FIN DE REPONSIVE------


		let friseRight = -1500;
		
		

		setInterval(() => {
			frise30.style.right = `${friseRight}px`
			friseRight += 20

			if (frise30.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		setInterval(() => {
			frise32.style.right = `${friseRight}px`
			friseRight += 20

			if (frise32.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		setInterval(() => {
			frise34.style.right = `${friseRight}px`
			friseRight += 20

			if (frise34.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		let friseLeft = -1500

	

		setInterval(() => {
			frise31.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise31.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)

		setInterval(() => {
			frise33.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise33.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)

		setInterval(() => {
			frise35.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise35.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)

	})

	return (
		<div className="homeAE">
			<img className="logoVRvibesAE" src="/icns/vr-vibes-logo.png" />
			{/* <div className="divTestBlue"/> */}
			<div className="imageVREntrepriseAE1 animate__animated animate__backInLeft" />
			<div className="imageVREntrepriseAE2 animate__animated animate__backInDown" />
			<div className="imageVREntrepriseAE3 animate__animated animate__backInRight" />
			<div className="accueilImageAE"></div>
			<img className="frise30" src="/img/frise-double-green-pastel.png" alt="okay" />
			<img className="frise31" src="/img/frise-double-green-pastel.png" />
			<img className="frise32" src="/img/frise-double-green-pastel.png" />
			<img className="frise33" src="/img/frise-double-green-pastel.png" />
			<img className="frise34" src="/img/frise-double-green-pastel.png" />
			<img className="frise35" src="/img/frise-double-green-pastel.png" />
		</div>
	)
}

export default AccueilEntreprise;
