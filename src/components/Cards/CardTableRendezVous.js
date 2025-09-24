import React from "react";

export default function CardTableRendezVous({ color, searchTerm, rendezVous, onEditRendezVous, onDeleteRendezVous }) {
  
  const filteredRendezVous = rendezVous.filter(rv =>
    `${rv.patientNom} ${rv.patientPrenom} ${rv.type} ${rv.statut} ${rv.notes}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (statut) => {
    const statusConfig = {
      "Confirmé": "bg-green-100 text-green-800",
      "En attente": "bg-yellow-100 text-yellow-800",
      "Annulé": "bg-red-100 text-red-800",
      "Reporté": "bg-blue-100 text-blue-800"
    };
    return statusConfig[statut] || "bg-gray-100 text-gray-800";
  };

  const getTypeBadge = (type) => {
    const typeConfig = {
      "Urgence": "bg-red-100 text-red-800",
      "Consultation de suivi": "bg-green-100 text-green-800",
      "Nouvelle consultation": "bg-blue-100 text-blue-800",
      "Éducation thérapeutique": "bg-purple-100 text-purple-800"
    };
    return typeConfig[type] || "bg-gray-100 text-gray-800";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
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
                Liste des Rendez-vous ({filteredRendezVous.length})
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Date & Heure
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Patient
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Type
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Durée
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Statut
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Notes
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRendezVous.map((rv, index) => (
                <tr key={rv.id} className={index % 2 === 0 ? "bg-blueGray-50" : "bg-white"}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    <div>
                      <span className="font-bold text-blueGray-600">
                        {formatDate(rv.date)}
                      </span>
                      <br />
                      <span className="text-blueGray-400">
                        {rv.heure} ({rv.duree} min)
                      </span>
                    </div>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="font-semibold text-blueGray-600">
                      {rv.patientPrenom} {rv.patientNom}
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeBadge(rv.type)}`}>
                      {rv.type}
                    </span>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {rv.duree} minutes
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(rv.statut)}`}>
                      {rv.statut}
                    </span>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
                    <div className="max-w-xs truncate" title={rv.notes}>
                      {rv.notes}
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => console.log("Voir détails", rv.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors duration-200"
                        title="Voir détails"
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                      <button
                        onClick={() => onEditRendezVous(rv.id)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg transition-colors duration-200"
                        title="Modifier"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => onDeleteRendezVous(rv.id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors duration-200"
                        title="Supprimer"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredRendezVous.length === 0 && (
            <div className="text-center py-8">
              <i className="fas fa-calendar-times text-4xl text-blueGray-300 mb-2"></i>
              <p className="text-blueGray-500">Aucun rendez-vous trouvé</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}