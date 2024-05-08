import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './components/Auth/AuthContext';
import Home from './components/Home';

import Dashboard from "./components/pages/Stand/Dashboard_Stand";
import Add_Stand from "./components/pages/SousAdmin/AddStand";
import AddZem from "./components/pages/Stand/AddZem";
import TrajetForm from "./components/pages/Stand/ZemTrajet";
import ModifierZem from "./components/pages/Stand/modifierZem";
import ZemForm from "./components/pages/Stand/ZemForm";
import ZemListes from "./components/pages/Stand/ZemListes";
import Dashboard_Admin from "./components/pages/Admin/Dashboard_Admin";
import Dashboard_SousAdmin from "./components/pages/SousAdmin/Dashboard_sousAdmin"; // Assurez-vous que le chemin est correct
import AddSoAdmin from "./components/pages/Admin/Add_SouAdmin";
import ModifierSousAdmin from "./components/pages/Admin/modifierSousAdmin";
import Dashboard_Zem from "./components/pages/Zem/Dashboard_Zem";
import Portefeuille from "./components/pages/Stand/Portefeuille";
import Contact from "./components/Contact";
import MAP from "./components/Map";
import MAP_TWO from "./components/Map_two";
import URegistrationForm from "./components/UserForms/Register";
import DRegistrationForm from "./components/Auth/Register";
import ULoginForm from "./components/UserForms/login";
import DLoginForm from "./components/Auth/login";
import Profil from "./components/pages/Admin/profil";
import AddFonctionPage from "./components/pages/Admin/add_fonction";
import AddModulepage from "./components/pages/Admin/mod";
import AddTypepage from "./components/pages/Admin/type";

import AddModuleForm from './components/pages/Admin/add_module';
import AddFonctionnaliteForm from './components/pages/Admin/fonction';
import AddTypeUtilisateurForm from './components/pages/Admin/add_typeUser';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inscription" element={<URegistrationForm />} />
          <Route path="/connecter" element={<ULoginForm />} />
          
          <Route path="/Stand" element={<Dashboard />} />
          <Route path="/Admin" element={<Dashboard_Admin />} />
          <Route path="/ZemListes" element={<ZemListes />} />
          <Route path="/SousAdmin" element={<Dashboard_SousAdmin />} />
          <Route path="/AddSousAdmin" element={<AddSoAdmin />} />
          <Route path="/ModifierSousAdmin" element={<ModifierSousAdmin />} />
          <Route path="/AddStand" element={<Add_Stand />} />
          <Route path="/ModifierZem" element={<ModifierZem />} />
          <Route path="/AddZem" element={<AddZem />} />
          <Route path="/Trajet" element={<TrajetForm/>} />
          <Route path="/ZemForm" element={<ZemForm />} />
          <Route path="/Zem" element={<Dashboard_Zem />} />
          <Route path="/Portefeuille" element={<Portefeuille />} />
          <Route path="/fonction" element={<AddFonctionPage/>} />
          <Route path="/addfonction" element={<AddFonctionnaliteForm/>} />
          <Route path="/addModule" element={<AddModuleForm/>} />
          <Route path="/addUserType" element={<AddTypeUtilisateurForm/>} />
          <Route path="/mod" element={<AddModulepage/>} />
          <Route path="/type" element={<AddTypepage/>} />


          <Route path="/contact" element={<Contact />} />
          <Route path="/COURSE" element={<MAP />} />
          <Route path="/DELIVER" element={<MAP_TWO />} />
          <Route path="/profilAdmin" element={<Profil/>} />
          <Route path="/transporter" element={<DLoginForm />} />
          <Route path="/DriverInscription" element={<DRegistrationForm />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
