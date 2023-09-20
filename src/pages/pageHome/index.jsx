import React from "react";
import "../../utils/style/libs/base.scss"
import "./style.scss"

import AccueilEntrepriseFamille from "../../components/accueil.entreprise.prive/accueil.entreprise.prive";
import Reassurance from "../../components/reassurance/reassurance.brands/reassurance.brands";
import ReserverEntrepriseFamille from "../../components/reserver.entreprise.famille/reserver.entrepise.famille";
import ImaginezVous from "../../components/imaginez.vous/imaginez.vous";
import SimpleSlider from "../../components/carousels/carouselHome";
import AvisUtilisateurs from "../../components/avis.utilisateurs/avis.utilisateurs";
import SectionChiffres from "../../components/section.chiffres/section.chiffres";
import GoogleMapSection from "../../components/map/map";
import JeuxVR from "../../components/jeux.vr/jeux.vr.jsx";

function Home() {

  return (
	<>
		<AccueilEntrepriseFamille/>
		<Reassurance/>
		<ReserverEntrepriseFamille/>
		<AvisUtilisateurs/>
		<JeuxVR/>
		<ImaginezVous/>
		<SectionChiffres/>
		<GoogleMapSection/>
		<SimpleSlider/>
	</>
  );
}

export default Home;
