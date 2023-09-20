import React from "react";
import "./reassurance.brands.scss";

function Reassurance() {

	return (
		<React.Fragment>
			<div className="reassuranceBrands">
				<div className="nosPartenaires">NOS PARTENAIRES</div>
				<div className="divLogoPartenaires">
					<img className="logoPartenaires" src="/icns/sanofi-logo.png" alt="logo SANOFI" />
				</div>
				<div className="divLogoPartenaires"><img className="logoPartenaires" src="/icns/ponticelli-logo.png" alt="logo PONTICELLI FRERES" /></div>
				<div className="divLogoPartenaires"><img className="logoPartenaires" src="/icns/partners-formation-logo.png" alt="logo PARTNERS FORMATION" /></div>
			</div>
		</React.Fragment>
	);
}

export default Reassurance;
