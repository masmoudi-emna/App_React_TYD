import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Ajoutez cette importation
import CardTable from "components/Cards/CardTable.js";

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory(); // Ajoutez cette ligne
  
  const [patients, setPatients] = useState([
    {
      id: 1,
      nom: "Dupont",
      prenom: "Marie",
      typeDiabete: "Type 2",
      hba1c: 6.8,
      derniereConsultation: "2024-01-15",
      statut: "Stable"
    },
    {
      id: 2,
      nom: "Martin",
      prenom: "Pierre",
      typeDiabete: "Type 1",
      hba1c: 7.5,
      derniereConsultation: "2024-01-10",
      statut: "À surveiller"
    }
  ]);

  const handleAddPatient = () => {
    console.log("Ouvrir formulaire d'ajout patient");
  };

  const handleDeletePatient = (patientId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce patient ?")) {
      setPatients(patients.filter(patient => patient.id !== patientId));
    }
  };

  // Ajoutez cette fonction pour voir le dossier
  const handleViewDossier = (patientId) => {
    history.push(`/admin/VoirDossier/${patientId}`);
  };

  // Ajoutez cette fonction pour modifier le patient
  const handleEditPatient = (patientId) => {
    console.log("Modifier patient:", patientId);
    // Vous pouvez rediriger vers une page de modification si nécessaire
    // history.push(`/admin/modifier-patient/${patientId}`);
  };

  return (
    <>
      {/* Injection CSS pour les nouveaux styles */}
      <style>
        {`
          .btn-dossier {
            background: linear-gradient(135deg, #8b5cf6, #7c3aed);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 0.8rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .btn-dossier:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
          }
          .btn-modifier {
            background: linear-gradient(135deg, #f59e0b, #d97706);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 0.8rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .btn-modifier:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
          }
          .btn-supprimer {
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 0.8rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .btn-supprimer:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
          }
        `}
      </style>

      {/* En-tête de la page */}
      <div className="flex flex-wrap mb-8 pt-8">
        <div className="w-full px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-blueGray-700 mb-2">
                Gestion des Patients
              </h1>
              <p className="text-blueGray-400">
                Gérez votre liste de patients diabétologiques
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de recherche */}
      <div className="flex flex-wrap mb-8">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border border-gray-100">
            <div className="rounded-t mb-0 px-6 py-4 bg-blue-50 border-b border-blue-100">
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-blueGray-700">
                    Recherche de Patients
                  </h3>
                </div>
                <button
                  onClick={handleAddPatient}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center"
                >
                  <i className="fas fa-plus-circle mr-2"></i>
                  Ajouter un Patient
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Rechercher par nom, type de diabète, statut..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  />
                </div>
                <div className="flex space-x-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
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
                <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Tous les patients
                </button>
                <button className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Diabète Type 2
                </button>
                <button className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Cas urgents
                </button>
                <button className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Rendez-vous cette semaine
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tableau des patients */}
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable 
            color="light" 
            searchTerm={searchTerm} 
            patients={patients}
            onDeletePatient={handleDeletePatient}
            onViewDossier={handleViewDossier} // Ajoutez cette prop
            onEditPatient={handleEditPatient} // Ajoutez cette prop
          />
        </div>
      </div>
    </>
  );
}