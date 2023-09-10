import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from "@react-google-maps/api";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "../../utils/style/libs/base.scss";
import "./style.scss";
import 'animate.css';



// Responsive App ip adress: http://192.168.8.123:3000/

function Template() {

	
	useEffect(() => {

		// Tentative changement d'animation logo nav au changement de width screen

		if (window.screen.width < 576) {
			document.getElementsByClassName("animate__pulse").className = "animate__tada";
		}

		// if(window.screen.width>768){
		// 	document.querySelector(".burgerMenu").style.display = "none"
		// 	console.log(window.screen.width);
		// }

		const burgerMenu = document.querySelector(".burgerMenu");
		const rollMenu = document.querySelector(".rollMenu")
		const crossClose = document.querySelector(".crossClose")

		burgerMenu.addEventListener("click", (event) => {

			rollMenu.style.display = "flex"
			burgerMenu.style.left = "800px"
			// burgerMenu = 
		})

		crossClose.addEventListener("click", (event) => {

			rollMenu.style.display = "none"
			burgerMenu.style.left = "80px"

			if (window.width > 578) {
				burgerMenu.style.left = "80px"
			}

			if (window.width <= 578) {
				burgerMenu.style.left = "30px !important"
			}
		})

		
		setTimeout(()=>{
			window.scrollTo(0, 0);
		}
		,500
		)
		
	});
	

	return (
		<>
			<header>
				<div className="header">
					<Link to="/">
						<img className="headerLogo animate__animated animate__pulse"
							src="/icns/vr-vibes-logo.png"
							alt="VR Vibes logo entreprise réalité virtuelle animation VR événement Paris ">
						</img>
					</Link>
					<Link to="AccueilEntreprise" className="itemsNav animate__animated animate__fadeInUp">Animation VR pour Entreprise</Link>
					<Link to="AccueilPrive" className="itemsNav animate__animated animate__fadeInUp">Animation VR pour Événement Privé</Link>
					<Link to="" className="itemsNav animate__animated animate__fadeInUp">Productions VR</Link>
					<Link to="" className="contactButton">Contact</Link>
					<img src="/icns/burger-menu-white.svg" className="burgerMenu" />
					<div className="rollMenu">
						<ul className="listRollMenu">
							<img className="crossClose" src="/icns/close-button-white.svg" />
							<Link className="linksRollMenu" to="AccueilEntreprise"><li> Animation VR pour Entreprise </li></Link>
							<Link className="linksRollMenu" to="AccueilFamille"><li> Animation VR pour Événements Familiaux </li></Link>
							<Link className="linksRollMenu" to=""><li> Productions VR </li>
							</Link>
							<Link className="linksRollMenu" to=""><li> Contact </li></Link>
						</ul>
					</div>
				</div>
			</header>

			<section>
				<Outlet />
			</section>
			<footer>
				<img className="friseGreenPastel" src="/img/frise-pastel.png" alt="" />
				<img className="friseGreenPastel" src="/img/frise-green-pastel.png" alt="" />
				<img className="friseFooter" src="/img/frise-footer.png" alt="" />
				<div className="footer">
					<div className="footerDiv01">
						<p>Mentions légales</p>
						<p>CGU</p>
						<p>CGV</p>
					</div>
					<div className="footerDiv02">
						<p>Plan du site</p>
						<p>Pour les entreprises</p>
						<p>Pour les événements familiaux</p>
						<p>Notre catalogue d'expériences VR</p>
						<p>Actus</p>
					</div>
					<div className="footerDiv03">
						<div className="footerDiv03Text">
							<p>VR Vibes en région parisienne</p>
						</div>
						<div className="locationLogo"></div>
						{/* <GoogleMap zoom={11} center={{ lat: 48.866667, lng: 2.333333 }} mapContainerClassName="mapContainerFooter"></GoogleMap> */}
					</div>
					<div className="footerDiv04">
						<p>Contact</p>
						<p>0ù nous trouver</p>
						<p>FAQ</p>
					</div>

					{/* Reseaux sociaux */}
					{/* <div className="footerDiv05">
            <img src="/icns/facebook.svg" alt="" />
            <img src="/icns/instagram.svg" alt="" />
            <img src="/icns/twitter.svg" alt="" />
          </div> */}

				</div>
			</footer>
		</>
	);
}

export default Template;
