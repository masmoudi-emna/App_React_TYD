import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function AjouterRendezVous() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    patientNom: "",
    date: "",
    heure: "09:00",
    type: "Consultation de suivi",
    statut: "Confirmé",
    notes: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nouveau rendez-vous:", formData);
    history.push("/admin/rendezvous");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .full-width {
            grid-column: 1 / -1;
          }
          
          @media (max-width: 768px) {
            .grid-2 {
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
                Nouveau Rendez-vous
              </h1>
              <p style={{color: '#64748b', marginTop: '8px', margin: 0}}>
                Planifiez un nouveau rendez-vous avec un patient
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Informations du rendez-vous */}
            <div className="form-section">
              <h2 className="section-title">Informations du Rendez-vous</h2>
              <div className="grid-2">
                {/* Nom du patient */}
                <div className="full-width">
                  <label className="form-label">Nom du patient *</label>
                  <input
                    type="text"
                    name="patientNom"
                    value={formData.patientNom}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Entrez le nom complet du patient"
                    required
                  />
                </div>
                
                {/* Date */}
                <div>
                  <label className="form-label">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                {/* Heure */}
                <div>
                  <label className="form-label">Heure *</label>
                  <input
                    type="time"
                    name="heure"
                    value={formData.heure}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                {/* Type de rendez-vous */}
                <div>
                  <label className="form-label">Type de rendez-vous *</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="Consultation de suivi">Consultation de suivi</option>
                    <option value="Nouvelle consultation">Nouvelle consultation</option>
                    <option value="Urgence">Urgence</option>
                    <option value="Éducation thérapeutique">Éducation thérapeutique</option>
                    <option value="Bilan trimestriel">Bilan trimestriel</option>
                    <option value="Contrôle glycémique">Contrôle glycémique</option>
                  </select>
                </div>
                
                {/* Statut */}
                <div>
                  <label className="form-label">Statut *</label>
                  <select
                    name="statut"
                    value={formData.statut}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="Confirmé">Confirmé</option>
                    <option value="En attente">En attente</option>
                    <option value="Annulé">Annulé</option>
                    <option value="Reporté">Reporté</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notes supplémentaires */}
            <div className="form-section">
              <h2 className="section-title">Informations Complémentaires</h2>
              <div>
                <label className="form-label">Notes et observations</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  className="form-input"
                  placeholder="Notes supplémentaires (symptômes, antécédents, motif de consultation, etc.)"
                  style={{resize: 'vertical'}}
                />
                <small style={{color: '#6b7280', marginTop: '4px', display: 'block'}}>
                  Ces informations aideront à préparer la consultation
                </small>
              </div>
            </div>

            {/* Résumé rapide */}
            {formData.patientNom && formData.date && (
              <div className="form-section">
                <h2 className="section-title">Résumé du Rendez-vous</h2>
                <div style={{
                  background: '#f0f9ff',
                  border: '1px solid #bae6fd',
                  borderRadius: '12px',
                  padding: '16px'
                }}>
                  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px'}}>
                    <div>
                      <strong style={{color: '#0369a1'}}>Patient:</strong>
                      <p style={{margin: '4px 0 0 0', color: '#1e293b'}}>{formData.patientNom}</p>
                    </div>
                    <div>
                      <strong style={{color: '#0369a1'}}>Date et heure:</strong>
                      <p style={{margin: '4px 0 0 0', color: '#1e293b'}}>
                        {formData.date && new Date(formData.date).toLocaleDateString('fr-FR')} à {formData.heure}
                      </p>
                    </div>
                    <div>
                      <strong style={{color: '#0369a1'}}>Type:</strong>
                      <p style={{margin: '4px 0 0 0', color: '#1e293b'}}>{formData.type}</p>
                    </div>
                    <div>
                      <strong style={{color: '#0369a1'}}>Statut:</strong>
                      <p style={{margin: '4px 0 0 0', color: '#1e293b'}}>{formData.statut}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Boutons d'action */}
            <div style={{
              display: 'flex', 
              justifyContent: 'flex-end', 
              gap: '16px', 
              marginTop: '32px', 
              paddingTop: '24px', 
              borderTop: '1px solid #e2e8f0'
            }}>
              <button
                type="button"
                onClick={() => history.push("/admin/rendezvous")}
                className="btn-secondary"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="btn-primary"
              >
                <i className="fas fa-calendar-plus"></i>
                Créer le Rendez-vous
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}