import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../utils/style/libs/base.scss";
import "./style.scss";
import 'animate.css';


// Responsive App ip adress: http://192.168.8.123:3000/

function Template() {

	function closeRollMenu() {
			document.querySelector(".rollMenu").style.display = "none"
		}
	
	useEffect(() => {
		
		// -----Fonction pour burger menu responsive écrans téléphones----

		const burgerMenu = document.querySelector(".burgerMenu");
		const rollMenu = document.querySelector(".rollMenu")
		const crossClose = document.querySelector(".crossClose")

		
	

		burgerMenu.addEventListener("click", (event) => {

			rollMenu.style.display = "flex"

			burgerMenu.style.zIndex = "100 !important"
			rollMenu.style.zIndex = "100 !important"

		})

		crossClose.addEventListener("click", (event) => {

			rollMenu.style.display = "none"
			if (window.width > 578) {
				burgerMenu.style.left = "80px"
			}
			if (window.width <= 578) {
				burgerMenu.style.left = "30px !important"
			}
		})
	});

	return (
		<>
			<header>
				<div className="header">
					<Link to="/">
						<img className="headerLogo animate__animated animate__pulse"
							src="/icns/vr-vibes-logo.png"
							alt="logo vrvibes entreprise d'animation en réalité virtuelle sur paris">
						</img>
					</Link>
					<Link to="/accueil_entreprise" className="itemsNav animate__animated animate__fadeInUp" >Animation VR pour Entreprise</Link>
					<Link to="/accueil_prive" className="itemsNav animate__animated animate__fadeInUp">Animation VR pour Événement Privé</Link>
					<Link to="/productions-VR" className="itemsNav animate__animated animate__fadeInUp">Productions VR</Link>
					<Link to="/contact" className="contactButton">Contact</Link>
					<img src="/icns/burger-menu-white.svg" className="burgerMenu" />
					<div className="rollMenu">
						<ul className="listRollMenu">
							<img className="crossClose" src="/icns/close-button-white.svg" />
							<Link className="linksRollMenu" to="/" ><li> Accueil </li></Link>
							<Link className="linksRollMenu" to="/accueil_entreprise"><li> Animation VR pour Entreprise </li></Link>
							<Link className="linksRollMenu" to="/accueil_prive"><li> Animation VR pour Événements Privés </li></Link>
							<Link className="linksRollMenu" to="/productions-VR"><li> Productions VR </li>
							</Link>
							<Link className="linksRollMenu" to="/vrvibes-catalogue-jeux-vr"><li> Sélection Jeux VR </li></Link>
							<Link className="linksRollMenu" to="/contact"><li> Contact </li></Link>
						</ul>
					</div>
				</div>
			</header>

			<section>
				<Outlet />
			</section>

			<footer>
				<img className="friseGreenPastel" src="/img/vrvibes-frise-pastel.png" alt="" />
				<img className="friseGreenPastel" src="/img/vrvibes-frise-green-pastel.png" alt="" />
				<img className="friseFooter" src="/img/vrvibes-frise-footer.png" alt="" />
				<div className="footer">
					<div className="sectionScrollTop">
						<img className="scrollTop" src="/icns/scroll-to-top.svg" onClick={(() => window.scrollTo(0, 0))} />
					</div>
					<div className="footerDiv01">
						{/* <p>Plan du site</p> */}
						<Link className="footerLinks" to="/" onClick={closeRollMenu}><p>Accueil</p>
						</Link>
						<Link className="footerLinks" to="/accueil_entreprise"><p>VR-Vibes pour les événements d'entreprises</p>
						</Link>
						<Link className="footerLinks" to="/accueil_prive"><p>VR-Vibes pour les événements privés</p></Link>
					</div>
					<div className="footerDiv02">
						{/* <p>Plan du site</p> */}
						
						<Link className="footerLinks" to="/vrvibes-catalogue-jeux-vr"><p>Sélection Jeux VR</p></Link>
						<Link className="footerLinks" to="/vrvibes-catalogue-jeux-vr"><p>Productions VR</p></Link>
						<Link className="footerLinks" to="/vrvibes-catalogue-jeux-vr"><p>Actus</p></Link>
						{/* <p>Actus</p> */}
					</div>

					<div className="footerDiv03">
						<Link className="footerLinks" to="/contact"><p>Contact</p></Link>
						<p>FAQ</p>
						<Link className="footerLinks" to="/CGV">
							<p>CGU - CGV - Mentions légales</p>
						</Link>
					</div>

				</div>
			</footer>
		</>
	);
}

export default Template;
