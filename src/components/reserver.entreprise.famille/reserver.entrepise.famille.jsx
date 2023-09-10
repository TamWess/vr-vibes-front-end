import userEvent from "@testing-library/user-event";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./reserver.entrepise.famille.scss"

function ReserverEntrepriseFamille() {

	console.log(window.scroll.y);
	
	useEffect(() => {
		
		// frises défilant de droite à gauche
		const frise1 = document.querySelector(".frise1");
		const frise3 = document.querySelector(".frise3");
		const frise5 = document.querySelector(".frise5");
		
		// frises défilant de droite à gauche
		const frise2 = document.querySelector(".frise2");
		const frise4 = document.querySelector(".frise4");
		const frise6 = document.querySelector(".frise6");

		// -------RESPONSIVE------
		
		if(window.screen.width<576){
			
		}	

		// --------FIN DE REPONSIVE------


		let friseRight = -1500;

		setInterval(() => {
			frise1.style.right = `${friseRight}px`
			friseRight += 20

			if (frise1.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		setInterval(() => {
			frise3.style.right = `${friseRight}px`
			friseRight += 20

			if (frise3.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		setInterval(() => {
			frise5.style.right = `${friseRight}px`
			friseRight += 20

			if (frise5.style.right > "100px") {
				friseRight = -1500
			}
		}, 2000)

		let friseLeft = -1500

		setInterval(() => {
			frise2.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise2.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)

		setInterval(() => {
			frise4.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise4.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)

		setInterval(() => {
			frise6.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise6.style.left > "100px") {
				friseLeft = -1500
			}
		}, 2000)



		// --------SCROLL ANIMATIONS------


		const titleEntrepriseFamille = document.querySelector(".titleEntrepriseFamille")

		const subtitleEntreprise = document.querySelector(".subtitleEntreprise")

		const subtitleFamille = document.querySelector(".subtitleFamille")

		const reserverEntreprise = document.querySelector(".reserverEntreprise")

		const reserverFamille = document.querySelector(".reserverFamille")
		
		window.addEventListener("scroll", function () {
			if (window.scrollY > 15) {
			  titleEntrepriseFamille.style.opacity = "1";
			  titleEntrepriseFamille.classList.add("animate__animated");
			  titleEntrepriseFamille.classList.add("animate__fadeInUp");
			}
		  });


		window.addEventListener("scroll", function () {
			if (window.scrollY > 100) {
			  subtitleEntreprise.style.opacity = "1";
			  subtitleEntreprise.classList.add("animate__animated");
			  subtitleEntreprise.classList.add("animate__fadeInUp");
			}
		  });

		window.addEventListener("scroll", function () {
			if (window.scrollY > 100) {
			  subtitleFamille.style.opacity = "1";
			  subtitleFamille.classList.add("animate__animated");
			  subtitleFamille.classList.add("animate__fadeInUp");
			}
		  });

		window.addEventListener("scroll", function () {
			if (window.scrollY > 370) {
			  reserverEntreprise.style.opacity = "1";
			  reserverEntreprise.classList.add("animate__animated");
			  reserverEntreprise.classList.add("animate__fadeInUp");
			}
		  });

		window.addEventListener("scroll", function () {
			if (window.scrollY > 370) {
			  reserverFamille.style.opacity = "1";
			  reserverFamille.classList.add("animate__animated");
			  reserverFamille.classList.add("animate__fadeInUp");
			}
		  });
	})

	return (
		<div className="entrepriseFamille">
			<h2 className="titleEntrepriseFamille">
				RENDEZ VOTRE ÉVÉNEMENT INOUBLIABLE !
			</h2>
			<div className="entreprise">
				<h3 className="subtitleEntreprise">
					Team Building, Afterwork, Séminaire ...
				</h3>
				<img className="entrepriseChoice" src="/img/entreprise-choice.png" />
				<Link className="reserverEntreprise" to="EvenementEntreprise">
					Réserver
				</Link>
			</div>
			<div className="famille">
				<h3 className="subtitleFamille">
					Baby Shower, Anniversaire, Mariage ...
				</h3>
				<img className="familleChoice" src="/img/family-choice.png" />
				<Link className="reserverFamille" to="FormulairePrive">
					Réserver
				</Link>
			</div>
			<img className="frise1" src="/img/frise-double-green-pastel.png" alt="okay" />
			<img className="frise2" src="/img/frise-double-green-pastel.png" />
			<img className="frise3" src="/img/frise-double-green-pastel.png" />
			<img className="frise4" src="/img/frise-double-green-pastel.png" />
			<img className="frise5" src="/img/frise-double-green-pastel.png" />
			<img className="frise6" src="/img/frise-double-green-pastel.png" />
		</div>
	);
}

export default ReserverEntrepriseFamille;
