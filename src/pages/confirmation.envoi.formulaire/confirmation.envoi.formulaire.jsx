import React, { useEffect, useState } from "react";
import "./confirmation.envoi.formulaire.scss";

function ConfirmationEnvoiFormulaire (){

	return(
		<div className="confirmationFormulaire">
			<img className="imageEnvoie" src="/icns/sent-formulaire-icone.png"/>
			<div className="messageEnvoye">
				Votre message nous a bien été envoyé!
			</div>
			<div className="nousReviendrons">
				Nous traiterons votre demande dans les 48 heures
			</div>
		</div>

	)
}

export default ConfirmationEnvoiFormulaire;