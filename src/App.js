import { Route, Routes } from "react-router-dom";
// import "./utils/style/base.scss";
import Home from "./pages/pageHome/index.jsx";
import HomeEntreprise from "./pages/home.entreprise/home.entreprise.jsx";
import HomePrive from "./pages/home.prive/home.prive.jsx";
import Template from "./components/template";
import FormulairePrive from "./pages/page.formulaire.prive/page.formulaire.prive.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="/AccueilEntreprise" index element={<HomeEntreprise />} />
        <Route path="/AccueilPrive" index element={<HomePrive />} />
        <Route path="/FormulairePrive" index element={<FormulairePrive />} />
      </Route>
    </Routes>
  );
}
export default App;
