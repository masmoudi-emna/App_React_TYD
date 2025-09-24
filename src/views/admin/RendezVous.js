import React, { useState } from "react";
import { useHistory } from "react-router-dom"; 

// components
import CardTableRendezVous from "components/Cards/CardTableRendezVous.js";

export default function RendezVous() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWeek, setSelectedWeek] = useState(new Date());
  const history = useHistory();
  
  const [rendezVous, setRendezVous] = useState([
    {
      id: 1,
      patientId: 1,
      patientNom: "Dupont",
      patientPrenom: "Marie",
      date: "2024-01-22",
      heure: "09:00",
      duree: 30,
      type: "Consultation de suivi",
      statut: "Confirmé",
      notes: "Contrôle HbA1c"
    },
    {
      id: 2,
      patientId: 2,
      patientNom: "Martin",
      patientPrenom: "Pierre",
      date: "2024-01-22",
      heure: "10:30",
      duree: 45,
      type: "Nouvelle consultation",
      statut: "Confirmé",
      notes: "Éducation thérapeutique"
    },
    {
      id: 3,
      patientId: 3,
      patientNom: "Bernard",
      patientPrenom: "Sophie",
      date: "2024-01-23",
      heure: "14:00",
      duree: 30,
      type: "Urgence",
      statut: "En attente",
      notes: "Problème d'ajustement insuline"
    }
  ]);

  const handleAddRendezVous = () => {
    history("/admin/ajouter-rendezvous");
  };

  const handleEditRendezVous = (rendezVousId) => {
    history(`/admin/modifier-rendezvous/${rendezVousId}`);
  };

  const handleDeleteRendezVous = (rendezVousId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce rendez-vous ?")) {
      setRendezVous(rendezVous.filter(rv => rv.id !== rendezVousId));
    }
  };

  // Fonction pour obtenir les dates de la semaine sélectionnée
  const getWeekDates = (date) => {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay() + 1); // Lundi
    const dates = [];
    
    for (let i = 0; i < 7; i++) {
      const current = new Date(start);
      current.setDate(start.getDate() + i);
      dates.push(current);
    }
    return dates;
  };

  const weekDates = getWeekDates(selectedWeek);

  return (
    <>
      {/* En-tête de la page */}
      <div className="flex flex-wrap mb-8 pt-8">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-blueGray-700">
                    Gestion des Rendez-vous
                  </h1>
                  <p className="text-blueGray-400 mt-2">
                    Planifiez et gérez votre agenda médical
                  </p>
                </div>
                
                {/* Boutons d'action */}
                <div className="flex space-x-4">
                  <button
                    onClick={handleAddRendezVous}
                    className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center"
                  >
                    <i className="fas fa-calendar-plus mr-2"></i>
                    Nouveau Rendez-vous
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques rapides */}
      <div className="flex flex-wrap mb-8">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Carte Statistique */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
              <div className="flex items-center">
                <div className="rounded-full bg-green-100 p-3">
                  <i className="fas fa-calendar-check text-green-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Confirmés</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {rendezVous.filter(rv => rv.statut === "Confirmé").length}
                  </p>
                </div>
              </div>
            </div>

            {/* Carte Statistique */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
              <div className="flex items-center">
                <div className="rounded-full bg-yellow-100 p-3">
                  <i className="fas fa-clock text-yellow-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">En attente</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {rendezVous.filter(rv => rv.statut === "En attente").length}
                  </p>
                </div>
              </div>
            </div>

            {/* Carte Statistique */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 p-3">
                  <i className="fas fa-user-md text-blue-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Cette semaine</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {rendezVous.filter(rv => {
                      const rvDate = new Date(rv.date);
                      const today = new Date();
                      const weekStart = new Date(today);
                      weekStart.setDate(today.getDate() - today.getDay());
                      return rvDate >= weekStart;
                    }).length}
                  </p>
                </div>
              </div>
            </div>

            {/* Carte Statistique */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
              <div className="flex items-center">
                <div className="rounded-full bg-red-100 p-3">
                  <i className="fas fa-exclamation-triangle text-red-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Urgences</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {rendezVous.filter(rv => rv.type === "Urgence").length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sélecteur de semaine */}
      <div className="flex flex-wrap mb-8">
        <div className="w-full px-4">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-blueGray-700">
                Semaine du {weekDates[0].toLocaleDateString('fr-FR')} au {weekDates[6].toLocaleDateString('fr-FR')}
              </h3>
              
              <div className="flex space-x-2 mt-4 md:mt-0">
                <button
                  onClick={() => {
                    const prevWeek = new Date(selectedWeek);
                    prevWeek.setDate(prevWeek.getDate() - 7);
                    setSelectedWeek(prevWeek);
                  }}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <i className="fas fa-chevron-left mr-2"></i>Semaine précédente
                </button>
                
                <button
                  onClick={() => setSelectedWeek(new Date())}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Cette semaine
                </button>
                
                <button
                  onClick={() => {
                    const nextWeek = new Date(selectedWeek);
                    nextWeek.setDate(nextWeek.getDate() + 7);
                    setSelectedWeek(nextWeek);
                  }}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Semaine suivante<i className="fas fa-chevron-right ml-2"></i>
                </button>
              </div>
            </div>

            {/* Vue semaine - Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {weekDates.map((date, index) => {
                const dayRendezVous = rendezVous.filter(rv => {
                  const rvDate = new Date(rv.date);
                  return rvDate.toDateString() === date.toDateString();
                });
                
                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className={`text-center font-semibold mb-3 ${
                      date.toDateString() === new Date().toDateString() 
                        ? "text-blue-600 bg-blue-100 py-1 rounded" 
                        : "text-gray-700"
                    }`}>
                      <div>{date.toLocaleDateString('fr-FR', { weekday: 'short' })}</div>
                      <div>{date.getDate()} {date.toLocaleDateString('fr-FR', { month: 'short' })}</div>
                    </div>
                    
                    <div className="space-y-2">
                      {dayRendezVous.length === 0 ? (
                        <div className="text-center text-gray-400 text-sm py-4">
                          <i className="fas fa-calendar-times mb-1 block"></i>
                          Aucun rendez-vous
                        </div>
                      ) : (
                        dayRendezVous.map(rv => (
                          <div key={rv.id} className={`p-2 rounded text-xs ${
                            rv.type === "Urgence" ? "bg-red-100 border-l-4 border-red-500" :
                            rv.statut === "Confirmé" ? "bg-green-100 border-l-4 border-green-500" :
                            "bg-yellow-100 border-l-4 border-yellow-500"
                          }`}>
                            <div className="font-semibold">{rv.heure}</div>
                            <div>{rv.patientPrenom} {rv.patientNom}</div>
                            <div className="text-gray-600 truncate">{rv.type}</div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="flex flex-wrap mb-8">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border border-gray-100">
            <div className="rounded-t mb-0 px-6 py-4 bg-purple-50 border-b border-purple-100">
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-blueGray-700">
                    Recherche de Rendez-vous
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Rechercher par patient, type, statut..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
                  />
                </div>
                <div className="flex space-x-2">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                    <i className="fas fa-search mr-2"></i>
                    Rechercher
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors duration-200">
                    <i className="fas fa-filter mr-2"></i>
                    Filtres
                  </button>
                </div>
              </div>
              
              {/* Filtres rapides */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Tous les rendez-vous
                </button>
                <button className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Confirmés
                </button>
                <button className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  En attente
                </button>
                <button className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Urgences
                </button>
                <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Aujourd'hui
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tableau des rendez-vous */}
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableRendezVous 
            color="light" 
            searchTerm={searchTerm} 
            rendezVous={rendezVous}
            onEditRendezVous={handleEditRendezVous}
            onDeleteRendezVous={handleDeleteRendezVous}
          />
        </div>
      </div>
    </>
  );
}