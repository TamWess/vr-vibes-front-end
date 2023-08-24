import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// dépendance parallax effets vaisseau star-wars:
import GoogleMapSection from "../../components/map/map";
import rallax from "rallax.js";
import "../../utils/style/libs/base.scss"
import "./style.scss"
// dépendance animation compteurs
import anime from "animejs";

// -----------Import Components-----------

import AccueilEntrepriseFamille from "../../components/accueil.entreprise.prive/accueil.entreprise.prive";
import Reassurance from "../../components/reassurance/reassurance.brands/reassurance.brands";
import ReserverEntrepriseFamille from "../../components/reserver.entreprise.famille/reserver.entrepise.famille";
import ImaginezVous from "../../components/imaginez.vous/imaginez.vous";
import SimpleSlider from "../../components/carousels/carouselHome";
import AvisUtilisateurs from "../../components/avis.utilisateurs/avis.utilisateurs";
import SectionChiffres from "../../components/section.chiffres/section.chiffres";
// import GoogleMapSection from "../../components/map/map"

function Home() {

  useEffect(() => {
	// ! Pour observer les différents niveaux de scroll, utiliser le console.log ci-dessous
	// window.addEventListener("scroll", (e) => {
	// 	// console.log(window.scrollY);
	// })
  })
   
  return (
	<>
		<AccueilEntrepriseFamille/>
		<Reassurance/>
		<ReserverEntrepriseFamille/>
		<AvisUtilisateurs/>
		<ImaginezVous/>
		<SectionChiffres/>
		<GoogleMapSection/>
		<SimpleSlider/>
	</>
  );
}

export default Home;
