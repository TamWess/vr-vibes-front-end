import React from "react";
import "../../utils/style/libs/base.scss";
import "./catalogue.jeux.vr.scss";

function CatalogueJeuxVR() {
	return (
		<div className="containerCatalogue">
			<h1 className="titleCatalogue">Notre sélection de jeux VR</h1>
			<div className="jeuCatalogue">
				<div className="leftPartJeuCatalogue">
					<img
						className="imageJeuCatalogue"
						src="/img/vr-vibes-among-us-vr.jpg"
					/>
				</div>
				<div className="rightPartCatalogue">
					<h2 className="titreJeuVR">AMONG US VR</h2>
					<p className="descriptionJeu">
						Travail d'équipe et trahison dans l'espace! Dans ce jeu multijoueur
						en VR, les membres d'équipages devront travailler ensemble pour
						compléter toutes les tâches avant qu'un ou plusieurs imposteurs ne
						tuent tout le monde à bord. Trahison et supercherie sont toujours
						dans votre vaisseau spatial virtuel.
					</p>
					<div className="videoTrailer">
						<iframe
							className="videoJeu"
							width="100%"
							src="https://www.youtube.com/embed/K-smpNnRGSg?si=CNtEZlqr-Hihrwop"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
			<div className="jeuCatalogue">
				<div className="leftPartJeuCatalogue">
					<img
						className="imageJeuCatalogue"
						src="/img/vr-vibes-among-us-vr.jpg"
					/>
				</div>
				<div className="rightPartCatalogue">
					<h2 className="titreJeuVR">AMONG US VR</h2>
					<p className="descriptionJeu">
						Travail d'équipe et trahison dans l'espace! Dans ce jeu multijoueur
						en VR, les membres d'équipages devront travailler ensemble pour
						compléter toutes les tâches avant qu'un ou plusieurs imposteurs ne
						tuent tout le monde à bord. Trahison et supercherie sont toujours
						dans votre vaisseau spatial virtuel.
					</p>
					<div className="videoTrailer">
						<iframe
							className="videoJeu"
							width="100%"
							src="https://www.youtube.com/embed/K-smpNnRGSg?si=CNtEZlqr-Hihrwop"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CatalogueJeuxVR;
