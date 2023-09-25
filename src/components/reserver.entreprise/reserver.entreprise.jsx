import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./reserver.entreprise.scss"

function ReserverEntreprise() {

	useEffect(() => {

		// frises défilant de droite à gauche

		const frise15 = document.querySelector(".frise15");
		const frise17 = document.querySelector(".frise17");
		const frise19 = document.querySelector(".frise19");

		let friseRight = -1500;

		setInterval(() => {
			frise15.style.right = `${friseRight}px`
			friseRight += 20

			frise17.style.right = `${friseRight}px`
			friseRight += 20

			frise19.style.right = `${friseRight}px`
			friseRight += 20

			if (frise15.style.right, frise17.style.right, frise19.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		// frises défilant de droite à gauche

		const frise16 = document.querySelector(".frise16");
		const frise18 = document.querySelector(".frise18");
		const frise20 = document.querySelector(".frise20");

		let friseLeft = -1500

		setInterval(() => {
			frise16.style.left = `${friseLeft}px`
			friseLeft += 20

			frise18.style.left = `${friseLeft}px`
			friseLeft += 20

			frise20.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise16.style.left, frise18.style.left, frise20.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)
	})

	return (
		<div className="entrepriseFamille">
			<h2 className="title">
				RENDEZ VOTRE ÉVÉNEMENT INOUBLIABLE !
			</h2>
			<div className="entreprise1">
				<h1 className="subtitleEntreprise">
					Team Building, Afterwork, Séminaire ...
				</h1>
				<img className="entrepriseChoice" src="/img/vrvibes-entreprise-choice.png" alt="vr-vibes réserver votre événement privé en réalité virtuelle baby shower - anniversaire - mariage" />
				<Link className="reserverEntreprise" to="/formulaire_entreprise">
					Réserver
				</Link>
			</div>
			<img className="frise15" src="/img/vrvibes-frise-double-green-pastel.png" alt="" />
			<img className="frise16" src="/img/vrvibes-frise-double-green-pastel.png" />
			<img className="frise17" src="/img/vrvibes-frise-double-green-pastel.png" />
			<img className="frise18" src="/img/vrvibes-frise-double-green-pastel.png" />
			<img className="frise19" src="/img/vrvibes-frise-double-green-pastel.png" />
			<img className="frise20" src="/img/vrvibes-frise-double-green-pastel.png" />
		</div>
	);
}

export default ReserverEntreprise;
