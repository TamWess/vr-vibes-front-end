import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// dépendance parallax effets vaisseau star-wars:
import rallax from "rallax.js";
import "../../utils/style/libs/base.scss"
import "./home.entreprise.scss"
// dépendance animation compteurs
import anime from "animejs";

// -----------Import Components-----------

import AccueilEntreprise from "../../components/accueil.entreprise/accueil.entreprise";
import Reassurance from "../../components/reassurance/reassurance.brands/reassurance.brands";
import ReserverEntreprise from "../../components/reserver.entreprise/reserver.entreprise";
import ImaginezVous from "../../components/imaginez.vous/imaginez.vous";
import SimpleSlider from "../../components/carousels/carouselHome";
import AvisUtilisateurs from "../../components/avis.utilisateurs/avis.utilisateurs";
import SectionChiffres from "../../components/section.chiffres/section.chiffres";
import GoogleMapSection from "../../components/map/map";


function HomeEntreprise() {

  useEffect(() => {

	// ! Pour observer les différents niveaux de scroll, utiliser le console.log ci-dessous
	// window.addEventListener("scroll", (e) => {
	// 	// console.log(window.scrollY);
	// })
  })
   
  return (
	<>
		<AccueilEntreprise/>
		<Reassurance/>
		<ReserverEntreprise/>
		<AvisUtilisateurs/>
		<ImaginezVous/>
		<SectionChiffres/>
		<GoogleMapSection/>
		<SimpleSlider/>
	</>
  );
}

export default HomeEntreprise;
