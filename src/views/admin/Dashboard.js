import React from "react";

// components
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardStats from "components/Cards/CardStats.js";

export default function Dashboard() {
  return (
    <>
      
      {/* Section 2: Graphiques principaux */}
      <div className="flex flex-wrap mb-8">
        <div className="w-full xl:w-8/12 mb-6 xl:mb-0 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border border-gray-100">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h6 className="uppercase text-blueGray-500 mb-1 text-xs font-semibold">
                    Évolution mensuelle
                  </h6>
                  <h2 className="text-blueGray-800 text-xl font-semibold">
                    Évolution des Consultations par Mois
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 flex-auto">
              <CardLineChart />
            </div>
          </div>
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border border-gray-100">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h6 className="uppercase text-blueGray-500 mb-1 text-xs font-semibold">
                    Répartition par catégorie
                  </h6>
                  <h2 className="text-blueGray-800 text-xl font-semibold">
                    Types de Diabète
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 flex-auto">
              <CardBarChart />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Données détaillées */}
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-6 xl:mb-0 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                    Activité récente
                  </h6>
                  <h2 className="text-blueGray-700 text-xl font-semibold">
                    Dernières Consultations
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 flex-auto">
              <CardPageVisits />
            </div>
          </div>
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                    Statistiques
                  </h6>
                  <h2 className="text-blueGray-700 text-xl font-semibold">
                    Sources des Patients
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 flex-auto">
              <CardSocialTraffic />
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Alertes et notifications */}
      <div className="flex flex-wrap mt-8">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-yellow-50 border border-yellow-200">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <div className="flex items-center">
                    <i className="fas fa-bell text-yellow-600 text-xl mr-3"></i>
                    <h3 className="font-semibold text-base text-yellow-800">
                      Alertes Importantes
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto px-4 pb-4">
              <div className="text-sm text-yellow-700">
                <div className="flex items-center mb-2">
                  <i className="fas fa-exclamation-circle mr-2"></i>
                  <span>3 patients nécessitent une attention urgente</span>
                </div>
                <div className="flex items-center mb-2">
                  <i className="fas fa-vial mr-2"></i>
                  <span>5 résultats d'analyses en attente de validation</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-calendar-times mr-2"></i>
                  <span>2 rendez-vous à confirmer pour demain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}