import React from "react";

export default function CardTableRendezVous({ color, searchTerm, rendezVous, onEditRendezVous, onDeleteRendezVous }) {
  return (
    <>
      <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " + (color === "light" ? "bg-white" : "bg-blueGray-700")}>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className={"font-semibold text-lg " + (color === "light" ? "text-blueGray-700" : "text-white")}>
                Liste des Rendez-vous
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")}>
                  Patient
                </th>
                <th className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")}>
                  Date & Heure
                </th>
                <th className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")}>
                  Type
                </th>
                <th className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")}>
                  Statut
                </th>
                <th className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {rendezVous.map((rendezVousItem) => (
                <tr key={rendezVousItem.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className={"ml-3 font-bold " + (color === "light" ? "text-blueGray-600" : "text-white")}>
                        {rendezVousItem.patientPrenom} {rendezVousItem.patientNom}
                      </span>
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {new Date(rendezVousItem.date).toLocaleDateString('fr-FR')} à {rendezVousItem.heure}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      rendezVousItem.type === "Urgence" 
                        ? "bg-red-100 text-red-800" 
                        : rendezVousItem.type === "Nouvelle consultation" 
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}>
                      {rendezVousItem.type}
                    </span>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      rendezVousItem.statut === "Confirmé" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {rendezVousItem.statut}
                    </span>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  <div className="flex items-center space-x-2">
    {/* Bouton Modifier avec texte */}
    <button
      onClick={() => onEditRendezVous(rendezVousItem.id)}
      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs transition-colors duration-200 flex items-center"
      title="Modifier le rendez-vous"
    >
      <span className="mr-1">✏️</span>
      Modifier
    </button>
    
    {/* Bouton Supprimer avec texte */}
    <button
      onClick={() => onDeleteRendezVous(rendezVousItem.id)}
      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs transition-colors duration-200 flex items-center"
      title="Supprimer le rendez-vous"
    >
      <span className="mr-1">🗑️</span>
      Supprimer
    </button>
  </div>
</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {rendezVous.length === 0 && (
            <div className="text-center py-8">
              <i className="fas fa-calendar-times text-4xl text-gray-300 mb-2"></i>
              <p className="text-gray-500">Aucun rendez-vous trouvé</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}