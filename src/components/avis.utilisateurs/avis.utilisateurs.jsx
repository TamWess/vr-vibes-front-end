import React, { useEffect} from "react";
import "./avis.utilisateurs.scss";

function AvisUtilisateurs() {

	useEffect(() => {

		const imageUser1 = document.querySelector(".imageUser")
		const imageUser2 = document.querySelector(".imageUser2")
		const imageUser3 = document.querySelector(".imageUser3")
		const imageUser4 = document.querySelector(".imageUser4")


		window.addEventListener("scroll", function () {

			if (window.scrollY > 900) {

				imageUser1.style.opacity = "1";
				imageUser1.classList.add("animate__animated");
				imageUser1.classList.add("animate__slideInLeft");

				imageUser2.style.opacity = "1";
				imageUser2.classList.add("animate__animated");
				imageUser2.classList.add("animate__fadeInLeft");


				setTimeout(() => {
					imageUser3.style.opacity = "1";
					imageUser3.classList.add("animate__animated");
					imageUser3.classList.add("animate__slideInLeft");

					imageUser4.style.opacity = "1";
					imageUser4.classList.add("animate__animated");
					imageUser4.classList.add("animate__slideInLeft");
				}
					, 1000
				)
			}
		});
	},[])

	return (
		<div className="sectionUsers">
			<img src="/icns/vr-vibes-hands-logo-colored.svg" className="hands" />
			<div className="user1div">
				<div className="user1" >
					<img className="imageUser" src="/img/vrvibes-severin-richter.jpg" alt="Severin RICHTER responsable sécurité chez Ponticelli parle de vr-vibes" />
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
					<img className="imageUser2" src="/img/vrvibes-irene-lim.jpg" alt="Cliente de vr-vibes ayant commandé une prestation VR pour l'annniversaire de son fils donne son avis" />
					<div className="informationsUser2">
						<div className="commentaireUser2">" L'animation VR pour l'anniversaire de mon fils de 10 ans était géniale. Les enfants ce sont beaucoup amusés et étaient fascinés "
						</div>
						<div className="nameUser2">Irène LIM</div>
						<img className="entrepriseUser2" src="" alt="" />
					</div>
				</div>
			</div>
			<div className="line" />
			<div className="user3div">
				<div className="user3">
					<img className="imageUser3" src="/img/vrvibes-partners-formation-hani-habiba.jpg" alt="Habiba HANI responsable de l'organisme de formation PARTNERS FORMATION parle de vr-vibes" />
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
					<img className="imageUser4" src="/img/vrvibes-sylvia-stojanovic-parle-de-vrvibes.jpg" />
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