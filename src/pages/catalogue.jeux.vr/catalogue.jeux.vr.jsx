import React, { useEffect, useState } from "react";
import "../../utils/style/libs/base.scss";
import "./catalogue.jeux.vr.scss";
import axios from "axios";

import { URL } from "../../utils/URLS/urls.jeux.js"

function CatalogueJeuxVR() {

	const [catalogueJeuxVR, setCatalogueJeuxVR] = useState([]);

	useEffect(() => {

		const fetchCatalogueJeuxVR = async () => {
			try {
				const { data } = await axios.get(URL.urlCatalogueJeuxVR);
				setCatalogueJeuxVR(data);
			} catch (error) {
				console.log(error.message);
			}
			console.log(catalogueJeuxVR);
		};
		fetchCatalogueJeuxVR();

	}, [])


	return (
		<div className="containerCatalogue">
			<h1 className="titleCatalogue">Notre sélection de jeux VR</h1>
			<p className="introTextProductionVR">Voici le Top 10 VR-Vibes des meilleurs jeux VR multijoueurs! <br/><br/>
			Faites nous confiance, notre sélection est faite pour vous... et vos précieux invités.
			</p>
			{catalogueJeuxVR.map((item) => (
				<React.Fragment key={item._id}>
					<div className="jeuCatalogue">
						<div className="leftPartJeuCatalogue">
							<img
								className="imageJeuCatalogue"
								src={item.img}
							/>
						</div>
						<div className="rightPartCatalogue">
							<h2 className="titreJeuVR">{item.title}</h2>
							<p className="descriptionJeu">
								{item.description}
							</p>
							<div className="videoTrailer">
								<iframe
									className="videoJeu"
									width="100%"
									src={item.trailer}
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
				</React.Fragment>))}
		</div>
	);
}

export default CatalogueJeuxVR;
