import React from "react";
import "./contact.scss"
import { Link } from "react-router-dom";

function Contact (){

	return(
		<div className="containerContact">
			<h1 className="contactTitle">Contact</h1>
			<div className="containerCoordonnees">
				<div className="phone">
					<img className="phoneImage" src="/icns/phone.svg" alt="logo téléphone vr-vibes - contactez vr-vibes pour une prestation d'événement en réalité virtuelle sur Paris"/>
					<div className="space"/>
					<div className="textPhone">06.52.83.57.22</div>
				</div>
				<div className="mail">
					<img className="mailImage" src="/icns/envelope.svg" alt="logo mail vr-vibes - contactez vr-vibes pour une prestation d'événement en réalité virtuelle sur Paris"/>
					<div className="space"/>
					<div className="textMail">contact@eosvr.fr</div>
				</div>
				<div className="localisation">
					<img className="localisationImage" src="/icns/localisation.svg"/>
					<div className="space"/>
					<div className="textLocalisation">Nous proposons nos services dans <br/> toute la région île-de-France</div>
				</div>
			</div>
			<div className="reserverContact">
				<div className="liensReservation">
					<div className="lienFormulaireEntreprise">
						Vous souhaitez nous contacter pour un événement d'entreprise? <Link className="lienEntreprise" to="/formulaire_entreprise">Cliquez-ici</Link>
					</div>
					<div className="lienFormulairePrive">
						Vous souhaitez nous contacter pour un événement privé? <Link className="lienPrive" to="/formulaire_prive"> Cliquez ici</Link>
					</div>
					<div className="lienFormulairePrive"></div>
				</div>
			</div>
		</div>
	)
}

export default Contact;
