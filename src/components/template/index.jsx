import React, { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../utils/style/libs/base.scss";
import "./style.scss";
import 'animate.css';


// Responsive App ip adress: http://192.168.8.123:3000/

function Template() {

	const rollMenuRef = useRef (null)
	const crossCloseRef = useRef (null)
	const burgerMenuRef = useRef (null)

	function closeRollMenu() {
		document.querySelector(".rollMenu").style.display = "none"
	}

	useEffect(() => {

		// -----Fonction pour burger menu responsive écrans téléphones----

		function closeRollMenu (){
			if (!rollMenuRef.current){
				return
			}
			rollMenuRef.current.style.display = "none"
		}

		burgerMenuRef.current.addEventListener("click", (event) => {
			if (!burgerMenuRef.current) {
				return
			  }
			  if (!rollMenuRef.current) {
				return
			  }
			burgerMenuRef.current.style.zIndex = "100 !important"
			rollMenuRef.current.style.display = "flex"
			rollMenuRef.current.style.zIndex = "100 !important"
		})

		crossCloseRef.current.addEventListener("click", (event) => {

			rollMenuRef.current.style.display = "none"
			if (window.width > 578) {
				if (!burgerMenuRef.current) {
					return
				  }
				burgerMenuRef.current.style.left = "80px"
				burgerMenuRef.current.style.left = "30px !important"
			}
		})
	});

	return (
		<>
			<header>
				<div className="header">
					<Link to="/">
						<img
							className="headerLogo animate__animated animate__pulse"
							src="/icns/vr-vibes-logo.png"
							alt="logo vrvibes entreprise d'animation en réalité virtuelle sur paris"
						/>
					</Link>
					<div className="itemContainer">
						<div className="containerCenter">
							<Link to="" className="linkDropMenu" >
								Animations VR
								<img className="unfoldLogo" src="icns/vrvibes-unfold.svg" />
							</Link>
							<div className="dropdownMenu backgroundGradient">
								<Link to="/accueil_entreprise" className="underLinkDropMenu ">Pour Événement <br /> d'Entreprise</Link>
								<div className="lineDropdown" />

								<Link to="/accueil_prive" className="underLinkDropMenu  ">Pour Événement <br /> Privé</Link>
							</div>
						</div>

						<Link to="/productions-VR" className="containerCenter linkDropMenu ">Productions VR</Link>


						<Link to="/contact" className="contactButton contactContainer">Contact</Link>
					</div>

					<img src="/icns/burger-menu-white.svg" className="burgerMenu" ref={burgerMenuRef} />
					<div className="rollMenu" ref={rollMenuRef}>
						<ul className="listRollMenu">
							<img className="crossClose" ref={crossCloseRef} src="/icns/close-button-white.svg" />
							<Link className="linksRollMenu" to="/" onClick={closeRollMenu}><li> Accueil </li></Link>
							<Link className="linksRollMenu" to="/accueil_entreprise" onClick={closeRollMenu}><li> Animation VR pour Entreprise </li></Link>
							<Link className="linksRollMenu" to="/accueil_prive" onClick={closeRollMenu}><li> Animation VR pour Événements Privés </li></Link>
							<Link className="linksRollMenu" to="/productions-VR" onClick={closeRollMenu}><li> Productions VR </li>
							</Link>
							<Link className="linksRollMenu" to="/vrvibes-catalogue-jeux-vr" onClick={closeRollMenu}><li> Sélection Jeux VR </li></Link>
							<Link className="linksRollMenu" to="/contact" onClick={closeRollMenu}><li> Contact </li></Link>
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
						<div className="footerLinks" to="/" onClick={closeRollMenu}>Accueil
						</div>
						<Link className="footerLinks" to="/accueil_entreprise">VR-Vibes pour<br /> les événements <br />d'entreprises
						</Link>
						<Link className="footerLinks" to="/accueil_prive">VR-Vibes pour les<br /> événements privés</Link>
					</div>
					<div className="line" />
					<div className="footerDiv02">
						{/* <p>Plan du site</p> */}

						<Link className="footerLinks" to="/vrvibes-catalogue-jeux-vr">Sélection Jeux VR</Link>
						<Link className="footerLinks" to="/productions-VR">Productions VR</Link>
						<Link className="footerLinks" to="">Actus</Link>
						{/* <p>Actus</p> */}
					</div>
					<div className="line" />

					<div className="footerDiv03">
						<Link className="footerLinks" to="/contact">Contact</Link>
						<Link className="footerLinks" to="">FAQ</Link>
						<Link className="footerLinks" to="/CGV">
							CGU - CGV - <br /> Mentions légales
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Template;
