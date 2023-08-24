import React, { useEffect, useRef } from "react";
import "./reassurance.brands.scss";
// import "../../utils/style/libs/base.scss";

function Reassurance() {

	return (
		<React.Fragment>
			<div className="reassuranceBrands">
				<div className="nosPartenaires">NOS PARTENAIRES</div>
				<div className="divLogoPartenaires">
					<img className="logoPartenaires" src="/icns/sanofi-logo.png" alt="" />
				</div>
				<div className="divLogoPartenaires"><img className="logoPartenaires" src="/icns/ponticelli-logo.png" alt="" /></div>
				<div className="divLogoPartenaires"><img className="logoPartenaires" src="/icns/partners-formation-logo.png" alt="" /></div>
			</div>
		</React.Fragment>
	);
}

export default Reassurance;
