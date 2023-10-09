import React, { useEffect, useRef } from "react";
import "./jeux.vr.scss";
import { Link } from "react-router-dom";

function JeuxVR() {

	const containerJeuxVRRef = useRef (null)
	const imageJeux1Ref = useRef (null)
	const imageJeux2Ref = useRef (null)
	const titleRightJeuxVRRef = useRef (null)
	const textRightJeuxVRRef = useRef (null)
	const lienJeuRef = useRef (null)

	useEffect(() => {

		window.addEventListener('scroll', function () {

			const offsetTop = containerJeuxVRRef.current?.offsetTop
			if (window.scrollY > (offsetTop - 700)) {

				setTimeout(() => {
					if (!imageJeux2Ref.current) {
						return
					  }
					imageJeux2Ref.current.style.opacity = "1";
				}
					, 500
				)

				setTimeout(() => {
					if (!imageJeux1Ref.current) {
						return
					  }
					imageJeux1Ref.current.style.opacity = "1";
				}
					, 1000
				)

				setTimeout(() => {
					if (!titleRightJeuxVRRef.current) {
						return
					  }
					titleRightJeuxVRRef.current.style.left = "0px";
					titleRightJeuxVRRef.current.style.opacity = "1";
				}
					, 2000
				)

				setTimeout(() => {
					if (!textRightJeuxVRRef.current) {
						return
					  }
					textRightJeuxVRRef.current.style.left = "0px";
					textRightJeuxVRRef.current.style.opacity = "1";
				}
					, 3000
				)

				setTimeout(() => {
					if (!lienJeuRef.current) {
						return
					  }
					lienJeuRef.current.style.left = "0px";
					lienJeuRef.current.style.opacity = "1";
				}
					, 4000
				)
			}
		})
	},[]);

	return (
		<div className="containerJeuxVR" ref={containerJeuxVRRef}>
			<div className="leftPartJeuxVR">
				<img className="imageJeux1" ref={imageJeux1Ref} src="/img/vrvibes-among-us-vr.jpg" alt="jeu vrvibes among us pour team building, séminaire, afterwork, anniversaire, mariage, baby shower" />
				<img className="imageJeux2" ref={imageJeux2Ref} src="/img/vrvibes-acron-attack-on-squirrels.jpg" alt="jeu vrvibes acron pour team building, séminaire, afterwork, anniversaire, mariage, baby shower" />
			</div>
			<div className="rightPartJeuxVR">
				<h1 className="titleRightJeuxVR" ref={titleRightJeuxVRRef}>Découvrez la séléction <br />VR-Vibes <br /> de jeux pour vos événements</h1>
				<p className="textRightJeuxVR" ref={textRightJeuxVRRef}>Des jeux VR multijoueurs incroyables pour s'amuser en équipe! De l'escape game aux jeux collaboratifs, découvrez nos recommandations d'expériences VR pour un événement réussi!</p>
				<Link className="lienJeu" ref={lienJeuRef} to={"/vrvibes-catalogue-jeux-vr"}>Nos Jeux
				</Link>
			</div>
		</div>
	)
}

export default JeuxVR;

