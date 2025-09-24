import React, { useState } from "react";

// Components
import CardStats from "components/Cards/CardStats.js";
import PatientTable from "components/Patient/PatientTable.js";
import PatientSearch from "components/Patient/PatientSearch.js";

export default function Patients() {
  const [searchFilters, setSearchFilters] = useState({
    name: "",
    ageRange: { min: 0, max: 100 },
    diabetesType: "all",
    status: "all"
  });

  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };

  return (
    <>
      {/* En-tête de la page */}
      <div className="flex flex-wrap mb-8">
        <div className="w-full px-4">
          <h1 className="text-3xl font-bold text-blueGray-700 mb-2">
            Gestion des Patients
          </h1>
          <p className="text-blueGray-500 text-lg">
            Gestion complète de votre patientèle diabétologique
          </p>
        </div>
      </div>

      {/* Statistiques rapides */}
      <div className="flex flex-wrap mb-8">
        <div className="w-full md:w-3/12 lg:w-3/12 xl:w-3/12 px-4 mb-6">
          <CardStats
            statSubtitle="TOTAL PATIENTS"
            statTitle="156"
            statArrow="up"
            statPercent="5.2"
            statPercentColor="text-emerald-500"
            statDescripiron="Depuis le mois dernier"
            statIconName="fas fa-user-injured"
            statIconColor="bg-blue-500"
          />
        </div>
        <div className="w-full md:w-3/12 lg:w-3/12 xl:w-3/12 px-4 mb-6">
          <CardStats
            statSubtitle="NOUVEAUX CE MOIS"
            statTitle="12"
            statArrow="up"
            statPercent="15.4"
            statPercentColor="text-emerald-500"
            statDescripiron="Nouveaux patients"
            statIconName="fas fa-user-plus"
            statIconColor="bg-green-500"
          />
        </div>
        <div className="w-full md:w-3/12 lg:w-3/12 xl:w-3/12 px-4 mb-6">
          <CardStats
            statSubtitle="RDV CETTE SEMAINE"
            statTitle="24"
            statArrow="up"
            statPercent="8.7"
            statPercentColor="text-emerald-500"
            statDescripiron="Rendez-vous programmés"
            statIconName="fas fa-calendar-check"
            statIconColor="bg-purple-500"
          />
        </div>
        <div className="w-full md:w-3/12 lg:w-3/12 xl:w-3/12 px-4 mb-6">
          <CardStats
            statSubtitle="URGENCES"
            statTitle="3"
            statArrow="down"
            statPercent="25"
            statPercentColor="text-red-500"
            statDescripiron="Cas urgents"
            statIconName="fas fa-exclamation-triangle"
            statIconColor="bg-red-500"
          />
        </div>
      </div>

      {/* Barre de recherche avancée */}
      <div className="mb-8">
        <PatientSearch onSearch={handleSearch} />
      </div>

      {/* Tableau des patients */}
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <PatientTable filters={searchFilters} />
        </div>
      </div>

      {/* Bouton d'action flottant */}
      <button className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
        <i className="fas fa-plus text-xl"></i>
      </button>
    </>
  );
}