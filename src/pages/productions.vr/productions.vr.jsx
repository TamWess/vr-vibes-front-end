import React, { useEffect } from "react";
import "./productions.vr.scss"

import Reassurance from "../../components/reassurance/reassurance.brands/reassurance.brands";

function ProductionsVR() {

	useEffect(() => {


		// ? Fonction ne fonctionne pas
		// window.addEventListener('scroll', function () {
		// 	const eoleProjetJS = document.querySelector(".eoleProjet");
		// 	if (this.window.scrollY > 300) {
		// 		this.setTimeout(() => {
		// 			eoleProjetJS.style.clipPath = "polygon(0 15%, 100% 0%, 100% 85%, 0% 100%);";
		// 		},50
		// 		)
		// 	}
		// })
	});
	return (
		<>
			<div className="container">
				<h1 className="titleProductionsVR">
					Productions VR
				</h1>
				<div className="containerIdeeText">
				<h2 className="uneIdeeUnBesoin">
					Une idée? Un besoin? Nous créons votre application VR! 
				</h2>
				<p className="introTextProductionVR">VR Vibes, pionnier de l'innovation en réalité virtuelle, vous présente EOS VR, notre cellule de production d'application VR de pointe. Plongez dans l'avenir de la réalité virtuelle avec VR Vibes et transformez votre vision en une expérience immersive incomparable.</p>
				</div>
				

				<div className="eoleProjet">
					<div className="leftPart">
						<img className="logoSNCF" src="/icns/sncf-reseau-logo.png"></img>
						<img className="logoEole" src="/icns/eole-logo.png"></img>
						<h1 className="titleEole">
							Eole Centre de maintenance
						</h1>
						<p className="textEole">
							Dans le cadre de le prolongement la ligne E du RER parisien, il nous a été confiée la création d'un centre de maintenance en VR. <br />
							L'objectif? Permettre aux agens de maintenance SNCF de s'exercer sur une multitude de modules de formation. <br />
							Du technicien éléctrique au mécanicien,ce "métavers de formation" peut concerner tous les corps de métiers de la maintenance ferroviaire.
						</p>

					</div>
					<div className="video">
						<iframe className="videoEole" src="https://www.youtube.com/embed/kQX8qQ1joJA?si=SEyapGY9PA13MvsP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
					</div>
				</div>
				<div className="sanofiProjet">
					<div className="leftPartSanofi">
						<img className="logoSanofi" src="/icns/sanofi-logo.png"></img>
						<img className="logoPonticelli" src="/icns/ponticelli-logo.png"></img>
						<h1 className="titleSanofi">
							Scénario de sensibilisation
						</h1>
						<p className="textSanofi">
							PONTICELLI FRERES prenant à coeur la sécurité de ses agents a fait appel au services de EOS VR, notre cellule de productions VR, pour créer un programme de sensibilisation aux risques quant à la maintenance des pompes industrielles chez SANOFI. <br />
							Une véritable réussite et des agents conquis par l'efficacité de cette solution VR.
						</p>
					</div>
					<div className="video">
						<iframe className="videoSanofi" src="https://www.youtube.com/embed/e38MpRtMTsc?si=8eASIp24RTBNh9Xo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
					</div>
				</div>
				<div className="partnersProjet">
					<div className="leftPartPartners">
						<img className="logoPartners" src="/icns/partners-formation-logo.png" />
						<h1 className="titlePartners">
							Simulation d'examen VTC
						</h1>
						<p className="textPartners">
							Quoi de mieux pour entrainer des aspirants à l'obtention d'un examen que de leur faire vivre?<br />
							En partenariat avec PARTNERS FORMATION, nous avons développé une application VR mettant les candidats à l'examen taxi/VTC en immersion totale dans l'épreuve. <br />
							Au programme: vérification de l'état du véhicule, programmation du taximètre, questions aléatoirement posées sur les lieux importants parisiens... Une véritable épreuve avant l'épreuve pour mieux se projeter au jour J et évacuer l'anxiété de l'inconnu.
						</p>
					</div>
					<div className="video">
						<iframe className="videoPartners" src="https://www.youtube.com/embed/d75_dHVMbfg?si=II7sANdri3T459JX" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
					</div>
				</div>
				{/* <div className="retailProjet">
					<div className="leftPartRetail">
						<h1 className="titleRetail">
							Eole Centre de maintenance
						</h1>
						<p className="textRetail">
							Dans le cadre de le prolongement la ligne E du RER parisien, il nous a été confiée la création d'un centre de maintenance en VR. <br />
							L'objectif? Permettre aux agens de maintenance SNCF de s'exercer sur une multitude de modules de formation. <br />
							Du technicien éléctrique au mécanicien,ce "métavers de formation" peut concerner tous les corps de métiers de la maintenance ferroviaire.
						</p>

					</div>
					<div className="video">
						<iframe className="videoRetail" src="https://www.youtube.com/embed/zT5iA9YOUwY?si=ZBYTUuLOw_F3sva4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
					</div>
				</div> */}
			</div>

		</>
	)
}

export default ProductionsVR