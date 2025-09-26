import React, { useState } from "react";
import PredictionDropdown from "components/Dropdowns/PredictionDropdown";

export default function PredictionDiabete() {
  const [formData, setFormData] = useState({
    age: "",
    bmi: "",
    cholesterol: "",
    sex: ""
  });

  const [predictionResult, setPredictionResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [predictionHistory, setPredictionHistory] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePredict = async () => {
    if (!formData.age || !formData.bmi || !formData.cholesterol || !formData.sex) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    setIsLoading(true);

    try {
      // Appel à l'API Flask
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erreur API');
      }

      const result = await response.json();
      
      const newPrediction = {
        id: Date.now(),
        date: new Date().toLocaleString('fr-FR'),
        ...formData,
        prediction: result.prediction,
        probability: result.probability,
        riskLevel: result.riskLevel
      };

      setPredictionResult(newPrediction);
      setPredictionHistory(prev => [newPrediction, ...prev.slice(0, 9)]);

    } catch (error) {
      console.error('Erreur de prédiction:', error);
      alert('Erreur de connexion avec le serveur de prédiction');
    }

    setIsLoading(false);
  };

  const handleReset = () => {
    setFormData({
      age: "",
      bmi: "",
      cholesterol: "",
      sex: ""
    });
    setPredictionResult(null);
  };

  const handleViewHistory = () => {
    console.log("Voir l'historique complet", predictionHistory);
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(predictionHistory, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'predictions_diabete.json';
    link.click();
  };

  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case "Élevé": return "bg-red-100 text-red-800 border-red-200";
      case "Modéré": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Faible": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <>
      {/* En-tête de la page */}
      <div className="flex flex-wrap mb-8 pt-8">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">
                    Prédiction du Diabète Type 2
                  </h1>
                  <p className="text-gray-600 mt-2 font-medium">
                    Évaluation du risque basée sur l'âge, IMC, cholestérol et sexe
                  </p>
                </div>
                
                <div className="flex space-x-4 items-center">
                  <PredictionDropdown 
                    onPredict={handlePredict}
                    onViewHistory={handleViewHistory}
                    onExport={handleExport}
                  />
                  <button
                    onClick={handleReset}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg shadow transition-all duration-200 flex items-center border border-gray-300"
                  >
                    <i className="fas fa-redo mr-2"></i>
                    Réinitialiser
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mb-8">
        <div className="w-full lg:w-8/12 px-4">
          {/* Formulaire de prédiction */}
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
            <div className="rounded-t mb-0 px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
              <div className="text-center flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  Paramètres du Patient
                </h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  <i className="fas fa-user-injured mr-2"></i>
                  Données médicales
                </span>
              </div>
            </div>
            
            <div className="flex-auto px-6 lg:px-10 py-10 pt-6">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Âge */}
                  
                  <div className="relative w-full mb-3">
                    
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                      
                      Âge du patient (années)  
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition duration-200"
                        placeholder="Ex: 45"
                        min="18"
                        max="100"
                      />
                     
                    </div>
                  </div>

                  {/* IMC */}
                  <div className="relative w-full mb-3">
                    
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                      IMC (kg/m²)
                    </label>
                    
                    <div className="relative">
                      <input
                        type="number"
                        name="bmi"
                        value={formData.bmi}
                        onChange={handleInputChange}
                        step="0.1"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition duration-200"
                        placeholder="Ex: 26.5"
                        min="15"
                        max="50"
                      />
                      
                    </div>
                  </div>

                  {/* Cholestérol */}
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                      Cholestérol (mg/dL)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        name="cholesterol"
                        value={formData.cholesterol}
                        onChange={handleInputChange}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition duration-200"
                        placeholder="Ex: 200"
                        min="100"
                        max="400"
                      />
                      <div className="absolute right-3 top-3 text-gray-400">
                        <i className="fas fa-heart-pulse"></i>
                      </div>
                    </div>
                  </div>

                  {/* Sexe */}
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                      
                      Sexe
                    </label>
                    <div className="relative">
                      <select
                        name="sex"
                        value={formData.sex}
                        onChange={handleInputChange}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition duration-200 appearance-none"
                      >
                        <option value="">Sélectionnez le sexe</option>
                        <option value="0">Femme</option>
                        <option value="1">Homme</option>
                      </select>
                      
                    </div>
                  </div>
                </div>

                {/* Bouton de prédiction */}
                <div className="text-center mt-6">
                  <button
                    type="button"
                    onClick={handlePredict}
                    disabled={isLoading}
                    className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg shadow transition-all duration-200 border border-gray-300"
                  >
                    {isLoading ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Analyse en cours...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-brain mr-2 text-black"></i>
                        Lancer la prédiction
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Résultats et historique */}
        <div className="w-full lg:w-4/12 px-4">
          {/* Résultat de prédiction */}
          {predictionResult && (
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
              <div className="rounded-t mb-0 px-6 py-4 bg-gradient-to-r from-green-50 to-green-100 border-b border-green-200">
                <h3 className="text-xl font-semibold text-gray-800">
                  Résultat de la Prédiction
                </h3>
              </div>
              <div className="flex-auto p-6">
                <div className="text-center mb-4">
                  <div className={`inline-block px-4 py-2 rounded-full border-2 ${getRiskColor(predictionResult.riskLevel)} font-bold text-lg`}>
                    {predictionResult.prediction}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Niveau de risque:</span>
                    <span className={`font-semibold ${predictionResult.riskLevel === "Élevé" ? "text-red-600" : predictionResult.riskLevel === "Modéré" ? "text-yellow-600" : "text-green-600"}`}>
                      {predictionResult.riskLevel}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Probabilité:</span>
                    <span className="font-bold text-blue-600">{predictionResult.probability}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Date:</span>
                    <span className="text-sm text-gray-500">{predictionResult.date}</span>
                  </div>
                </div>

                {/* Barre de probabilité */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Faible risque</span>
                    <span>Risque élevé</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 h-2 rounded-full"
                      style={{ width: `${predictionResult.probability}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Historique récent */}
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
            <div className="rounded-t mb-0 px-6 py-4 bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
              <h3 className="text-xl font-semibold text-gray-800">
                Historique Récent
              </h3>
            </div>
            <div className="flex-auto p-4">
              {predictionHistory.length === 0 ? (
                <div className="text-center py-6 text-gray-500">
                  <i className="fas fa-history text-2xl mb-2 block"></i>
                  Aucune prédiction récente
                </div>
              ) : (
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {predictionHistory.map((item) => (
                    <div key={item.id} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{item.date.split(' ')[0]}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${getRiskColor(item.riskLevel)}`}>
                          {item.riskLevel}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        Âge: {item.age} ans • IMC: {item.bmi} • Cholestérol: {item.cholesterol} mg/dL
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section informations */}
      <div className="flex flex-wrap mb-8">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 p-3">
                  <i className="fas fa-info-circle text-blue-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">Facteurs de risque</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Le modèle analyse l'âge, IMC, cholestérol et sexe pour évaluer le risque de diabète.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center">
                <div className="rounded-full bg-green-100 p-3">
                  <i className="fas fa-shield-alt text-green-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">Confidentialité</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Vos données médicales sont cryptées et protégées conformément au RGPD.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-center">
                <div className="rounded-full bg-purple-100 p-3">
                  <i className="fas fa-stethoscope text-purple-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">Avertissement</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Cette prédiction ne remplace pas un diagnostic médical professionnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}