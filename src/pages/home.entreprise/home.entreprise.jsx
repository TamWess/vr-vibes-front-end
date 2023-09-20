import React from "react";
import "../../utils/style/libs/base.scss"
import "./home.entreprise.scss"

import AccueilEntreprise from "../../components/accueil.entreprise/accueil.entreprise";
import Reassurance from "../../components/reassurance/reassurance.brands/reassurance.brands";
import ReserverEntreprise from "../../components/reserver.entreprise/reserver.entreprise";
import ImaginezVous from "../../components/imaginez.vous/imaginez.vous";
import SimpleSlider from "../../components/carousels/carouselHome";
import AvisUtilisateurs from "../../components/avis.utilisateurs/avis.utilisateurs";
import SectionChiffres from "../../components/section.chiffres/section.chiffres";
import GoogleMapSection from "../../components/map/map";
import JeuxVR from "../../components/jeux.vr/jeux.vr";

function HomeEntreprise() {

  return (
	<>
		<AccueilEntreprise/>
		<Reassurance/>
		<ReserverEntreprise/>
		<AvisUtilisateurs/>
		{/* <JeuxVR/> */}
		<ImaginezVous/>
		<SectionChiffres/>
		<GoogleMapSection/>
		<SimpleSlider/>
	</>
  );
}

export default HomeEntreprise;
