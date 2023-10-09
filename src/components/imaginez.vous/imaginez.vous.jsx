import React, { useEffect, useRef } from "react";
import "./imaginez.vous.scss";
import rallax from 'rallax.js'

function ImaginezVous() {
	const imaginezVousRef = useRef(null)
	const titleRef = useRef(null)
	const text1Ref = useRef(null)
	const text2Ref = useRef(null)
	const text3Ref = useRef(null)


	useEffect(() => {

		// ----------Fonction Parallax dépendance rallax.js-----------

		const vaisseau1 = document.querySelector(".vaisseau")
		const parallaxVaisseau = rallax(vaisseau1, { speed: 0.35 })

		const vaisseau2 = document.querySelector(".vaisseau2")
		const parallaxVaisseau2 = rallax(vaisseau2, { speed: 0.2 })

		// const vaisseau3 = document.querySelector(".vaisseau3")
		// const parallaxVaisseau3 = rallax(vaisseau3, { speed: 0.2 })

		const targetMustafar = document.querySelector('.mustafar')
		const parallaxMustafar = rallax(targetMustafar, { speed: 0.04 })

		const targetPlanet = document.querySelector('.planet')
		const parallaxPlanet = rallax(targetPlanet, { speed: 0.1 })

		// Décallage de l'apparition des textes en cascades après l'apparition du titre

		let timeoutId, timeoutId1, timeoutId2, timeoutId3

		window.addEventListener('scroll', function () {
			const offsetTop = imaginezVousRef.current?.offsetTop

			if (window.scrollY > (offsetTop - 400)) {
				timeoutId = setTimeout(() => {
					if (!titleRef.current) {
						return
					  }
					titleRef.current.style.left = "0px";
					titleRef.current.style.opacity = "1";
				}
					, 100
				)

				timeoutId1 = setTimeout(() => {
					if (!text1Ref.current) {
						return
					  }
					text1Ref.current.style.left = "0px";
					text1Ref.current.style.opacity = "1";
				}
					, 1000
				)

				timeoutId2 = setTimeout(() => {
					if (!text2Ref.current) {
						return
					  }
					text2Ref.current.style.left = "0px";
					text2Ref.current.style.opacity = "1";
				}
					, 1700
				)

				timeoutId3 = setTimeout(() => {
					if (!text3Ref.current) {
						return
					  }
					text3Ref.current.style.left = "0px";
					text3Ref.current.style.opacity = "1";
				}
					, 2400
				)
			}
		},)

		return () => {
			clearTimeout(timeoutId)
			clearTimeout(timeoutId1)
			clearTimeout(timeoutId2)
			clearTimeout(timeoutId3)
		}
	},[]);

	return (
		<div className="imaginezVous" ref={imaginezVousRef}>
			<img className="background" src="/img/vrvibes-milky-way.jpg" alt="vr-vibes événement en réalité virtuelle - fond section Star Wars" />
			<img className="vaisseau" src="/img/vrvibes-vaisseau-star-wars.png" alt="vr-vibes événement en réalité virtuelle - vaisseau section Star Wars" />
			<img className="vaisseau2" src="/img/vrvibes-vaisseau-star-wars-little.png" alt="vr-vibes événement en réalité virtuelle - vaisseau section Star Wars" />
			{/* <img className="vaisseau3"  src="/img/vrvibes-vaisseau-star-wars-little.png" alt="vr-vibes événement en réalité virtuelle - vaisseau section Star Wars" /> */}
			<img className="planet" src="/img/vrvibes-planet-star-wars.png" alt="vr-vibes événement en réalité virtuelle - planète Star Wars" />
			<img className="mustafar" src="/img/vrvibes-mustafar-star-wars.png" alt="vr-vibes événement en réalité virtuelle - planète Mustafar section Star Wars" />
			<h2 className="title" ref={titleRef}>Imaginez</h2>
			<div className="text1" ref={text1Ref}>
				Imaginez-vous transporter vos invités dans des mondes <br />
				virtuels époustouflants et participer à des jeux en équipe <br />
				palpitants. Les rires, la joie et les moments de surprise se <br />
				multiplieront, créant des souvenirs durables et des <br />
				conversations animées pour les années à venir.
			</div>
			<br />
			<br />
			<div className="text2" ref={text2Ref}>
				Nos animateurs qualifiés seront présents pour guider vos <br />
				invités dans cette expérience immersive. Nous adaptons <br />
				nos activités de réalité virtuelle en fonction de l'âge et des <br />
				préférences de chacun. Des jeux interactifs pour les plus <br />
				jeunes aux simulations immersives pour les adultes, <br />
				il y en a pour tous les goûts.
			</div>
			<br />
			<br />
			<div className="text3" ref={text3Ref}>
				Alors, prêt à transformer votre prochain événement familial<br />
				en une aventure hors du commun ? Contactez-nous dès <br />
				maintenant pour réserver. Créons ensemble vos moments <br />
				magiques et de précieux souvenirs qui resteront gravés dans<br />
				les cœurs de tous vos invités.
			</div>
		</div>
	)
}

export default ImaginezVous;