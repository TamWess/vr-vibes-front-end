import React from "react";
import { Link } from "react-router-dom";
import "./reserver.prive.scss"

function ReserverPrive() {

	return (
		<div className="familleDivAF">
			<h2 className="titleAF">
				RENDEZ VOTRE ÉVÉNEMENT INOUBLIABLE !
			</h2>
			<div className="familleAF">
				<h1 className="subtitleFamilleAF">
					Baby Shower, Anniversaire, Mariage ...
				</h1>
				<img className="familleChoiceAF" src="/img/vrvibes-family-choice.png" />
				<div className="divReserverFamilleAF">
					<Link className="reserverFamilleAF" to="/formulaire_prive">
						Réserver
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ReserverPrive;
