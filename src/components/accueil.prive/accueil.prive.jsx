import React, { useEffect } from "react"
import "./accueil.prive.scss"

function AccueilPrive() {

	useEffect(()=>{
				// frises défilant de droite à gauche
				
				const frise60 = document.querySelector(".frise60");
				const frise62 = document.querySelector(".frise62");
				const frise64 = document.querySelector(".frise64");
				
				// frises défilant de droite à gauche
				const frise61 = document.querySelector(".frise61");
				const frise63 = document.querySelector(".frise63");
				const frise65 = document.querySelector(".frise65");

		// ---------RESPONSIVE---------

		if(window.screen.width<576){
		
		}	


		// --------FIN DE REPONSIVE------


		let friseRight = -1500;
		
		

		setInterval(() => {
			frise60.style.right = `${friseRight}px`
			friseRight += 20

			if (frise60.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		setInterval(() => {
			frise62.style.right = `${friseRight}px`
			friseRight += 20

			if (frise62.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		setInterval(() => {
			frise64.style.right = `${friseRight}px`
			friseRight += 20

			if (frise64.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		let friseLeft = -1500

	

		setInterval(() => {
			frise61.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise61.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)

		setInterval(() => {
			frise63.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise63.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)

		setInterval(() => {
			frise65.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise65.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)

	})

	return (
		<div className="homeAF">
			<img className="logoVRvibesAF" src="/icns/vr-vibes-logo.png" />
			{/* <div className="divTestBlue"/> */}
			<div className="imageVRFamilleAF1 animate__animated animate__backInLeft" />
			<div className="imageVRFamilleAF2 animate__animated animate__backInDown" />
			<div className="imageVRFamilleAF3 animate__animated animate__backInRight" />
			<div className="accueilImageAF"></div>
			<img className="frise60" src="/img/frise-double-green-pastel.png" alt="okay" />
			<img className="frise61" src="/img/frise-double-green-pastel.png" />
			<img className="frise62" src="/img/frise-double-green-pastel.png" />
			<img className="frise63" src="/img/frise-double-green-pastel.png" />
			<img className="frise64" src="/img/frise-double-green-pastel.png" />
			<img className="frise65" src="/img/frise-double-green-pastel.png" />
		</div>
	)
}

export default AccueilPrive;
