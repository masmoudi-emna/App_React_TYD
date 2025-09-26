import React, { useState } from "react";
import { useHistory } from "react-router-dom"; 
import CardTableRendezVous from "components/Cards/CardTableRendezVous.js";

export default function RendezVous() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWeek, setSelectedWeek] = useState(new Date());
  const [activeFilter, setActiveFilter] = useState("all");
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

  // Filtrage des rendez-vous
  const filteredRendezVous = rendezVous.filter(rv => {
    const matchesSearch = searchTerm === "" || 
      rv.patientNom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rv.patientPrenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rv.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = activeFilter === "all" || 
      (activeFilter === "confirmed" && rv.statut === "Confirmé") ||
      (activeFilter === "pending" && rv.statut === "En attente") ||
      (activeFilter === "urgent" && rv.type === "Urgence") ||
      (activeFilter === "today" && rv.date === new Date().toISOString().split('T')[0]);
    
    return matchesSearch && matchesFilter;
  });

  const stats = {
    confirmed: rendezVous.filter(rv => rv.statut === "Confirmé").length,
    pending: rendezVous.filter(rv => rv.statut === "En attente").length,
    urgent: rendezVous.filter(rv => rv.type === "Urgence").length,
    today: rendezVous.filter(rv => rv.date === new Date().toISOString().split('T')[0]).length
  };

  const handleAddRendezVous = () => {
    history.push("/admin/ajouterrendezvous");
  };

  const handleEditRendezVous = (id) => {
    history.push(`/admin/modifierrendezvous/${id}`);
  };

  const handleDeleteRendezVous = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce rendez-vous ?")) {
      setRendezVous(rendezVous.filter(rv => rv.id !== id));
    }
  };

  const getWeekDates = (date) => {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay() + 1);
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
      {/* En-tête compact */}
      <div className="mb-6 pt-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 mt-10">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Gestion des Rendez-vous</h1>
          </div>
          
          <button
            onClick={handleAddRendezVous}
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg flex items-center whitespace-nowrap"
          >
            <i className="fas fa-calendar-plus mr-2"></i>
            Nouveau RDV
          </button>
        </div>
      </div>

      {/* Section combinée : Statistiques + Vue semaine */}
      <div className="flex flex-wrap mb-6">
        {/* Statistiques - Partie gauche */}
        <div className="w-full lg:w-8/12 px-4 mb-6 lg:mb-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 h-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Aperçu de la semaine</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { key: "confirmed", label: "Rendez-vous confirmés", icon: "calendar-check", color: "green", value: stats.confirmed },
                { key: "pending", label: "En attente de confirmation", icon: "clock", color: "yellow", value: stats.pending },
                { key: "urgent", label: "Consultations urgentes", icon: "exclamation-triangle", color: "red", value: stats.urgent },
                { key: "today", label: "RDV aujourd'hui", icon: "calendar-day", color: "blue", value: stats.today }
              ].map((stat) => (
                <div key={stat.key} className="flex items-center p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors duration-200">
                  <div className={`rounded-full bg-${stat.color}-100 p-2 mr-3`}>
                    <i className={`fas fa-${stat.icon} text-${stat.color}-600 text-lg`}></i>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vue semaine - Partie droite */}
        <div className="w-full lg:w-4/12 px-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Vue rapide</h3>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setSelectedWeek(new Date(selectedWeek.setDate(selectedWeek.getDate() - 7)))}
                  className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
                  title="Semaine précédente"
                >
                  <i className="fas fa-chevron-left text-gray-600 text-sm"></i>
                </button>
                <button
                  onClick={() => setSelectedWeek(new Date())}
                  className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded hover:bg-blue-100 transition-colors duration-200"
                >
                  Auj.
                </button>
                <button
                  onClick={() => setSelectedWeek(new Date(selectedWeek.setDate(selectedWeek.getDate() + 7)))}
                  className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
                  title="Semaine suivante"
                >
                  <i className="fas fa-chevron-right text-gray-600 text-sm"></i>
                </button>
              </div>
            </div>

            {/* Mini calendrier semaine */}
            <div className="space-y-2">
              {weekDates.map((date, index) => {
                const dayRendezVous = rendezVous.filter(rv => 
                  new Date(rv.date).toDateString() === date.toDateString()
                );
                
                return (
                  <div key={index} className={`flex items-center justify-between p-2 rounded-lg border transition-colors duration-200 ${
                    date.toDateString() === new Date().toDateString() 
                      ? "border-blue-300 bg-blue-50" 
                      : "border-gray-200 bg-gray-50"
                  }`}>
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        date.toDateString() === new Date().toDateString() 
                          ? "bg-blue-100 text-blue-700" 
                          : "bg-gray-100 text-gray-700"
                      }`}>
                        <span className="text-sm font-medium">{date.getDate()}</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">
                          {date.toLocaleDateString('fr-FR', { weekday: 'short' })}
                        </div>
                        <div className="text-xs text-gray-500">
                          {dayRendezVous.length} RDV
                        </div>
                      </div>
                    </div>
                    
                    {dayRendezVous.length > 0 && (
                      <div className="flex space-x-1">
                        {dayRendezVous.slice(0, 2).map((rv, rvIndex) => (
                          <div key={rvIndex} className={`w-2 h-2 rounded-full ${
                            rv.type === "Urgence" ? "bg-red-400" :
                            rv.statut === "Confirmé" ? "bg-green-400" :
                            "bg-yellow-400"
                          }`}></div>
                        ))}
                        {dayRendezVous.length > 2 && (
                          <span className="text-xs text-gray-400">+{dayRendezVous.length - 2}</span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Recherche et filtres */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
          <div className="flex-grow relative">
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher un patient, type de consultation..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {[
              { key: "all", label: "Tous", icon: "list" },
              { key: "confirmed", label: "Confirmés", icon: "check-circle" },
              { key: "pending", label: "En attente", icon: "clock" },
              { key: "urgent", label: "Urgences", icon: "exclamation-triangle" },
              { key: "today", label: "Aujourd'hui", icon: "calendar-day" }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  activeFilter === filter.key
                    ? "bg-purple-100 text-purple-700 border border-purple-200"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                <i className={`fas fa-${filter.icon} text-xs`}></i>
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tableau des rendez-vous */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <CardTableRendezVous 
          color="light" 
          searchTerm={searchTerm} 
          rendezVous={filteredRendezVous}
          onEditRendezVous={handleEditRendezVous}
          onDeleteRendezVous={handleDeleteRendezVous}
        />
      </div>
    </>
  );
}