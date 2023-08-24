import React, { Component, ReactFragment, useEffect, useState } from "react";
import "./avis.utilisateurs.scss";

function AvisUtilisateurs (){


	// const [centerCircle, setCenterCircle] = useState ({});

	useEffect( () => {

		// const centeredElement = document.querySelector('.circle');

        // // Fonction pour centrer l'élément sur l'axe horizontal
        // function centerElementHorizontally() {
        //     const windowWidth = window.innerWidth;
        //     const elementWidth = centeredElement.offsetWidth; 
        //     const offsetLeft = (windowWidth - elementWidth) / 2.03;
		// 	console.log(windowWidth);

        //     centeredElement.style.transform = `translateX(${offsetLeft}px)`;

			
        // }

        // // Centrer l'élément au chargement de la page
        // centerElementHorizontally();


	})

	return (
		<div className="sectionUsers">
			<img src="/icns/vr-vibes-hands-logo-colored.svg" className="hands"/>
			<div className="user1div">
				<div className="user1">
					<img className="imageUser" src="/img/severin-richter.jpg" alt="severin richter commentaire vr-vibes vr vibes ponticelli réalité virtuelle virtual reality"/>
					<div className="informationsUser">
						<div className="commentaireUser">" Superbe atelier d'animation en VR avec nos partenaires VR-Vibes, merci pour tout! " 
						</div>
						<div className="nameUser">Séverin RICHTER</div>
						<img className="entrepriseUser" src="/icns/ponticelli-logo.png" alt=""/>
					</div>
				</div>
			</div>
			
			<div className="user2div">
				<div className="user2">
					<img className="imageUser2" src="/img/irene-lim.jpg" alt="severin richter commentaire vr-vibes vr vibes ponticelli réalité virtuelle virtual reality"/>
					<div className="informationsUser2">
						<div className="commentaireUser2">" L'animation VR pour l'anniversaire de mon fils de 10 ans était géniale. Les enfants ce sont beaucoup amusés et étaient fascinés " 
						</div>
						<div className="nameUser2">Irène LIM</div>
						<img className="entrepriseUser2" src="" alt=""/>
					</div>
				</div>
			</div>
			<div className="line"/>
			<div className="user3div">
				<div className="user3">
					<img className="imageUser3" src="/img/severin-richter.jpg" alt="nacer beddar commentaire vr-vibes vr vibes partnersformation partners formation réalité virtuelle virtual reality"/>
					<div className="informationsUser3">
						<div className="commentaireUser3">" Une prestation de qualité, je recommande
						fortement pour le team-building " 
						</div>
						<div className="nameUser3">Nacer BEDDAR</div>
						<img className="entrepriseUser3" src="/icns/partners-formation-logo.png" alt=""/>
					</div>
				</div>
			</div>

			<div className="user4div">
				<div className="user4">
					<img className="imageUser4" src="/img/severin-richter.jpg" alt="severin richter commentaire vr-vibes vr vibes ponticelli réalité virtuelle virtual reality"/>
					<div className="informationsUser4">
						<div className="commentaireUser4">" Très satisfait Lorem ipsum dolor sit amet consectetur adipisicing elit.  " 
						</div>
						<div className="nameUser4">Séverin RICHTER</div>
						<img className="entrepriseUser4" src="/icns/ponticelli-logo.png" alt=""/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AvisUtilisateurs