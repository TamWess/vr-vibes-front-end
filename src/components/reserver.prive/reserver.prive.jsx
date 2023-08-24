import userEvent from "@testing-library/user-event";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./reserver.prive.scss"

function ReserverPrive() {
	
	useEffect(() => {
		
		// frises défilant de droite à gauche
	
		const frise40 = document.querySelector(".frise40");
		const frise42 = document.querySelector(".frise42");
		const frise44 = document.querySelector(".frise44");
		
		// frises défilant de droite à gauche
	

		const frise41 = document.querySelector(".frise41");
		const frise43 = document.querySelector(".frise43");
		const frise45 = document.querySelector(".frise45");

		// -------RESPONSIVE------
		
		if(window.screen.width<576){
			
		}	

		// --------FIN DE REPONSIVE------


		let friseRight = -1500;
		
		

		setInterval(() => {
			frise40.style.right = `${friseRight}px`
			friseRight += 20

			if (frise40.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		setInterval(() => {
			frise42.style.right = `${friseRight}px`
			friseRight += 20

			if (frise42.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		setInterval(() => {
			frise44.style.right = `${friseRight}px`
			friseRight += 20

			if (frise44.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		let friseLeft = -1500

	

		setInterval(() => {
			frise41.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise41.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)

		setInterval(() => {
			frise43.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise43.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)

		setInterval(() => {
			frise45.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise45.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)
	})

	return (
		<div className="familleDivAF">
			<h2 className="titleAF">
				RENDEZ VOTRE ÉVÉNEMENT INOUBLIABLE !
			</h2>
			<div className="familleAF">
				<h3 className="subtitleFamilleAF">
					Baby Shower, Anniversaire, Mariage ...
				</h3>
				<img className="familleChoiceAF" src="/img/family-choice.png" />
				<Link className="reserverFamilleAF" to="/FormulairePrive">
					Réserver
				</Link>
			</div>
			<img className="frise40" src="/img/frise-double-green-pastel.png" alt="okay" />
			<img className="frise41" src="/img/frise-double-green-pastel.png" />
			<img className="frise42" src="/img/frise-double-green-pastel.png" />
			<img className="frise43" src="/img/frise-double-green-pastel.png" />
			<img className="frise44" src="/img/frise-double-green-pastel.png" />
			<img className="frise45" src="/img/frise-double-green-pastel.png" />
		</div>
	);
}

export default ReserverPrive;
