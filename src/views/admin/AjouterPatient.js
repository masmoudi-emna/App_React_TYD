import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function AjouterPatient() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    // Informations personnelles
    nom: "",
    prenom: "",
    dateNaissance: "",
    genre: "",
    groupeSanguin: "",
    
    // Contact
    telephone: "",
    email: "",
    adresse: "",
    
    // Informations médicales
    typeDiabete: "Type 2",
    dateDiagnostic: "",
    antecedents: "",
    allergies: "",
    
    // Paramètres biologiques
    hba1c: "",
    glycemie: "",
    poids: "",
    taille: "",
    
    // Traitements
    traitements: "",
    
    // Statut
    statut: "Stable"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nouveau patient:", formData);
    // Ici vous ajouterez la logique pour sauvegarder le patient
    history.push("/admin/patients");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Calcul automatique de l'IMC
  const calculateIMC = () => {
    if (formData.poids && formData.taille) {
      const tailleEnMetres = formData.taille / 100;
      const imc = (formData.poids / (tailleEnMetres * tailleEnMetres)).toFixed(1);
      return imc;
    }
    return "";
  };

  const imc = calculateIMC();

  return (
    <>
      <style>
        {`
          .form-container {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            min-height: 100vh;
            padding: 40px;
          }
          .form-card {
            background: white;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
            border: 1px solid #cbd5e1;
            margin-bottom: 20px;
          }
          .form-section {
            margin-bottom: 24px;
          }
          .section-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #e2e8f0;
          }
          .form-input {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            font-size: 0.875rem;
            transition: all 0.3s ease;
          }
          .form-input:focus {
            outline: none;
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          }
          .form-label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            color: #374151;
            margin-bottom: 6px;
          }
          .btn-primary {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(16, 185, 129, 0.3);
          }
          .btn-secondary {
            background: #6b7280;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .btn-secondary:hover {
            background: #4b5563;
            transform: translateY(-1px);
          }
          .imc-display {
            background: #f0f9ff;
            border: 1px solid #bae6fd;
            border-radius: 8px;
            padding: 12px;
            margin-top: 8px;
          }
          .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .grid-3 {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 16px;
          }
          .full-width {
            grid-column: 1 / -1;
          }
          
          @media (max-width: 768px) {
            .grid-2, .grid-3 {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div className="form-container">
        <div className="form-card" style={{padding: '24px'}}>
          {/* En-tête */}
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px'}}>
            <div>
              <button 
                onClick={() => history.goBack()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#64748b',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  marginBottom: '12px',
                  padding: '8px 0'
                }}
              >
                <i className="fas fa-arrow-left" style={{marginRight: '8px'}}></i>
                Retour
              </button>
              <h1 style={{fontSize: '2rem', fontWeight: 'bold', color: '#1e293b', margin: 0}}>
                Nouveau Patient
              </h1>
              <p style={{color: '#64748b', marginTop: '8px', margin: 0}}>
                Ajoutez un nouveau patient à votre système
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Informations Personnelles */}
            <div className="form-section">
              <h2 className="section-title">Informations Personnelles</h2>
              <div className="grid-2">
                <div>
                  <label className="form-label">Nom *</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Entrez le nom"
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Prénom *</label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Entrez le prénom"
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Date de naissance *</label>
                  <input
                    type="date"
                    name="dateNaissance"
                    value={formData.dateNaissance}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Genre *</label>
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="">Sélectionnez</option>
                    <option value="Homme">Homme</option>
                    <option value="Femme">Femme</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Groupe sanguin</label>
                  <select
                    name="groupeSanguin"
                    value={formData.groupeSanguin}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Informations de Contact */}
            <div className="form-section">
              <h2 className="section-title">Informations de Contact</h2>
              <div className="grid-2">
                <div>
                  <label className="form-label">Téléphone *</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Ex: 01 23 45 67 89"
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Ex: patient@email.com"
                  />
                </div>
                <div className="full-width">
                  <label className="form-label">Adresse</label>
                  <input
                    type="text"
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Entrez l'adresse complète"
                  />
                </div>
              </div>
            </div>

            {/* Informations Médicales */}
            <div className="form-section">
              <h2 className="section-title">Informations Médicales</h2>
              <div className="grid-2">
                <div>
                  <label className="form-label">Type de diabète *</label>
                  <select
                    name="typeDiabete"
                    value={formData.typeDiabete}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="Type 1">Diabète Type 1</option>
                    <option value="Type 2">Diabète Type 2</option>
                    <option value="Gestationnel">Diabète Gestationnel</option>
                    <option value="MODY">MODY</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Date du diagnostic</label>
                  <input
                    type="date"
                    name="dateDiagnostic"
                    value={formData.dateDiagnostic}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="full-width">
                  <label className="form-label">Antécédents médicaux</label>
                  <textarea
                    name="antecedents"
                    value={formData.antecedents}
                    onChange={handleChange}
                    className="form-input"
                    rows="3"
                    placeholder="Antécédents familiaux, autres pathologies..."
                  />
                </div>
                <div className="full-width">
                  <label className="form-label">Allergies connues</label>
                  <input
                    type="text"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Liste des allergies (médicaments, aliments...)"
                  />
                </div>
              </div>
            </div>

            {/* Paramètres Biologiques */}
            <div className="form-section">
              <h2 className="section-title">Paramètres Biologiques</h2>
              <div className="grid-3">
                <div>
                  <label className="form-label">HbA1c (%) *</label>
                  <input
                    type="number"
                    name="hba1c"
                    value={formData.hba1c}
                    onChange={handleChange}
                    step="0.1"
                    min="4"
                    max="15"
                    className="form-input"
                    placeholder="Ex: 6.5"
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Glycémie (mg/dL)</label>
                  <input
                    type="number"
                    name="glycemie"
                    value={formData.glycemie}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Ex: 120"
                  />
                </div>
                <div>
                  <label className="form-label">Poids (kg)</label>
                  <input
                    type="number"
                    name="poids"
                    value={formData.poids}
                    onChange={handleChange}
                    step="0.1"
                    className="form-input"
                    placeholder="Ex: 70"
                  />
                </div>
                <div>
                  <label className="form-label">Taille (cm)</label>
                  <input
                    type="number"
                    name="taille"
                    value={formData.taille}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Ex: 175"
                  />
                </div>
                <div>
                  <label className="form-label">IMC</label>
                  <div className="form-input" style={{background: '#f8fafc'}}>
                    {imc ? `${imc} kg/m²` : 'Calcul automatique'}
                  </div>
                  {imc && (
                    <div className="imc-display">
                      <small style={{color: '#0369a1'}}>
                        IMC calculé automatiquement à partir du poids et de la taille
                      </small>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Traitements */}
            <div className="form-section">
              <h2 className="section-title">Traitements</h2>
              <div>
                <label className="form-label">Traitements actuels</label>
                <textarea
                  name="traitements"
                  value={formData.traitements}
                  onChange={handleChange}
                  className="form-input"
                  rows="3"
                  placeholder="Liste des médicaments, posologie..."
                />
              </div>
            </div>

            {/* Statut */}
            <div className="form-section">
              <h2 className="section-title">Statut</h2>
              <div style={{maxWidth: '300px'}}>
                <label className="form-label">Statut du patient *</label>
                <select
                  name="statut"
                  value={formData.statut}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="Stable">Stable</option>
                  <option value="À surveiller">À surveiller</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Critique">Critique</option>
                </select>
              </div>
            </div>

            {/* Boutons d'action */}
            <div style={{display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #e2e8f0'}}>
              <button
                type="button"
                onClick={() => history.push("/admin/patients")}
                className="btn-secondary"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="btn-primary"
              >
                <i className="fas fa-user-plus"></i>
                Ajouter le Patient
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}