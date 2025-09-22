import React from "react";

// components
import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header avec fond médical */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 md:pt-32 pb-32 pt-10">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Tableau de Bord <span className="text-blue-600">Médical</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-blueGray-600 text-lg font-light">
              Suivi personnalisé des patients diabétiques
            </p>
          </div>

          <div>
            {/* Cartes de statistiques médicales */}
            <div className="flex flex-wrap justify-center">
              {/* Carte 1: Patients totaux */}
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStats
                  statSubtitle="PATIENTS TOTAL"
                  statTitle="180"
                  statArrow="up"
                  statPercent="5.2"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Depuis le mois dernier" // Correction du nom de prop
                  statIconName="fas fa-users"
                  statIconColor="bg-purple-500"
                />
              </div>

              {/* Carte 2: RDV aujourd'hui */}
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStats
                  statSubtitle="RDV AUJOURD'HUI"
                  statTitle="8"
                  statArrow="up"
                  statPercent="14.3"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Par rapport à hier" // Correction du nom de prop
                  statIconName="fas fa-calendar-check"
                  statIconColor="bg-yellow-500"
                />
              </div>

              {/* Carte 3: Nouveaux patients */}
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStats
                  statSubtitle="NOUVEAUX PATIENTS"
                  statTitle="12"
                  statArrow="up"
                  statPercent="20"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Ce mois-ci" // Correction du nom de prop
                  statIconName="fas fa-user-plus"
                  statIconColor="bg-teal-500"
                />
              </div>

              {/* Carte 4: Urgences */}
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStats
                  statSubtitle="CAS URGENTS"
                  statTitle="3"
                  statArrow="down"
                  statPercent="40"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Baisse cette semaine" // Correction du nom de prop
                  statIconName="fas fa-exclamation-triangle"
                  statIconColor="bg-pink-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Élément décoratif en bas */}
        <div className="absolute bottom-0 w-full overflow-hidden">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
    </>
  );
}
