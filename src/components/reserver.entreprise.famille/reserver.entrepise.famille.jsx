import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import "./reserver.entrepise.famille.scss"

function ReserverEntrepriseFamille() {

	console.log(window.scroll.y);

	useEffect(() => {

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

			if (window.scrollY > 100) {
				subtitleEntreprise.style.opacity = "1";
				subtitleEntreprise.classList.add("animate__animated");
				subtitleEntreprise.classList.add("animate__fadeInUp");
			}

			if (window.scrollY > 100) {
				subtitleFamille.style.opacity = "1";
				subtitleFamille.classList.add("animate__animated");
				subtitleFamille.classList.add("animate__fadeInUp");
			}

			if (window.scrollY > 370) {
				reserverEntreprise.style.opacity = "1";
				reserverEntreprise.classList.add("animate__animated");
				reserverEntreprise.classList.add("animate__fadeInUp");
			}

			if (window.scrollY > 370) {
				reserverFamille.style.opacity = "1";
				reserverFamille.classList.add("animate__animated");
				reserverFamille.classList.add("animate__fadeInUp");
			}
		});
	})

	return (
		<div className="entrepriseFamille">
			<h1 className="titleEntrepriseFamille">
				RENDEZ VOTRE ÉVÉNEMENT INOUBLIABLE !
			</h1>
			<div className="entreprise">
				<h2 className="subtitleEntreprise">
					Team Building, Afterwork, Séminaire ...
				</h2>
				<img className="entrepriseChoice" src="/img/vrvibes-entreprise-choice.png" alt="vr-vibes réserver votre événement d'entreprise en réalité virtuelle - team building - escape game - after work - séminaire" />
				<div className="divReserver"><Link className="reserverEntreprise" to="/formulaire_entreprise">
					Réserver
				</Link></div>
			</div>
			<div className="famille">
				<h2 className="subtitleFamille">
					Baby Shower, Anniversaire, Mariage ...
				</h2>
				<img className="familleChoice" src="/img/vrvibes-family-choice.png" alt="vr-vibes réserver votre événement privé en réalité virtuelle baby shower - anniversaire - mariage" />
				<div className="divReserver">
					<Link className="reserverFamille" to="formulaire_prive">
						Réserver
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ReserverEntrepriseFamille;
