import React, { useEffect } from "react";
import "./section.chiffres.scss";
import anime from "animejs";

function SectionChiffres() {
	// const numberUsersStart = 0;
	let animeDiv = document.querySelector(".laVRcest");

	useEffect(() => {

		const badge1 = document.querySelector(".badge1")
		const badge2 = document.querySelector(".badge2")
		const badge3 = document.querySelector(".badge3")

		window.addEventListener("scroll", function () {
			if (window.scrollY > 2100) {
			  badge1.style.opacity = "1";
			  badge1.classList.add("animate__animated");
			  badge1.classList.add("animate__fadeInUp");
			}
		  });

		window.addEventListener("scroll", function () {
			if (window.scrollY > 2100) {
				setTimeout(() => {
					badge2.style.opacity = "1";
					badge2.classList.add("animate__animated");
					badge2.classList.add("animate__fadeInUp");
				}
				,300
				)
			}
		  });

		window.addEventListener("scroll", function () {
			if (window.scrollY > 2100) {
				setTimeout(() => {
					badge3.style.opacity = "1";
					badge3.classList.add("animate__animated");
					badge3.classList.add("animate__fadeInUp");
				}
				,600
				)
			}
		  });

		window.addEventListener("scroll", function () {
			if (window.scrollY > 2100) {
				let changeNumber = document.querySelector(".numbers1");
		anime({
			targets: changeNumber,
			innerHTML: [0, 4.8],
			easing: "linear",
			round: 5, // Will round the animated value to 1 decimal
		});

		let changeNumber2 = document.querySelector(".numbers2");
		anime({
			targets: changeNumber2,
			innerHTML: [0, 8],
			easing: "linear",
			round: 1, // Will round the animated value to 1 decimal
		});

		let changeNumber3 = document.querySelector(".numbers3");

		anime({
			
			targets: changeNumber3,
			innerHTML: [0, 110],
			easing: "linear",
			round: 40, // Will round the animated value to 1 decimal
		});
		
		const divFrise = document.querySelector(".friseContainer");

		// frises défilant de droite à gauche
		const frise7 = document.querySelector(".frise7");
		const frise9 = document.querySelector(".frise9");

		// frises défilant de droite à gauche
		const frise8 = document.querySelector(".frise8");
		
		let friseRight = -1500;

		setInterval(() => {
			frise7.style.right = `${friseRight}px`
			friseRight += 20

			if (frise7.style.right > "100px") {
				friseRight = -1500
			}
		}, 1000)

		setInterval(() => {
			frise9.style.right = `${friseRight}px`
			friseRight += 20

			if (frise9.style.right > "100px") {
				friseRight = -1500
			}
		}, 1000)

		let friseLeft = -1500

		setInterval(() => {
			frise8.style.left = `${friseLeft}px`
			friseLeft += 20

			if (frise8.style.left > "100px") {
				friseLeft = -1500
			}
		}, 1000)
			}
		});

		

	})

	return (
		<div className="laVRcest">
			<div className="badge1">
				<div className="avisUtilisateurs1">Avis Utilisateurs</div>
				<div className="numbers1"></div>
				<div className="sur1">/5</div>
			</div>
			<div className="badge2">
				<div className="avisUtilisateurs2">Nous intervenons dans</div>
				<div className="numbers2"></div>
				<div className="sur2">départements</div>
			</div>
			<div className="badge3">
				<div className="avisUtilisateurs3">Jeux disponibles</div>
				<div className="numbers3"></div>
				<div className="sur3"></div>
			</div>
			<img className="frise7" src="/img/frise-double-green-pastel.png" alt="okay"/>
			<img className="frise8" src="/img/frise-double-green-pastel.png" />
			<img className="frise9" src="/img/frise-double-green-pastel.png" />
		</div>

	);
}

export default SectionChiffres;
