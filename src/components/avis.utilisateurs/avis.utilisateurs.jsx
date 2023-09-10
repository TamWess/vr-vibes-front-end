import React, { Component, ReactFragment, useEffect, useState } from "react";
import "./avis.utilisateurs.scss";

function AvisUtilisateurs (){

	useEffect( () => {

		const imageUser1 = document.querySelector(".imageUser")
		const imageUser2 = document.querySelector(".imageUser2")
		const imageUser3 = document.querySelector(".imageUser3")
		const imageUser4 = document.querySelector(".imageUser4")

		window.addEventListener("scroll", function () {
			if (window.scrollY > 900) {
			  imageUser1.style.opacity = "1";
			  imageUser1.classList.add("animate__animated");
			  imageUser1.classList.add("animate__slideInLeft");
			}
		  });

		window.addEventListener("scroll", function () {
			if (window.scrollY > 900) {
			  imageUser2.style.opacity = "1";
			  imageUser2.classList.add("animate__animated");
			  imageUser2.classList.add("animate__fadeInLeft");
			}
		  });

		window.addEventListener("scroll", function () {
			if (window.scrollY > 900) {
			  setTimeout(() => {
				imageUser3.style.opacity = "1";
				imageUser3.classList.add("animate__animated");
				imageUser3.classList.add("animate__slideInLeft");
			  }
			  ,1000
			  )
			}
		  });

		window.addEventListener("scroll", function () {
			if (window.scrollY > 900) {
			  setTimeout(() => {
				imageUser4.style.opacity = "1";
				imageUser4.classList.add("animate__animated");
				imageUser4.classList.add("animate__slideInLeft");
			  }
			  ,1000
			  )
			}
		  });

		


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