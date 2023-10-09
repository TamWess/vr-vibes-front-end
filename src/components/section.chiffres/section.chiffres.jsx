import React, { useEffect, useRef } from "react";
import "./section.chiffres.scss";
import anime from "animejs";

function SectionChiffres() {

	const laVrcestRef = useRef (null)
	const badge1Ref = useRef (null)
	const badge2Ref = useRef (null)
	const badge3Ref = useRef (null)


	useEffect(() => {

		// Fonctions liées à la dépendance anime.js

		window.addEventListener("scroll", function () {
			const offsetTop = laVrcestRef.current?.offsetTop
			if (window.scrollY > (offsetTop - 700)) {
				if (!badge1Ref.current) {
					return
				  }
				badge1Ref.current.style.opacity = "1";
				badge1Ref.current.classList.add("animate__animated");
				badge1Ref.current.classList.add("animate__fadeInUp");

				setTimeout(() => {
					if (!badge2Ref.current) {
						return
					  }
					badge2Ref.current.style.opacity = "1";
					badge2Ref.current.classList.add("animate__animated");
					badge2Ref.current.classList.add("animate__fadeInUp");
				}, 300);

				setTimeout(() => {
					if (!badge3Ref.current) {
						return
					  }
					badge3Ref.current.style.opacity = "1";
					badge3Ref.current.classList.add("animate__animated");
					badge3Ref.current.classList.add("animate__fadeInUp");
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
		<div className="laVRcest" ref={laVrcestRef}>
			<div className="badge1" ref={badge1Ref}>
				<div className="avisUtilisateurs1">Avis Utilisateurs</div>
				<div className="numbers1"></div>
				<div className="sur1">/5</div>
			</div>
			<div className="badge2" ref={badge2Ref}>
				<div className="avisUtilisateurs2">Nous intervenons dans</div>
				<div className="containerNumberSur">
					<div className="numbers2"></div>
					<div className="sur2">départements</div>
				</div>
			</div>
			<div className="badge3" ref={badge3Ref}>
				<div className="avisUtilisateurs3">Jeux disponibles</div>
				<div className="numbers3"></div>
				<div className="sur3"></div>
			</div>
		</div>
	);
}

export default SectionChiffres;
