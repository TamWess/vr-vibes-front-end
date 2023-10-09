import React, { useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import "./reserver.entrepise.famille.scss"

function ReserverEntrepriseFamille() {


const titleEntrepriseFamilleRef = useRef (null)
const subtitleEntrepriseRef = useRef (null)
const subtitleFamilleRef = useRef (null)
const reserverEntrepriseRef = useRef (null)
const reserverFamilleRef = useRef (null)


	// console.log(window.scroll.y);

	useEffect(() => {

		// --------SCROLL ANIMATIONS------

		
		window.addEventListener("scroll", function () {
			if (window.scrollY > 15) {
				if (!titleEntrepriseFamilleRef.current) {
					return
				  }
				titleEntrepriseFamilleRef.current.style.opacity = "1";
				titleEntrepriseFamilleRef.current.classList.add("animate__animated");
				titleEntrepriseFamilleRef.current.classList.add("animate__fadeInUp");
			}

			if (window.scrollY > 100) {
				if (!subtitleEntrepriseRef.current) {
					return
				  }
				if (!subtitleFamilleRef.current) {
					return
				  }
				  
				subtitleEntrepriseRef.current.style.opacity = "1";
				subtitleEntrepriseRef.current.classList.add("animate__animated");
				subtitleEntrepriseRef.current.classList.add("animate__fadeInUp");

				subtitleFamilleRef.current.style.opacity = "1";
				subtitleFamilleRef.current.classList.add("animate__animated");
				subtitleFamilleRef.current.classList.add("animate__fadeInUp");
			}

			if (window.scrollY > 370) {
				
				if (!reserverEntrepriseRef.current) {
					return
				  }
				if (!reserverFamilleRef.current) {
					return
				  }
				reserverEntrepriseRef.current.style.opacity = "1";
				reserverEntrepriseRef.current.classList.add("animate__animated");
				reserverEntrepriseRef.current.classList.add("animate__fadeInUp");

				reserverFamilleRef.current.style.opacity = "1";
				reserverFamilleRef.current.classList.add("animate__animated");
				reserverFamilleRef.current.classList.add("animate__fadeInUp");
			}
			
		});
	})

	return (
		<div className="entrepriseFamille">
			<h1 className="titleEntrepriseFamille" ref={titleEntrepriseFamilleRef}>
				LA VR RENDRA VOTRE EVENEMENT INOUBLIABLE !
			</h1>
			<div className="entreprise">
				<h2 className="subtitleEntreprise" ref={subtitleEntrepriseRef}>
					Team Building, Afterwork, Séminaire ...
				</h2>
				<img className="entrepriseChoice" src="/img/vrvibes-entreprise-choice.png" alt="vr-vibes réserver votre événement d'entreprise en réalité virtuelle - team building - escape game - after work - séminaire" />
				<div className="divReserver"><Link className="reserverEntreprise" ref={reserverEntrepriseRef} to="/formulaire_entreprise">
					Réserver
				</Link></div>
			</div>
			<div className="famille">
				<h2 className="subtitleFamille" ref={subtitleFamilleRef}>
					Baby Shower, Anniversaire, Mariage ...
				</h2>
				<img className="familleChoice" src="/img/vrvibes-family-choice.png" alt="vr-vibes réserver votre événement privé en réalité virtuelle baby shower - anniversaire - mariage" />
				<div className="divReserver">
					<Link className="reserverFamille" ref={reserverFamilleRef} to="formulaire_prive">
						Réserver
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ReserverEntrepriseFamille;
