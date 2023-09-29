import React, { useEffect, useState } from "react";
import "./section.chiffres.scss";
import anime from "animejs";

function SectionChiffres() {

	useEffect(() => {

		// Fonctions liées à la dépendance anime.js

		const badge1 = document.querySelector(".badge1");
		const badge2 = document.querySelector(".badge2");
		const badge3 = document.querySelector(".badge3");

		window.addEventListener("scroll", function () {
			if (window.scrollY > 2100) {
				badge1.style.opacity = "1";
				badge1.classList.add("animate__animated");
				badge1.classList.add("animate__fadeInUp");

				setTimeout(() => {
					badge2.style.opacity = "1";
					badge2.classList.add("animate__animated");
					badge2.classList.add("animate__fadeInUp");
				}, 300);

				setTimeout(() => {
					badge3.style.opacity = "1";
					badge3.classList.add("animate__animated");
					badge3.classList.add("animate__fadeInUp");
				}, 600);
			}
		});

		// Trouver une façon d'utiliser les useState avec anime.js

		window.addEventListener("scroll", function () {
			if (window.scrollY > 2100) {
				let changeNumber1 = document.querySelector(".numbers1");
				anime({
					targets: changeNumber1,
					innerHTML: [4.8, 4.8],
					easing: "linear",
					round: 5, // Will round the animated value to 1 decimal
				});

				let changeNumber2 = document.querySelector(".numbers2");
				anime({
					targets: changeNumber2,
					innerHTML: [8, 8],
					easing: "linear",
					round: 1, // Will round the animated value to 1 decimal
				});

				let changeNumber3 = document.querySelector(".numbers3");

				anime({
					targets: changeNumber3,
					innerHTML: [110, 110],
					easing: "linear",
					round: 40, // Will round the animated value to 1 decimal
				});
				// ----------Fin des fonctions liées à anime.js
			}
		});
	});

	return (
		<div className="laVRcest">
			<div className="badge1">
				<div className="avisUtilisateurs1">Avis Utilisateurs</div>
				<div className="numbers1"></div>
				<div className="sur1">/5</div>
			</div>
			<div className="badge2">
				<div className="avisUtilisateurs2">Nous intervenons dans</div>
				<div className="containerNumberSur">
					<div className="numbers2"></div>
					<div className="sur2">départements</div>
				</div>
			</div>
			<div className="badge3">
				<div className="avisUtilisateurs3">Jeux disponibles</div>
				<div className="numbers3"></div>
				<div className="sur3"></div>
			</div>
		</div>
	);
}

export default SectionChiffres;
