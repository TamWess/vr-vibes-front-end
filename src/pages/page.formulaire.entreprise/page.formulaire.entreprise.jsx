import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./page.formulaire.entreprise.scss";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL

function FormulaireEntreprise() {

	let navigate = useNavigate()
	
	const [type, setType] = useState("")
	const [nombrePersonnes, setNombrePersonnes] = useState("")
	const [nom, setNom] = useState("")
	const [prenom, setPrenom] = useState("")
	const [date, setDate] = useState("")
	const [rue, setRue] = useState("")
	const [ville, setVille] = useState("")
	const [codePostal, setCodePostal] = useState("")
	const [mail, setMail] = useState("")
	const [tel, setTel] = useState("")
	const [precisions, setPrecisions] = useState("")

	async function handleSubmit(event) {
		event.preventDefault()

		try {
			const response = await axios.post(`${apiBaseUrl}/reservations`,
				{
					type: type,
					nombrePersonnes: nombrePersonnes,
					nom: nom,
					prenom: prenom,
					date: date,
					rue: rue,
					ville: ville,
					codePostal: codePostal,
					mail: mail,
					tel: tel,
					precisions: precisions,
				})

			if (response.status === 201) {
				navigate('/confirmation_envoi_formulaire')
			}

			else {
				event.preventDefault()
				console.log("vous n'avez pas rempli tous les éléments requis");
				// mettre un inner html d'erreur

				document.querySelector(".erreurEnvoi").style.opacity = "1"
			}
		}

		catch (error) {
			console.error(error);
		}
	}

	// --------------REGEX---------------

	const nomPrenomRegex = /^[a-zA-Z ]+$/

	const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/

	const rueRegex = /./

	const codePostalRegex = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/g

	const telRegex = /^(\+33|0033|0)(6|7)[0-9]{8}$/g

	const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g


	// -------------FONCTION VALIDATION SAISIE-----------

	function typeEvent(event) {
		setType(event.target.value)
		console.log(event.target.value);

		const typeId = document.querySelector("#quelTypeEvent")

		if (event.target.value) {
			typeId.style.color = "green";
			typeId.style.backgroundColor = "#0080002b";
			typeId.style.color = "green";
		}
	}

	function nombrePersonnesEvent(event) {
		setNombrePersonnes(event.target.value)
		console.log(event.target.value);

		const combienDePersonnesId = document.querySelector("#combienDePersonnes")


		if (event.target.value) {
			combienDePersonnesId.style.color = "green";
			combienDePersonnesId.style.backgroundColor = "#0080002b";
			combienDePersonnesId.style.color = "green";
		}
	}

	function dateEvent(event) {
		setDate(event.target.value)
		console.log(event.target.value);

		const dateId = document.querySelector("#date")

		if (dateId.pattern != "\d{2}-\d{2}-\d{4}") {

			dateId.style.backgroundColor = "#0080002b";
			dateId.style.color = "green";

		}
	}

	function nomEvent(event) {
		setNom(event.target.value)

		const nomId = document.querySelector("#nom")

		if (nomPrenomRegex.test(event.target.value)) {
			nomId.style.color = "green";
			nomId.style.backgroundColor = "#0080002b";
			document.querySelector(".labelNom").style.color = "green";
		}
		else {
			nomId.style.color = "red";
			nomId.style.backgroundColor = "#b104043e";
			nomId.style.color = "red";
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
			prenomId.style.color = "red";
			prenomId.style.backgroundColor = "#b104043e";
			document.querySelector(".labelPrenom").style.color = "red";
		}
		console.log(date);
	}

	function rueEvent(event) {
		setRue(event.target.value)

		const rueId = document.querySelector("#rue")

		if (rueRegex.test(event.target.value)) {
			rueId.style.color = "green";
			rueId.style.backgroundColor = "#0080002b";
			document.querySelector(".labelRue").style.color = "green";
		}
		else {
			rueId.style.color = "red";
			rueId.style.backgroundColor = "#b104043e";
			document.querySelector(".labelRue").style.color = "red";
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
			villeId.style.color = "red";
			villeId.style.backgroundColor = "#b104043e";
			document.querySelector(".labelVille").style.color = "red";
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

	function mailEvent(event) {
		setMail(event.target.value)

		const mailId = document.querySelector("#mail")

		if (mailRegex.test(event.target.value)) {
			mailId.style.color = "green";
			mailId.style.backgroundColor = "#0080002b";
			document.querySelector(".labelMail").style.color = "green";
		}
		else {
			mailId.style.color = "red";
			mailId.style.backgroundColor = "#b104043e";
			document.querySelector(".labelMail").style.color = "red";
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

	function precisionsEvent(event) {
		setPrecisions(event.target.value)

	}

	return (
		<div className="containerFormulaireCoordonnees">
			{/* <div className="verticalLine" /> */}

			{/* -----	PARTIE FORMULAIRE	----- */}
			<div className="introFormulaire">

				<h1 className="titleFormulaire">Réserver votre événement ici </h1>
				<div className="texteFormulaire">Nous proposons un accompagnement plein de
					bonnes surprises, idéale pour un événement! <br />
					La VR fera voyager enfants comme adultes.
				</div>
				<div className="nousVousRecontacterons">Nous vous recontacterons sous 48h week-end compris.</div>
				<div className="prix">À partir de 450€ HT</div>
			</div>
			<div className="containerFormulaire">

				<img className="ligne" src="/icns/line-green.png" />


				<form className="saisirCoordonnees" onSubmit={handleSubmit}>

					{/* -------question type d'événement------- */}

					<div className="typeEvent">
						<label className="labelQuelTypeEvent" htmlFor="quelTypeEvent">
							Pour quel type d'événement souhaitez vous réserver? *
						</label>
						<select name="event" id="quelTypeEvent" onChange={typeEvent}>
							<option value="Anniversaire">Team-building</option>
							<option value="Baby-Shower">Afterwork</option>
							<option value="Mariage">Séminaire</option>
							<option value="Autre...">Autre...</option>
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

					{/* <img className="ligne" src="/icns/line-green.png" /> */}

					{/* ------Date------ */}

					<div className="aQuelleDate">À quelle date? *
						<label className="dateLabel" htmlFor="date"></label>
						<input required pattern="\d{4}-\d{2}-\d{2}" type="date" name="date" id="date" onChange={dateEvent} />
						<div id="erreurDate" />
						<div id="dateCorrect" />
					</div>
					<img className="ligne2" src="/icns/line-green.png" />

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

					<label className="labelCodePostal" htmlFor="codePostal">Code postal *</label>
					<input required type="text" name="codePostale" id="codePostal" onChange={codePostalEvent} />

					{/* mail */}

					<label className="labelMail" htmlFor="mail" placeholder="75001">Mail *</label>
					<input required type="email" name="mail" id="mail" onChange={mailEvent} />

					{/* tel  */}

					<label className="labelTel" htmlFor="tel" placeholder="75001">Téléphone</label>
					<input required type="text" name="tel" id="tel" onChange={telEvent} />
					<div className="erreurTel" />
					<div className="messageTel"> Seulement si vous souhaitez que l'on vous contacte par téléphone. <br /> Si vous êtes en possession d'un numéro étranger, veuillez ignorer cette case. </div>

					{/* précisions */}

					<label className="pourToutesPrecisions" htmlFor="precisions">Pour toutes précisions concernant votre événements, écrivez-nous un message:</label>
					<input type="text" name="precisions" id="precisions" onChange={precisionsEvent} />

					{/* envoyer */}

					<button className="boutonEnvoyer">Envoyer</button>
					<div className="erreurEnvoi">
						Vous n'avez pas rempli tous les champs requis.
						<br />
						<br />
						Seuls les champs comportant le symbole * sont obligatoires.
					</div>
				</form>

			</div>

			{/* -----   PARTIE COORDONNEES	----- */}
			<div className="containerCoordonnees">
				<div className="phone">
					<img className="phoneImage" src="/icns/phone.svg" />
					<div className="space" />
					<div className="textPhone">06.52.83.57.22</div>
				</div>
				<div className="mail">
					<img className="mailImage" src="/icns/envelope.svg" />
					<div className="space" />
					<div className="textMail">contact@eosvr.fr</div>
				</div>
				<div className="localisation">
					<img className="localisationImage" src="/icns/localisation.svg" />
					<div className="space" />
					<div className="textLocalisation">Nous proposons nos services dans <br /> toute la région île-de-France</div>

				</div>
			</div>
		</div>
	);
}

export default FormulaireEntreprise;
