import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";

import "./avis.utilisateurs.scss";

function AvisUtilisateurs() {

	const sectionUsersRef = useRef (null)

	// exemple méthode useState
	const [showImgUser1, setShowImgUser1] = useState(false)
	const [showImgUser2, setShowImgUser2] = useState(false)
	const [showImgUser3, setShowImgUser3] = useState(false)
	const [showImgUser4, setShowImgUser4] = useState(false)

	// Utilisation des noms de propriété calculés
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names

	const activeClasses = 'opacity-100  animate__animated  animate__slideInLeft'

	// exemple avec l’opérateur ternaire
	// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
	const myClasses3 = showImgUser3 ? activeClasses : 'opacity-0'

	useEffect(() => {

		window.addEventListener("scroll", function () {
			const offsetTop = sectionUsersRef.current?.offsetTop

			if (window.scrollY > (offsetTop - 600)) {

				setShowImgUser1(true)
				setShowImgUser2(true)

				setTimeout(() => {
					setShowImgUser3(true)
					setShowImgUser4(true)
				}
					, 1000
				)
			}
		});
	},[])

	return (
		<div className="sectionUsers" ref={sectionUsersRef}>
			<img src="/icns/vr-vibes-hands-logo-colored.svg" className="hands" />
			<div className="user1div">
				<div className="user1" >
					<img className={
						classnames('imageUser',
							{
								'opacity-100  animate__animated  animate__slideInLeft': showImgUser1,
								'opacity-0': !showImgUser1
							}
						)}
						src="/img/vrvibes-severin-richter.jpg"
						alt="Severin RICHTER responsable sécurité chez Ponticelli parle de vr-vibes"
					/>
					<div className="informationsUser">
						<div className="commentaireUser">" Superbe atelier d'animation en VR avec nos partenaires VR-Vibes, merci pour tout! "
						</div>
						<div className="nameUser">Séverin RICHTER</div>
						<img className="entrepriseUser" src="/icns/ponticelli-logo.png" alt="logo PONTICELLI FRERES" />
					</div>
				</div>
			</div>

			<div className="user2div">
				<div className="user2">
					<img className={classnames('imageUser2', { [activeClasses]: showImgUser2, 'opacity-0': !showImgUser2 })} src="/img/vrvibes-irene-lim.jpg" alt="Cliente de vr-vibes ayant commandé une prestation VR pour l'annniversaire de son fils donne son avis" />
					<div className="informationsUser2">
						<div className="commentaireUser2">" L'animation VR pour l'anniversaire de mon fils de 10 ans était géniale. Les enfants ce sont beaucoup amusés et étaient fascinés "
						</div>
						<div className="nameUser2">Irène LIM</div>
						<img className="entrepriseUser2" src="" alt="" />
					</div>
				</div>
			</div>
			{/* <div className="line" /> */}
			<div className="user3div">
				<div className="user3">
					<img className={classnames('imageUser3', myClasses3)} src="/img/vrvibes-partners-formation-hani-habiba.jpg" alt="Habiba HANI responsable de l'organisme de formation PARTNERS FORMATION parle de vr-vibes" />
					<div className="informationsUser3">
						<div className="commentaireUser3">" Une prestation de qualité, je recommande
							fortement"
						</div>
						<div className="nameUser3">Habiba HANNI</div>
						<img className="entrepriseUser3" src="/icns/partners-formation-logo.png" alt="logo PARTNERS FORMATION" />
					</div>
				</div>
			</div>

			<div className="user4div">
				<div className="user4">
					<img className={classnames('imageUser4', { [activeClasses]: showImgUser4, 'opacity-0': !showImgUser4 })} src="/img/vrvibes-sylvia-stojanovic-parle-de-vrvibes.jpg" />
					<div className="informationsUser4">
						<div className="commentaireUser4">"À la recherche d'une idée pour une fête familiale, j'ai trouvé VR Vibes sur Google. Les invités étaient enchantés!"
						</div>
						<div className="nameUser4">Sylvia STOJANOVIC</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AvisUtilisateurs