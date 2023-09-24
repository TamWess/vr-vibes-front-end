import React, { useEffect } from "react";
import "./jeux.vr.scss";
import { Link } from "react-router-dom";

function JeuxVR() {

	useEffect(() => {

		const titleJeuxVR = document.querySelector(".titleRightJeuxVR")
		const textJeuxVR = document.querySelector(".textRightJeuxVR")
		const boutonNosJeux = document.querySelector(".lienJeu")
		const imageJeux3 = document.querySelector(".imageJeux3")
		const imageJeux2 = document.querySelector(".imageJeux2")
		const imageJeux1 = document.querySelector(".imageJeux1")

		window.addEventListener('scroll', function () {
			if (this.window.scrollY > 1000) {

				this.setTimeout(() => {
					imageJeux3.style.opacity = "1";
				}
					, 100
				)

				this.setTimeout(() => {
					imageJeux2.style.opacity = "1";
				}
					, 500
				)

				this.setTimeout(() => {
					imageJeux1.style.opacity = "1";
				}
					, 1000
				)

				this.setTimeout(() => {
					titleJeuxVR.style.left = "0px";
					titleJeuxVR.style.opacity = "1";
				}
					, 2000
				)

				this.setTimeout(() => {
					textJeuxVR.style.left = "0px";
					textJeuxVR.style.opacity = "1";
				}
					, 3000
				)

				this.setTimeout(() => {
					boutonNosJeux.style.left = "0px";
					boutonNosJeux.style.opacity = "1";
				}
					, 4000
				)
			}
		})
	});

	return (
		<div className="containerJeuxVR">
			<div className="leftPartJeuxVR">
				<img className="imageJeux1" src="/img/vr-vibes-among-us-vr.jpg" alt="" />
				<img className="imageJeux2" src="/img/vr-vibes-acron-attack-on-squirrels.jpg" alt="" />
				<img className="imageJeux3" src="/img/vr-vibes-vader-immortal-episode-3.jpg" alt="" />
			</div>
			<div className="rightPartJeuxVR">
				<h1 className="titleRightJeuxVR">Découvrez la séléction <br />VR-Vibes <br /> de jeux pour vos événements</h1>
				<p className="textRightJeuxVR">Des jeux VR multijoueurs incroyables pour s'amuser en équipe! De l'escape game aux jeux collaboratifs, découvrez nos recommandations d'expériences VR pour un événement réussi!</p>
				<Link className="lienJeu" to={"/vrvibes-catalogue-jeux-vr"}>Nos Jeux
				</Link>
			</div>
		</div>
	)
}

export default JeuxVR;

