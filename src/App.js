import { Route, Routes } from "react-router-dom";
// import "./utils/style/base.scss";
import Home from "./pages/pageHome/index.jsx";
import HomeEntreprise from "./pages/home.entreprise/home.entreprise.jsx";
import HomePrive from "./pages/home.prive/home.prive.jsx";
import Template from "./components/template";
import FormulairePrive from "./pages/page.formulaire.prive/page.formulaire.prive.jsx";
import FormulaireEntreprise from "./pages/page.formulaire.entreprise/page.formulaire.entreprise.jsx";
import ConfirmationEnvoiFormulaire from "./pages/confirmation.envoi.formulaire/confirmation.envoi.formulaire.jsx";
import CGU from "./pages/CGU.CGV.mentions.legales/cgu.cgv.mentions.legales.jsx";
import Contact from "./pages/contact/contact.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="/AccueilEntreprise" index element={<HomeEntreprise />} />
        <Route path="/AccueilPrive" index element={<HomePrive />} />
        <Route path="/FormulairePrive" index element={<FormulairePrive />} />
        <Route path="/FormulaireEntreprise" index element={<FormulaireEntreprise />} />
        <Route
          path="/ConfirmationEnvoiFormulaire"
          index
          element={<ConfirmationEnvoiFormulaire />}
        />
        <Route path="/CGU" index element={<CGU />} />
        <Route path="/Contact" index element={<Contact />} />
      </Route>
    </Routes>
  );
}
export default App;
