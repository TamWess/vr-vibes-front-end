import React, { useEffect, useState } from "react";
import "./page.formulaire.prive.scss";

function FormulairePrive() {

	const [type, setType] = useState("")
	const [nombrePersonnes, setNombrePersonnes] = useState("")
	const [nom, setNom] = useState("")
	const [prenom, setPrenom] = useState("")
	const [date, setDate] = useState("")
	const [rue, setRue] = useState("")
	const [ville, setVille] = useState("")
	const [codePostal, setCodePostal] = useState("")
	const [tel, setTel] = useState("")

	// --------------REGEX---------------

	const nomPrenomRegex = /^[a-zA-Z]{2,}$/

	const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/

	const codePostalRegex = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/

	const telRegex = /^(\+33|0033|0)(6|7)[0-9]{8}$/g


	// -------------FONCTION VALIDATION SAISIE-----------

	function typeEvent(event) {
		setType(event.target.value)
		console.log(event.target.value);

		const typeId = document.querySelector("#quelTypeEvent")

		// if (nomPrenomRegex.test(event.target.value)) {
		// 	typeId.style.color = "green";
		// 	typeId.style.backgroundColor = "#0080002b";
		// 	typeId.style.color = "green";
		// }
		// else {
		// 	typeId.style.color = "black";
		// 	typeId.style.backgroundColor = "white";
		// 	typeId.style.color = "black";
		// }
	}

	function nombrePersonnesEvent(event) {
		setNombrePersonnes(event.target.value)
		console.log(event.target.value);

		const combienDePersonnesId = document.querySelector("#combienDePersonnes")

		// if (nomPrenomRegex.test(event.target.value)) {
		// 	typeId.style.color = "green";
		// 	typeId.style.backgroundColor = "#0080002b";
		// 	typeId.style.color = "green";
		// }
		// else {
		// 	typeId.style.color = "black";
		// 	typeId.style.backgroundColor = "white";
		// 	typeId.style.color = "black";
		// }
	}

	function dateEvent(event) {
		setDate(event.target.value)
		console.log(event.target.value);

		const dateId = document.querySelector("#date")

		if (dateId.pattern != "\d{2}-\d{2}-\d{4}") {
			
			// typeId.style.color = "green";
			dateId.style.backgroundColor = "red";
			// typeId.style.color = "green";
		}
		// else {
		// 	typeId.style.color = "black";
		// 	typeId.style.backgroundColor = "white";
		// 	typeId.style.color = "black";
		// }
	}

	function nomEvent(event) {
		setNom(event.target.value)

		const nomId = document.querySelector("#nom")

		if (nomPrenomRegex.test(event.target.value)) {
			nomId.style.color = "green";
			nomId.style.backgroundColor = "#0080002b";
			nomId.style.color = "green";
		}
		else {
			nomId.style.color = "black";
			nomId.style.backgroundColor = "white";
			nomId.style.color = "black";
		}
	}

	function prenomEvent(event) {
		setPrenom(event.target.value)

		const prenomId = document.querySelector("#prenom")

		if (nomPrenomRegex.test(event.target.value)) {
			prenomId.style.color = "green";
			prenomId.style.backgroundColor = "#0080002b";
			document.querySelector(".labelPrenom").style.color = "green";
		}
		else {
			prenomId.style.color = "black";
			prenomId.style.backgroundColor = "white";
			document.querySelector(".labelPrenom").style.color = "black";
		}
		console.log(date);
	}

	function rueEvent(event) {
		setRue(event.target.value)

		const rueId = document.querySelector("#rue")

		if (nomPrenomRegex.test(event.target.value)) {
			rueId.style.color = "green";
			rueId.style.backgroundColor = "#0080002b";
			document.querySelector(".labelRue").style.color = "green";
		}
		else {
			rueId.style.color = "black";
			rueId.style.backgroundColor = "white";
			document.querySelector(".labelRue").style.color = "black";
		}
	}

	function villeEvent(event) {
		setVille(event.target.value)

		const villeId = document.querySelector("#ville")

		if (nomPrenomRegex.test(event.target.value)) {
			villeId.style.color = "green";
			villeId.style.backgroundColor = "#0080002b";
			document.querySelector(".labelVille").style.color = "green";
		}
		else {
			villeId.style.color = "black";
			villeId.style.backgroundColor = "white";
			document.querySelector(".labelVille").style.color = "black";
		}
	}

	function codePostalEvent(event) {
		setCodePostal(event.target.value)

		const codePostalId = document.querySelector("#codePostal")

		if (codePostalRegex.test(event.target.value)) {
			codePostalId.style.color = "green";
			codePostalId.style.backgroundColor = "#0080002b";
			document.querySelector(".labelCodePostal").style.color = "green";
		}
		else {
			codePostalId.style.color = "red";
			codePostalId.style.backgroundColor = "#b104043e";
			document.querySelector(".labelCodePostal").style.color = "red";
		}
	}

	function telEvent(event) {
		setTel(event.target.value)

		const telId = document.querySelector("#tel")
		const erreurTel = document.querySelector(".erreurTel")

		if (telRegex.test(event.target.value)) {
			telId.style.color = "green";
			telId.style.backgroundColor = "#0080002b";
			document.querySelector(".labelTel").style.color = "green";
			erreurTel.style.display = "none"
		}
		else {
			telId.style.color = "red";
			telId.style.backgroundColor = "#b104043e";
			document.querySelector(".labelTel").style.color = "red";
			erreurTel.style.display = "block"

			erreurTel.innerHTML = `Le numéro de téléphone saisi est incorrect. <br/> ! La saisie du numéro de téléphone n'est pas obligatoire.`


		}
	}


	// function dateEvent(event) {
	// 	// setDate(event.target.value)

	// 	if (document.querySelector("#date").dateInput.value === true) {
	// 		console.log("date valide");
	// 		// document.querySelector("#dateCorrect").style.display = "block"
	// 		// document.querySelector("#dateCorrect").innerText = "Date correct"
	// 		// document.querySelector("#erreurDate").style.display = "none"
	// 	}
	// 	else {
	// 		console.log("date invalide");
	// 		// document.querySelector("#erreurDate").innerText = "Veuillez saisir la date au format JJ/MM/AAAA"
	// 		// document.querySelector("#erreurDate").style.display = "block"
	// 		// document.querySelector("#dateCorrect").style.display = "none"
	// 	}
	// }



	return (
		<div className="containerFormulaireCoordonnees">
			<div className="verticalLine" />

			{/* -----	PARTIE FORMULAIRE	----- */}
			<div className="containerFormulaire">
				<h1 className="titleFormulaire">Réserver votre événement ici </h1>
				<div className="texteFormulaire">Nous proposons un accompagnement plein de
					bonnes surprises, idéale pour un événement! La VR fera voyager enfants comme adultes.
				</div>
				<div className="nousVousRecontacterons">Nous vous recontacterons sous 48h week-end compris.</div>
				<div className="prix">À partir de 450€ HT</div>
				<img className="ligne" src="/icns/line-green.png" />


				<form className="saisirCoordonnees" onSubmit={dateEvent}>

					{/* -------question type d'événement------- */}

					<div className="typeEvent">
						<label className="labelQuelTypeEvent" htmlFor="quelTypeEvent">
							Pour quel type d'événement souhaitez vous réserver? *
						</label>
						<select name="event" id="quelTypeEvent" onChange={typeEvent}>
							<option value="Anniversaire">Anniversaire</option>
							<option value="Baby-Shower">Baby-Shower</option>
							<option value="Mariage">Mariage</option>
							<option value="Autre...">Autres...</option>
						</select>
					</div>

					{/* -----question nombre de personnes------- */}

					<div className="nombrePersonnes">
						<label className="labelNombrePersonnes" htmlFor="combienDePersonnes">
							À combien de personnes est destinée l'animation VR? *
						</label>
						<select name="nombre" id="combienDePersonnes" onChange={nombrePersonnesEvent}>
							<option value="moins de 10">moins de 10</option>
							<option value="entre 10 et 20">entre 10 et 20</option>
							<option value="plus de 20">plus de 20</option>
						</select>
					</div>

					<img className="ligne" src="/icns/line-green.png" />

					{/* ------Date------ */}

					<div className="aQuelleDate">À quelle date? *
						<label className="dateLabel" htmlFor="date"></label>
						<input required pattern="\d{4}-\d{2}-\d{2}" type="date" name="date" id="date" onChange={dateEvent} />
						<div id="erreurDate" />
						<div id="dateCorrect" />
					</div>
					<img className="ligne" src="/icns/line-green.png" />

					{/* ------Saisir Coordonnées----- */}

					{/* nom */}

					<label className="labelNom" htmlFor="nom">Nom *</label>
					<input required type="text" name="nom" id="nom" onChange={nomEvent} />


					{/* prenom */}

					<label className="labelPrenom" htmlFor="prenom">Prénom *</label>
					<input required type="text" name="prenom" id="prenom" onChange={prenomEvent} />


					{/* rue */}

					<label className="labelRue" htmlFor="rue">Rue *</label>
					<input required type="text" name="rue" id="rue" onChange={rueEvent} />


					{/* ville */}

					<label className="labelVille" htmlFor="ville">Ville *</label>
					<input required type="text" name="ville" id="ville" onChange={villeEvent} />

					{/* code postal */}

					<label className="labelCodePostal" htmlFor="codePostal" placeholder="75001">Code postal *</label>
					<input required type="text" name="codePostale" id="codePostal" onChange={codePostalEvent} />

					{/* mail */}

					<label className="labelMail" htmlFor="mail" placeholder="75001">Mail *</label>
					<input required type="text" name="mail" id="mail" onChange={codePostalEvent} />

					{/* tel  */}	

					<label className="labelTel" htmlFor="tel" placeholder="75001">Téléphone</label>
					<input required type="text" name="tel" id="tel" onChange={telEvent} />
					<div className="erreurTel" />
					<div className="messageTel"> Seulement si vous souhaitez que l'on vous contacte par téléphone. <br/> Si vous êtes en possession d'un numéro étranger, veuillez ignorer cette case. </div>

					{/* précisions */}

					<label className="pourToutesPrecisions" htmlFor="precisions">Pour toutes précisions concernant votre événements, écrivez-nous un message:</label>
					<input type="text" name="precisions" id="precisions" />

					{/* envoyer */}

					<button className="boutonEnvoyer">Envoyer</button>
				</form>

				<img className="ligne" src="/icns/line-green.png" />

			</div>

			{/* -----   PARTIE COORDONNEES	----- */}
			<div className="containerCoordonnees">
				<div className="phone"></div>
				<div className="mail"></div>
				<div className="localisation"></div>
			</div>
		</div>
	);
}

export default FormulairePrive;
