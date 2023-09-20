import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./reserver.prive.scss"

function ReserverPrive() {
	
	useEffect(() => {

		// frises défilant de droite à gauche
			
		const frise40 = document.querySelector(".frise40");
		const frise42 = document.querySelector(".frise42");
		const frise44 = document.querySelector(".frise44");

		let friseRight = -1500;
		
		

		setInterval(() => {
			frise40.style.right = `${friseRight}px`
			friseRight += 20

			frise42.style.right = `${friseRight}px`
			friseRight += 20

			frise44.style.right = `${friseRight}px`
			friseRight += 20

			if (frise40.style.right, frise42.style.right, frise44.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		// frises défilant de droite à gauche

		const frise41 = document.querySelector(".frise41");
		const frise43 = document.querySelector(".frise43");
		const frise45 = document.querySelector(".frise45");

		let friseLeft = -1500

		setInterval(() => {
			frise41.style.left = `${friseLeft}px`
			friseLeft += 20

			frise43.style.left = `${friseLeft}px`
			friseLeft += 20

			frise45.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise41.style.left, frise43.style.left, frise45.style.left > "100px") {
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
				<h1 className="subtitleFamilleAF">
					Baby Shower, Anniversaire, Mariage ...
				</h1>
				<img className="familleChoiceAF" src="/img/family-choice.png" />
				<Link className="reserverFamilleAF" to="/formulaire_prive">
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
