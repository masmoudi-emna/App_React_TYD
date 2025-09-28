import React, { useState } from "react";
import PredictionDropdown from "components/Dropdowns/PredictionDropdown";

export default function PredictionDiabete() {
  const [formData, setFormData] = useState({
    age: "",
    bmi: "",
    cholesterol: "",
    sex: "",
  });

  const [predictionResult, setPredictionResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [predictionHistory, setPredictionHistory] = useState([]);
  const [showImcCalculator, setShowImcCalculator] = useState(false);
  const [imcData, setImcData] = useState({
    poids: "",
    taille: "",
    imc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateIMC = () => {
    if (imcData.poids && imcData.taille) {
      const tailleEnMetres = imcData.taille / 100;
      const imc = (imcData.poids / (tailleEnMetres * tailleEnMetres)).toFixed(
        1
      );
      setImcData((prev) => ({ ...prev, imc }));

      // Met à jour automatiquement le champ IMC du formulaire principal
      setFormData((prev) => ({ ...prev, bmi: imc }));
    }
  };

  const handleImcInputChange = (e) => {
    const { name, value } = e.target;
    setImcData((prev) => ({
      ...prev,
      [name]: value,
      imc: "", // Réinitialise l'IMC quand on modifie les valeurs
    }));
  };

  const closeImcCalculator = () => {
    setShowImcCalculator(false);
    // Optionnel: Réinitialiser les données IMC quand on ferme
    // setImcData({ poids: "", taille: "", imc: "" });
  };

  const handlePredict = async () => {
    if (
      !formData.age ||
      !formData.bmi ||
      !formData.cholesterol ||
      !formData.sex
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    setIsLoading(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Erreur HTTP: ${response.status}`);
      }

      const result = await response.json();

      const newPrediction = {
        id: Date.now(),
        date: new Date().toLocaleString("fr-FR"),
        ...formData,
        prediction: result.prediction,
        probability: result.probability,
        riskLevel: result.riskLevel,
      };

      setPredictionResult(newPrediction);
      setPredictionHistory((prev) => [newPrediction, ...prev.slice(0, 9)]);
    } catch (error) {
      console.error("Erreur de prédiction:", error);

      if (error.name === "AbortError") {
        alert("Timeout: Le serveur met trop de temps à répondre");
      } else if (error.message.includes("Failed to fetch")) {
        alert(
          "Impossible de se connecter au serveur. Vérifiez que Flask est démarré sur le port 5000."
        );
      } else {
        alert(`Erreur: ${error.message}`);
      }
    }

    setIsLoading(false);
  };

  const handleReset = () => {
    setFormData({
      age: "",
      bmi: "",
      cholesterol: "",
      sex: "",
    });
    setPredictionResult(null);
    setShowImcCalculator(false);
    setImcData({
      poids: "",
      taille: "",
      imc: "",
    });
  };

  const handleViewHistory = () => {
    console.log("Voir l'historique complet", predictionHistory);
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(predictionHistory, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "predictions_diabete.json";
    link.click();
  };

  const getRiskStyles = (riskLevel) => {
    switch (riskLevel) {
      case "Élevé":
        return {
          backgroundColor: "#fef2f2",
          borderColor: "#fecaca",
          color: "#991b1b",
          badgeBackground: "#fee2e2",
          badgeColor: "#991b1b",
          badgeBorder: "#fca5a5",
          gradient: "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)",
          progressColor: "#ef4444",
        };
      case "Modéré":
        return {
          backgroundColor: "#fffbeb",
          borderColor: "#fed7aa",
          color: "#92400e",
          badgeBackground: "#fef3c7",
          badgeColor: "#92400e",
          badgeBorder: "#fbbf24",
          gradient: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
          progressColor: "#f59e0b",
        };
      case "Faible":
        return {
          backgroundColor: "#f0fdf4",
          borderColor: "#bbf7d0",
          color: "#166534",
          badgeBackground: "#dcfce7",
          badgeColor: "#166534",
          badgeBorder: "#4ade80",
          gradient: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
          progressColor: "#22c55e",
        };
      default:
        return {
          backgroundColor: "#f9fafb",
          borderColor: "#e5e7eb",
          color: "#374151",
          badgeBackground: "#f3f4f6",
          badgeColor: "#374151",
          badgeBorder: "#d1d5db",
          gradient: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",
          progressColor: "#6b7280",
        };
    }
  };

  const getPredictionIcon = (prediction) => {
    return prediction === "Diabétique"
      ? "fas fa-exclamation-triangle"
      : "fas fa-check-circle";
  };

  const getPredictionColor = (prediction) => {
    return prediction === "Diabétique" ? "#dc2626" : "#16a34a";
  };

  return (
    <>
      {/* En-tête de la page - Structure de la première page avec styles de la deuxième */}
      <div className="flex flex-wrap mb-8 pt-8">
        <div className="w-full px-4">
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              wordWrap: "break-word",
              width: "100%",
              marginBottom: "1.5rem",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              borderRadius: "0.5rem",
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
            }}
          >
            <div
              style={{
                borderRadius: "0.5rem 0.5rem 0 0",
                marginBottom: 0,
                padding: "1.5rem",
              }}
            >
              <div className="text-center flex justify-between items-center">
                <div>
                  <h1
                    style={{
                      fontSize: "1.875rem",
                      fontWeight: "bold",
                      color: "#1a3a65ff",
                      margin: 0,
                    }}
                  >
                    Prédiction du Diabète Type 2
                  </h1>
                  <p
                    style={{
                      color: "#1a3a65ff",
                      marginTop: "0.5rem",
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    Évaluation du risque basée sur l'âge, IMC, cholestérol et
                    sexe
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
                    style={{
                      backgroundColor: "#f3f4f6",
                      color: "#294777ff",
                      fontWeight: "bold",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "0.5rem",
                      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                      transition: "all 0.2s",
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #d1d5db",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#e5e7eb")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#f3f4f6")
                    }
                  >
                    <i className="fas fa-redo mr-2"></i>
                    <span className="text-xl font-semibold tracking-wide">
                      Réinitialiser
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mb-8">
        <div className="w-full lg:w-8/12 px-4">
          {/* Formulaire de prédiction - Structure de la première page avec styles de la deuxième */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              wordWrap: "break-word",
              width: "100%",
              marginBottom: "1.5rem",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              borderRadius: "0.5rem",
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
            }}
          >
            <div
              style={{
                borderRadius: "0.5rem 0.5rem 0 0",
                marginBottom: 0,
                padding: "1rem 1.5rem",
                background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
                borderBottom: "1px solid #bfdbfe",
              }}
            >
              <div className="text-center flex justify-between items-center">
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#1f2937",
                    margin: 0,
                  }}
                >
                  Paramètres du Patient
                </h3>
                <span
                  style={{
                    backgroundColor: "#dbeafe",
                    color: "#1e40af",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
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
                    <label
                      style={{
                        display: "block",
                        textTransform: "uppercase",
                        color: "#374151",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Âge du patient (années)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        style={{
                          border: "none",
                          padding: "0.75rem",
                          paddingLeft: "0.75rem",
                          "::placeholder": { color: "#9ca3af" },
                          color: "#374151",
                          backgroundColor: "white",
                          borderRadius: "0.375rem",
                          fontSize: "0.875rem",
                          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                          outline: "none",
                          width: "100%",
                          transition: "duration 200ms",
                        }}
                        placeholder="Ex: 45"
                        min="18"
                        max="100"
                      />
                    </div>
                  </div>

                  {/* IMC */}
                  <div className="relative w-full mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <label
                        style={{
                          display: "block",
                          textTransform: "uppercase",
                          color: "#374151",
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                          marginBottom: "0.5rem",
                        }}
                      >
                        IMC (kg/m²)
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowImcCalculator(!showImcCalculator)}
                        style={{
                          background:
                            "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                          color: "white",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "6px",
                          fontSize: "0.75rem",
                          fontWeight: "500",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.transform = "translateY(-1px)")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.transform = "translateY(0)")
                        }
                      >
                        <i className="fas fa-calculator"></i>
                        {showImcCalculator ? "Masquer" : "Calculer IMC"}
                      </button>
                    </div>

                    <div className="relative">
                      <input
                        type="number"
                        name="bmi"
                        value={formData.bmi}
                        onChange={handleInputChange}
                        step="0.1"
                        style={{
                          border: "none",
                          padding: "0.75rem",
                          paddingLeft: "0.75rem",
                          "::placeholder": { color: "#9ca3af" },
                          color: "#374151",
                          backgroundColor: "white",
                          borderRadius: "0.375rem",
                          fontSize: "0.875rem",
                          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                          outline: "none",
                          width: "100%",
                          transition: "duration 200ms",
                        }}
                        placeholder="Ex: 26.5"
                        min="15"
                        max="50"
                      />
                    </div>
                  </div>

                  {/* Calculateur IMC */}
                  {showImcCalculator && (
                    <div
                      style={{
                        gridColumn: "1 / -1",
                        background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
                        border: "1px solid #bae6fd",
                        borderRadius: "12px",
                        padding: "20px",
                        marginTop: "10px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h4
                          style={{
                            fontSize: "1rem",
                            fontWeight: "600",
                            color: "#0369a1",
                            margin: 0,
                          }}
                        >
                          <i className="fas fa-calculator mr-2"></i>
                          Calculateur d'IMC
                        </h4>
                        <button
                          onClick={closeImcCalculator}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#64748b",
                            cursor: "pointer",
                            fontSize: "1.2rem",
                          }}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label
                            style={{
                              display: "block",
                              fontSize: "0.875rem",
                              fontWeight: "500",
                              color: "#374151",
                              marginBottom: "6px",
                            }}
                          >
                            Poids (kg)
                          </label>
                          <input
                            type="number"
                            name="poids"
                            value={imcData.poids}
                            onChange={handleImcInputChange}
                            style={{
                              width: "100%",
                              padding: "10px 12px",
                              border: "1px solid #cbd5e1",
                              borderRadius: "8px",
                              fontSize: "0.875rem",
                              outline: "none",
                              transition: "all 0.3s ease",
                            }}
                            placeholder="Ex: 70"
                            step="0.1"
                          />
                        </div>

                        <div>
                          <label
                            style={{
                              display: "block",
                              fontSize: "0.875rem",
                              fontWeight: "500",
                              color: "#374151",
                              marginBottom: "6px",
                            }}
                          >
                            Taille (cm)
                          </label>
                          <input
                            type="number"
                            name="taille"
                            value={imcData.taille}
                            onChange={handleImcInputChange}
                            style={{
                              width: "100%",
                              padding: "10px 12px",
                              border: "1px solid #cbd5e1",
                              borderRadius: "8px",
                              fontSize: "0.875rem",
                              outline: "none",
                              transition: "all 0.3s ease",
                            }}
                            placeholder="Ex: 175"
                          />
                        </div>

                        <div>
                          <label
                            style={{
                              display: "block",
                              fontSize: "0.875rem",
                              fontWeight: "500",
                              color: "#374151",
                              marginBottom: "6px",
                            }}
                          >
                            IMC Calculé
                          </label>
                          <div
                            style={{
                              width: "100%",
                              padding: "10px 12px",
                              background: "white",
                              border: "1px solid #cbd5e1",
                              borderRadius: "8px",
                              fontSize: "0.875rem",
                              fontWeight: "600",
                              color: imcData.imc ? "#059669" : "#64748b",
                            }}
                          >
                            {imcData.imc
                              ? `${imcData.imc} kg/m²`
                              : "Résultat..."}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div>
                          {imcData.imc && (
                            <span
                              style={{
                                fontSize: "0.75rem",
                                color: "#059669",
                                fontWeight: "500",
                              }}
                            >
                              <i className="fas fa-check-circle mr-1"></i>
                              IMC automatiquement ajouté au formulaire
                            </span>
                          )}
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={calculateIMC}
                            disabled={!imcData.poids || !imcData.taille}
                            style={{
                              background:
                                !imcData.poids || !imcData.taille
                                  ? "#d1d5db"
                                  : "linear-gradient(135deg, #10b981, #059669)",
                              color: "white",
                              border: "none",
                              padding: "8px 16px",
                              borderRadius: "6px",
                              fontSize: "0.875rem",
                              fontWeight: "500",
                              cursor:
                                !imcData.poids || !imcData.taille
                                  ? "not-allowed"
                                  : "pointer",
                              transition: "all 0.3s ease",
                            }}
                          >
                            <i className="fas fa-calculator mr-2"></i>
                            Calculer IMC
                          </button>

                          <button
                            onClick={closeImcCalculator}
                            style={{
                              background: "#6b7280",
                              color: "white",
                              border: "none",
                              padding: "8px 16px",
                              borderRadius: "6px",
                              fontSize: "0.875rem",
                              fontWeight: "500",
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                            }}
                          >
                            <i className="fas fa-times mr-2"></i>
                            Fermer
                          </button>
                        </div>
                      </div>

                      {/* Légende IMC */}
                      {imcData.imc && (
                        <div
                          style={{
                            marginTop: "12px",
                            padding: "8px 12px",
                            background: "#f8fafc",
                            border: "1px solid #e2e8f0",
                            borderRadius: "6px",
                            fontSize: "0.75rem",
                            color: "#64748b",
                          }}
                        >
                          <strong>Classification IMC:</strong>
                          {imcData.imc < 18.5
                            ? " Insuffisance pondérale"
                            : imcData.imc < 25
                            ? " Poids normal"
                            : imcData.imc < 30
                            ? " Surpoids"
                            : " Obésité"}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Cholestérol */}
                  {/* Cholestérol */}
                  <div className="relative w-full mb-3">
                    <label
                      style={{
                        display: "block",
                        textTransform: "uppercase",
                        color: "#374151",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Cholestérol (mmol/L) *
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        name="cholesterol"
                        value={formData.cholesterol}
                        onChange={handleInputChange}
                        step="0.1"
                        style={{
                          border: "none",
                          padding: "0.75rem",
                          paddingLeft: "0.75rem",
                          "::placeholder": { color: "#9ca3af" },
                          color: "#374151",
                          backgroundColor: "white",
                          borderRadius: "0.375rem",
                          fontSize: "0.875rem",
                          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                          outline: "none",
                          width: "100%",
                          transition: "duration 200ms",
                        }}
                        placeholder="Ex: 4.5"
                        min="2"
                        max="10"
                        required
                      />
                    </div>
                    <small
                      style={{
                        color: "#6b7280",
                        marginTop: "4px",
                        display: "block",
                      }}
                    >
                      Valeur normale : inférieure à 5.0 mmol/L
                    </small>
                  </div>

                  {/* Sexe */}
                  <div className="relative w-full mb-3">
                    <label
                      style={{
                        display: "block",
                        textTransform: "uppercase",
                        color: "#374151",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Sexe
                    </label>
                    <div className="relative">
                      <select
                        name="sex"
                        value={formData.sex}
                        onChange={handleInputChange}
                        style={{
                          border: "none",
                          padding: "0.75rem",
                          paddingLeft: "0.75rem",
                          "::placeholder": { color: "#9ca3af" },
                          color: "#374151",
                          backgroundColor: "white",
                          borderRadius: "0.375rem",
                          fontSize: "0.875rem",
                          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                          outline: "none",
                          width: "100%",
                          transition: "duration 200ms",
                          appearance: "none",
                        }}
                      >
                        <option value="">Sélectionnez le sexe</option>
                        <option value="0">Femme</option>
                        <option value="1">Homme</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Bouton de prédiction - Style de la deuxième page */}
                <div className="text-center mt-8">
                  <button
                    type="button"
                    onClick={handlePredict}
                    disabled={isLoading}
                    style={{
                      position: "relative",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      padding: "1.25rem 3rem",
                      borderRadius: "1rem",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      transition: "all 0.3s",
                      border: "2px solid",
                      minHeight: "60px",
                      minWidth: "280px",
                      ...(isLoading
                        ? {
                            backgroundColor: "#d1d5db",
                            color: "#6b7280",
                            cursor: "not-allowed",
                            borderColor: "#9ca3af",
                            boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
                          }
                        : {
                            background:
                              "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                            color: "white",
                            borderColor: "#1e40af",
                            cursor: "pointer",
                            transform: "scale(1)",
                          }),
                    }}
                    onMouseOver={(e) => {
                      if (!isLoading) {
                        e.target.style.background =
                          "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)";
                        e.target.style.transform = "scale(1.1)";
                        e.target.style.boxShadow =
                          "0 35px 60px -12px rgba(0, 0, 0, 0.35)";
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!isLoading) {
                        e.target.style.background =
                          "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)";
                        e.target.style.transform = "scale(1)";
                        e.target.style.boxShadow =
                          "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
                      }
                    }}
                  >
                    {isLoading ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-4 text-xl"></i>
                        <span className="text-xl font-semibold tracking-wide">
                          Analyse en cours...
                        </span>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-brain mr-4 text-xl"></i>
                        <span className="text-xl font-semibold tracking-wide">
                          Lancer la prédiction
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Le reste du code reste inchangé... */}
        <div className="w-full lg:w-4/12 px-4">
          {/* Résultat de prédiction */}
          {predictionResult &&
            (() => {
              const riskStyles = getRiskStyles(predictionResult.riskLevel);
              const predictionColor = getPredictionColor(
                predictionResult.prediction
              );

              return (
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 0,
                    wordWrap: "break-word",
                    width: "100%",
                    marginBottom: "1.5rem",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    borderRadius: "1rem",
                    border: `2px solid ${riskStyles.borderColor}`,
                    backgroundColor: riskStyles.backgroundColor,
                    transform: "scale(1)",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  <div
                    style={{
                      borderRadius: "1rem 1rem 0 0",
                      padding: "1rem 1.5rem",
                      background: riskStyles.gradient,
                      borderBottom: `1px solid ${riskStyles.borderColor}`,
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-gray-800">
                        Résultat de la Prédiction
                      </h3>
                      <i
                        className={getPredictionIcon(
                          predictionResult.prediction
                        )}
                        style={{ color: predictionColor, fontSize: "1.5rem" }}
                      ></i>
                    </div>
                  </div>

                  <div className="flex-auto p-6">
                    {/* Cercle de résultat principal */}
                    <div className="text-center mb-6">
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "1rem 1.5rem",
                          borderRadius: "1rem",
                          backgroundColor: riskStyles.badgeBackground,
                          color: riskStyles.badgeColor,
                          border: `2px solid ${riskStyles.badgeBorder}`,
                          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <i
                          className={getPredictionIcon(
                            predictionResult.prediction
                          )}
                          style={{
                            color: predictionColor,
                            fontSize: "1.5rem",
                            marginRight: "0.75rem",
                          }}
                        ></i>
                        <span
                          style={{
                            fontSize: "1.25rem",
                            fontWeight: "bold",
                            color: predictionColor,
                          }}
                        >
                          {predictionResult.prediction}
                        </span>
                      </div>
                    </div>

                    {/* Détails */}
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border">
                        <span className="text-gray-600 font-medium">
                          Niveau de risque:
                        </span>
                        <span
                          style={{
                            fontWeight: "bold",
                            fontSize: "1.125rem",
                            padding: "0.25rem 0.75rem",
                            borderRadius: "9999px",
                            backgroundColor: riskStyles.badgeBackground,
                            color: riskStyles.badgeColor,
                            border: `1px solid ${riskStyles.badgeBorder}`,
                          }}
                        >
                          {predictionResult.riskLevel}
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border">
                        <span className="text-gray-600 font-medium">
                          Probabilité:
                        </span>
                        <span className="font-bold text-2xl text-blue-600">
                          {predictionResult.probability}%
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border">
                        <span className="text-gray-600 font-medium">Date:</span>
                        <span className="text-sm text-gray-500 font-medium">
                          {predictionResult.date}
                        </span>
                      </div>
                    </div>

                    {/* Barre de probabilité améliorée */}
                    <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
                        <span>Faible risque</span>
                        <span>Risque élevé</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                        <div
                          style={{
                            height: "0.75rem",
                            borderRadius: "9999px",
                            backgroundColor: riskStyles.progressColor,
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                            transition: "all 1s ease-out",
                            width: `${predictionResult.probability}%`,
                          }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1 px-9">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

          {/* Historique récent */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              wordWrap: "break-word",
              width: "100%",
              marginBottom: "1.5rem",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              borderRadius: "0.5rem",
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
            }}
          >
            <div
              style={{
                borderRadius: "0.5rem 0.5rem 0 0",
                marginBottom: 0,
                padding: "1rem 1.5rem",
                background: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)",
                borderBottom: "1px solid #e9d5ff",
              }}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                Historique Récent
              </h3>
            </div>
            <div className="flex-auto p-4">
              {predictionHistory.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <i className="fas fa-history text-3xl mb-3 block opacity-50"></i>
                  <p className="text-sm">Aucune prédiction récente</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {predictionHistory.map((item) => {
                    const riskStyles = getRiskStyles(item.riskLevel);
                    return (
                      <div
                        key={item.id}
                        style={{
                          padding: "1rem",
                          border: `2px solid ${riskStyles.borderColor}`,
                          borderRadius: "0.5rem",
                          backgroundColor: riskStyles.backgroundColor,
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.boxShadow =
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1)")
                        }
                        onMouseOut={(e) => (e.target.style.boxShadow = "none")}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm text-gray-700">
                            {item.date.split(" ")[0]}
                          </span>
                          <span
                            style={{
                              fontSize: "0.75rem",
                              padding: "0.25rem 0.75rem",
                              borderRadius: "9999px",
                              fontWeight: "bold",
                              backgroundColor: riskStyles.badgeBackground,
                              color: riskStyles.badgeColor,
                              border: `1px solid ${riskStyles.badgeBorder}`,
                            }}
                          >
                            {item.riskLevel}
                          </span>
                        </div>
                        <div className="text-xs text-gray-600 space-y-1">
                          <div className="flex justify-between">
                            <span>Âge:</span>
                            <span className="font-medium">{item.age} ans</span>
                          </div>
                          <div className="flex justify-between">
                            <span>IMC:</span>
                            <span className="font-medium">{item.bmi}</span>
                          </div>

                          <div className="flex justify-between">
                            <span>Cholestérol:</span>
                            <span className="font-medium">
                              {item.cholesterol} mg/dL
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section informations - Structure de la première page avec styles de la deuxième */}
      <div className="flex flex-wrap mb-8">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              style={{
                background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
                border: "1px solid #bfdbfe",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-center">
                <div
                  style={{
                    borderRadius: "9999px",
                    backgroundColor: "#dbeafe",
                    padding: "1rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <i className="fas fa-info-circle text-blue-600 text-2xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 text-lg">
                    Facteurs de risque
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Le modèle analyse l'âge, IMC, cholestérol et sexe pour
                    évaluer le risque de diabète.
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%)",
                border: "1px solid #bbf7d0",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-center">
                <div
                  style={{
                    borderRadius: "9999px",
                    backgroundColor: "#dcfce7",
                    padding: "1rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <i className="fas fa-shield-alt text-green-600 text-2xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 text-lg">
                    Confidentialité
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Vos données médicales sont cryptées et protégées
                    conformément au RGPD.
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, #f3e8ff 0%, #faf5ff 100%)",
                border: "1px solid #e9d5ff",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-center">
                <div
                  style={{
                    borderRadius: "9999px",
                    backgroundColor: "#f3e8ff",
                    padding: "1rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <i className="fas fa-stethoscope text-purple-600 text-2xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 text-lg">
                    Avertissement
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Cette prédiction ne remplace pas un diagnostic médical
                    professionnel.
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
