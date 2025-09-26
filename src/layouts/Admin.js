import React from "react";
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views
import Dashboard from "views/admin/Dashboard.js";

import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import Patients from "views/admin/Patients.js";

import Rendez from "views/admin/RendezVous.js";
import AjouterRendezVous from "views/admin/AjouterRendezVous.js";
import ModifierRendezVous from "views/admin/ModifierRendezVous.js";

export default function Admin() {
  const location = useLocation();
  
  // Afficher HeaderStats seulement sur le dashboard
  const showHeaderStats = location.pathname === "/admin/dashboard";

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        
        {/* HeaderStats seulement sur le dashboard */}
        {showHeaderStats && <HeaderStats />}
        
        <div className={`px-4 md:px-10 mx-auto w-full ${showHeaderStats ? '-m-24' : 'pt-8'}`}>
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/patients" exact component={Patients} />


            <Route path="/admin/RendezVous" exact component={Rendez} />
            <Route path="/admin/AjouterRendezVous" exact component={AjouterRendezVous} />
            <Route path="/admin/ModifierRendezVous" exact component={ModifierRendezVous} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}