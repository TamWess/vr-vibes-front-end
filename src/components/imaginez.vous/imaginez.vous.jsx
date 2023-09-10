import React, { Component, ReactFragment, useEffect } from "react";
import "./imaginez.vous.scss";
import rallax from 'rallax.js'


function ImaginezVous() {
	
	useEffect(() => {

		// ----------Fonction Parallax-----------
		const targetVaisseau = document.querySelector('.vaisseau')
		const parallaxVaisseau = rallax(targetVaisseau, { speed: 0.35 })
		
		const targetVaisseau2 = document.querySelector('.vaisseau2')
		const parallaxVaisseau2 = rallax(targetVaisseau2, { speed: 0.1 })
		
		const targetVaisseau3 = document.querySelector('.vaisseau3')
		const parallaxVaisseau3 = rallax(targetVaisseau3, { speed: 0.1 })

		// ---- Planete Mustafar optionnel, perturbe l'ensemble
		const targetMustafar = document.querySelector('.mustafar')
		const parallaxMustafar = rallax(targetMustafar, { speed: 0.08 })
		
		const targetPlanet = document.querySelector('.planet')
		const parallaxPlanet = rallax(targetPlanet, { speed: 0.015 })

		const targetTitle = document.querySelector('.title')
		
		// Décallage de l'apparition des textes en cascades après l'apparition du titre
		
		window.addEventListener('scroll', function(){
			if (this.window.scrollY > 900){
				this.setTimeout(()=>{
					targetTitle.style.left= "0px";
					targetTitle.style.opacity= "1";
				}
				,100
				)
			}
		})

		const targetText1 = document.querySelector('.text1')
		window.addEventListener('scroll', function(){
			if (this.window.scrollY > 900){
				this.setTimeout(()=>{
					targetText1.style.left= "0px";
					targetText1.style.opacity= "1";
				}
				,1000
				)
			}
		})

		const targetText2 = document.querySelector('.text2')
		window.addEventListener('scroll', function(){
			if (this.window.scrollY > 900){
				this.setTimeout(()=>{
					targetText2.style.left= "0px";
					targetText2.style.opacity= "1";
				}
				,1700
				)
			}
		})
		
		const targetText3 = document.querySelector('.text3')
		window.addEventListener('scroll', function(){
			if (this.window.scrollY > 900){
				this.setTimeout(()=>{
					targetText3.style.left= "0px";
					targetText3.style.opacity= "1";
				}
				,2400
				)
			}
		})

		// const targetTitle = document.querySelector('.title')
		// const parallaxTitle = rallax(targetTitle, { speed: 0 })
		
		// const targetText = document.querySelector('.text')
		// const parallaxText = rallax(targetText, { speed: 0.1 })

		// -----Tentative fonction avec stop() et start() non reconnu = ?

		// function parallaxControl(){
		// 	if (window.scrollY > 800) {
		// 		targetText.stop()
		// 		targetVaisseau.stop()
		// 		targetTitle.stop()
		// 	}
		// 	else {
		// 		targetText.start()
		// 		targetVaisseau.start()
		// 		targetTitle.start()
		//     }
	    // };
		// parallaxControl()
	});
		
	return (
		<div className="imaginezVous">
			<img className="background" src="/img/star-wars-space-battle-02.jpg" alt="vr-vibes vrvibes star-wars-space" />
			<img className="vaisseau" src="/img/vaisseau-star-wars.png" alt="vr-vibes vrvibes star-wars-vaisseau" />
			<img className="vaisseau2" src="/img/vaisseau-star-wars-little.png" alt="vr-vibes vrvibes star-wars-vaisseau" />
			<img className="vaisseau3" src="/img/vaisseau-star-wars-little.png" alt="vr-vibes vrvibes star-wars-vaisseau" />
			<img className="planet" src="/img/planet-star-wars.png" alt="vr-vibes vrvibes star-wars-vaisseau" />
			<img className="mustafar" src="/img/mustafar-star-wars.png" alt="vr-vibes vrvibes star-wars-vaisseau" />
			<h2 className="title">Imaginez-vous...</h2>
			<div className="text1">
				Imaginez-vous transporter vos invités dans des mondes <br/>
				virtuels époustouflants et participer à des jeux en équipe <br/> 
				palpitants. Les rires, la joie et les moments de surprise se <br/>
				multiplieront, créant des souvenirs durables et des <br/>
				conversations animées pour les années à venir.
			</div>
			<br/>
			<br/>
			<div className="text2">
				Nos animateurs qualifiés seront présents pour guider vos <br/> 
				invités dans cette expérience immersive. Nous adaptons <br/> 
				nos activités de réalité virtuelle en fonction de l'âge et des <br/>
				préférences de chacun. Des jeux interactifs pour les plus <br/>
				jeunes aux simulations immersives pour les adultes, <br/>
				il y en a pour tous les goûts.
			</div>
			<br/>
			<br/>
			<div className="text3">
				Alors, prêt à transformer votre prochain événement familial<br/>
				en une aventure hors du commun ? Contactez-nous dès <br/>
				maintenant pour réserver. Créons ensemble vos moments <br/>
				magiques et de précieux souvenirs qui resteront gravés dans<br/>
				les cœurs de tous vos invités.
			</div>
		</div>
	)
}

export default ImaginezVous;