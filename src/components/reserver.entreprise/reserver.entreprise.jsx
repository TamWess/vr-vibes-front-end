import React from "react";
import { Link } from "react-router-dom";
import "./reserver.entreprise.scss"

function ReserverEntreprise() {

	return (
		<div className="containerEntrepriseAE">
			<h2 className="titleAE">
				RENDEZ VOTRE ÉVÉNEMENT INOUBLIABLE !
			</h2>
			<div className="entrepriseAE">
				<h1 className="subtitleEntrepriseAE">
					Team Building, Afterworks, Séminaires ...
				</h1>
				<img className="entrepriseChoiceAE" src="/img/vrvibes-entreprise-choice.png" alt="vrvibes réserver votre événement privé en réalité virtuelle baby shower - anniversaire - mariage" />
				<div className="divReserverEntrerpriseAE">
					<Link className="reserverEntreprise" to="/formulaire_entreprise">
						Réserver
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ReserverEntreprise;
