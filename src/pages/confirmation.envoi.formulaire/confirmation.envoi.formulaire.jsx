import React, { useEffect, useState } from "react";
import "./confirmation.envoi.formulaire.scss";

function ConfirmationEnvoiFormulaire (){

	return(
		<div className="confirmationFormulaire">
			<img className="imageEnvoie" source="https://icons8.com/icon/115367/sent"/>
			<div className="messageEnvoye">
				Votre message nous a bien été envoyé!
			</div>
			<div className="NousReviendrons">
				Nous traiterons votre demande dans les 48 heures
			</div>
		</div>

	)
}

export default ConfirmationEnvoiFormulaire;