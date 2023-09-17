import { ScrollRestoration } from "react-router-dom";

// import "./utils/style/base.scss";

function App() {
  return (
    <ScrollRestoration />
    // Old school
    // <Routes>
    //   <Route path="/" element={<Template />}>
    //     <Route index element={<Home />} />
    //     <Route path="/accueil_entreprise" index element={<HomeEntreprise />} />
    //     <Route path="/accueil_prive" index element={<HomePrive />} />
    //     <Route path="/formulaire_entreprise" index element={<FormulaireEntreprise />} />
    //     <Route path="/formulaire_prive" index element={<FormulairePrive />} />
    //     <Route
    //       path="/confirmation_envoi_formulaire"
    //       index
    //       element={<ConfirmationEnvoiFormulaire />}
    //     />
    //     <Route path="/CGV" index element={<CGV />} />
    //     <Route path="/contact" index element={<Contact />} />
    //   </Route>
    // </Routes>
  );
}
export default App;
