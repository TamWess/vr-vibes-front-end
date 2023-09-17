import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/pageHome/index.jsx";
import HomeEntreprise from "./pages/home.entreprise/home.entreprise.jsx";
import HomePrive from "./pages/home.prive/home.prive.jsx";
import Template from "./components/template";
import FormulairePrive from "./pages/page.formulaire.prive/page.formulaire.prive.jsx";
import FormulaireEntreprise from "./pages/page.formulaire.entreprise/page.formulaire.entreprise.jsx";
import ConfirmationEnvoiFormulaire from "./pages/confirmation.envoi.formulaire/confirmation.envoi.formulaire.jsx";
import CGV from "./pages/CGU.CGV.mentions.legales/cgu.cgv.mentions.legales.jsx";
import Contact from "./pages/contact/contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "accueil_entreprise",
        element: <HomeEntreprise />,
      },
      {
        path: "accueil_prive",
        element: <HomePrive />,
      },
      {
        path: "formulaire_entreprise",
        element: <FormulaireEntreprise />,
      },
      {
        path: "formulaire_prive",
        element: <FormulairePrive />,
      },
      {
        path: "confirmation_envoi_formulaire",
        element: <ConfirmationEnvoiFormulaire />,
      },
      {
        path: "CGV",
        element: <CGV />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

router.subscribe((state) => {
  window.scrollTo(0, 0)
});

export default router