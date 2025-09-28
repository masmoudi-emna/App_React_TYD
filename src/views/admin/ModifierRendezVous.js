import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function ModifierRendezVous() {
  const { id } = useParams();
  const history = useHistory();
  const [rendezVous, setRendezVous] = useState({
    patientNom: "", // J'ajoute le nom du patient manquant
    date: "",
    heure: "09:00",
    duree: 30,
    type: "Consultation de suivi",
    statut: "Confirmé",
    notes: ""
  });

  useEffect(() => {
    // Simulation de données avec des valeurs par défaut
    const rendezVousData = {
      patientNom: "Jean Dupont", // Exemple de nom
      date: "2024-01-22",
      heure: "09:00",
      duree: 30,
      type: "Consultation de suivi",
      statut: "Confirmé",
      notes: "Contrôle HbA1c"
    };
    setRendezVous(rendezVousData);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rendez-vous modifié:", rendezVous);
    history.push("/admin/rendezvous");
  };

  const handleChange = (e) => {
    setRendezVous({
      ...rendezVous,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="px-4 md:px-10 mx-auto w-full -m-24 mt-8"> {/* Ajout de mt-8 ici */}
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-blueGray-700">
                    Modifier le Rendez-vous
                  </h1>
                  <p className="text-blueGray-400 mt-2">
                    ID: {id}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Ajout du champ Nom du patient */}
                  <div className="md:col-span-2">
                    <label className="block text-blueGray-600 text-sm font-bold mb-2">
                      Nom du patient *
                    </label>
                    <input
                      type="text"
                      name="patientNom"
                      value={rendezVous.patientNom}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Entrez le nom du patient"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-blueGray-600 text-sm font-bold mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={rendezVous.date}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-blueGray-600 text-sm font-bold mb-2">
                      Heure *
                    </label>
                    <input
                      type="time"
                      name="heure"
                      value={rendezVous.heure}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-blueGray-600 text-sm font-bold mb-2">
                      Durée (minutes) *
                    </label>
                    <select
                      name="duree"
                      value={rendezVous.duree}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="30">30 minutes</option>
                      <option value="45">45 minutes</option>
                      <option value="60">60 minutes</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-blueGray-600 text-sm font-bold mb-2">
                      Type de rendez-vous *
                    </label>
                    <select
                      name="type"
                      value={rendezVous.type}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="Consultation de suivi">Consultation de suivi</option>
                      <option value="Nouvelle consultation">Nouvelle consultation</option>
                      <option value="Urgence">Urgence</option>
                      <option value="Éducation thérapeutique">Éducation thérapeutique</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-blueGray-600 text-sm font-bold mb-2">
                      Statut *
                    </label>
                    <select
                      name="statut"
                      value={rendezVous.statut}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="Confirmé">Confirmé</option>
                      <option value="En attente">En attente</option>
                      <option value="Annulé">Annulé</option>
                      <option value="Reporté">Reporté</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-blueGray-600 text-sm font-bold mb-2">
                      Notes
                    </label>
                    <textarea
                      name="notes"
                      value={rendezVous.notes}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Notes supplémentaires..."
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => history.push("/admin/rendezvous")}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    <i className="fas fa-save mr-2"></i>
                    Sauvegarder les modifications
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}