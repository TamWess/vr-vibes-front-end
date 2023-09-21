import React from "react";
import "../../utils/style/libs/base.scss"
import "./home.prive.scss"

import AccueilPrive from "../../components/accueil.prive/accueil.prive"
import Reassurance from "../../components/reassurance/reassurance.brands/reassurance.brands";
import ReserverPrive from "../../components/reserver.prive/reserver.prive";
import ImaginezVous from "../../components/imaginez.vous/imaginez.vous";
import SimpleSlider from "../../components/carousels/carouselHome";
import AvisUtilisateurs from "../../components/avis.utilisateurs/avis.utilisateurs";
import SectionChiffres from "../../components/section.chiffres/section.chiffres";
import GoogleMapSection from "../../components/map/map";
import JeuxVR from "../../components/jeux.vr/jeux.vr";

function HomePrive() {

	return (
		<>
			<AccueilPrive />
			<Reassurance />
			<ReserverPrive />
			<AvisUtilisateurs />
			<JeuxVR/>
			<ImaginezVous />
			<SectionChiffres />
			<GoogleMapSection />
			<SimpleSlider />
		</>
	);
}

export default HomePrive;
