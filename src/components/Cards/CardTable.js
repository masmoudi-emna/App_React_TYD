import React from "react";

export default function CardTable({ 
  color, 
  searchTerm, 
  patients, 
  onDeletePatient, 
  onViewDossier, // Ajoutez cette prop
  onEditPatient  // Ajoutez cette prop
}) {
  
  const filteredPatients = patients.filter(patient =>
    `${patient.nom} ${patient.prenom} ${patient.typeDiabete} ${patient.statut}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (statut) => {
    const statusConfig = {
      "Stable": "bg-green-100 text-green-800",
      "À surveiller": "bg-yellow-100 text-yellow-800",
      "Urgent": "bg-red-100 text-red-800",
      "Critique": "bg-purple-100 text-purple-800"
    };
    return statusConfig[statut] || "bg-gray-100 text-gray-800";
  };

  const getHbA1cColor = (hba1c) => {
    if (hba1c <= 6.5) return "text-green-600 font-semibold";
    if (hba1c <= 7.5) return "text-yellow-600 font-semibold";
    return "text-red-600 font-semibold";
  };

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Liste des Patients ({filteredPatients.length})
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Patient
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Type Diabète
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  HbA1c
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Dernière Consultation
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Statut
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient, index) => (
                <tr key={patient.id} className={index % 2 === 0 ? "bg-blueGray-50" : "bg-white"}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    <div>
                      <span className="font-bold text-blueGray-600">
                        {patient.nom} {patient.prenom}
                      </span>
                      <br />
                      <span className="text-blueGray-400 text-xs">
                        ID: {patient.id}
                      </span>
                    </div>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      patient.typeDiabete === "Type 1" 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-green-100 text-green-800"
                    }`}>
                      {patient.typeDiabete}
                    </span>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <span className={getHbA1cColor(patient.hba1c)}>
                      {patient.hba1c}%
                    </span>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {new Date(patient.derniereConsultation).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(patient.statut)}`}>
                      {patient.statut}
                    </span>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center space-x-2">
                      {/* Bouton Voir Dossier */}
                      <button
                        onClick={() => onViewDossier(patient.id)}
                        className="btn-dossier"
                        title="Voir dossier patient"
                      >
                        <i className="fas fa-folder-open"></i>
                        Dossier
                      </button>

                      {/* Bouton Modifier */}
                      <button
                        onClick={() => onEditPatient(patient.id)}
                        className="btn-modifier"
                        title="Modifier patient"
                      >
                        <i className="fas fa-edit"></i>
                        Modifier
                      </button>

                      {/* Bouton Supprimer */}
                      <button
                        onClick={() => onDeletePatient(patient.id)}
                        className="btn-supprimer"
                        title="Supprimer patient"
                      >
                        <i className="fas fa-trash"></i>
                        Supprimer
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredPatients.length === 0 && (
            <div className="text-center py-8">
              <i className="fas fa-users text-4xl text-blueGray-300 mb-2"></i>
              <p className="text-blueGray-500">Aucun patient trouvé</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}