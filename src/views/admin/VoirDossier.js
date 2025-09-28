import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function VoirDossier() {
  const { patientId } = useParams();
  const history = useHistory();
  const [patient, setPatient] = useState(null);
  const [activeTab, setActiveTab] = useState("informations");

  // Données simulées du patient
  useEffect(() => {
    const patientsData = {
      1: {
        id: 1,
        nom: "Dupont",
        prenom: "Marie",
        age: 45,
        genre: "Femme",
        telephone: "01 23 45 67 89",
        email: "marie.dupont@email.com",
        adresse: "123 Rue de la Santé, Paris",
        dateNaissance: "1978-05-15",
        groupeSanguin: "A+",
        antecedents: "Diabète type 2 diagnostiqué en 2015, hypertension",
        traitements: "Metformine 1000mg, Lisinopril 10mg",
        allergies: "Aucune connue",
        dernierBilan: "2024-01-15",
        hbA1c: 6.8,
        glycemie: 142,
        poids: 68,
        taille: 165,
        imc: 25.0
      },
      2: {
        id: 2,
        nom: "Martin",
        prenom: "Pierre",
        age: 52,
        genre: "Homme",
        telephone: "01 34 56 78 90",
        email: "pierre.martin@email.com",
        adresse: "456 Avenue des Médecins, Lyon",
        dateNaissance: "1971-08-22",
        groupeSanguin: "O+",
        antecedents: "Diabète type 2, hypercholestérolémie",
        traitements: "Metformine 850mg, Atorvastatine 20mg",
        allergies: "Pénicilline",
        dernierBilan: "2024-01-10",
        hbA1c: 7.2,
        glycemie: 158,
        poids: 82,
        taille: 178,
        imc: 25.9
      },
      3: {
        id: 3,
        nom: "Bernard",
        prenom: "Sophie",
        age: 38,
        genre: "Femme",
        telephone: "01 45 67 89 01",
        email: "sophie.bernard@email.com",
        adresse: "789 Boulevard du Parc, Marseille",
        dateNaissance: "1985-12-03",
        groupeSanguin: "B+",
        antecedents: "Diabète gestationnel, obésité",
        traitements: "Insuline glargine, Metformine 500mg",
        allergies: "Aucune",
        dernierBilan: "2024-01-18",
        hbA1c: 8.1,
        glycemie: 189,
        poids: 95,
        taille: 162,
        imc: 36.2
      }
    };
    
    setPatient(patientsData[patientId]);
  }, [patientId]);

  if (!patient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement du dossier...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>
        {`
          .dossier-page {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            min-height: 100vh;
            padding: 40px;
          }
          .dossier-card {
            background: white;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
            border: 1px solid #cbd5e1;
            margin-bottom: 20px;
          }
          .tab-active {
            background: linear-gradient(135deg, #6366f1, #4f46e5);
            color: white;
            border-radius: 8px;
          }
          .stat-card {
            background: linear-gradient(135deg, #f8fafc, #e2e8f0);
            border-left: 4px solid;
            border-radius: 12px;
            padding: 16px;
          }
          .btn-dossier-primary {
            background: linear-gradient(135deg, #6366f1, #4f46e5);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .btn-dossier-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(99,102,241,0.3);
          }
          .btn-dossier-secondary {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .btn-dossier-secondary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(16,185,129,0.3);
          }
          .tab-button {
            display: flex;
            align-items: center;
            padding: 12px 16px;
            border: none;
            border-radius: 8px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            gap: 8px;
          }
          .tab-button:not(.tab-active) {
            background: transparent;
            color: #64748b;
          }
          .tab-button:not(.tab-active):hover {
            background: #f1f5f9;
            color: #475569;
          }
          .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
          .info-item {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #e2e8f0;
          }
          .info-label {
            color: #64748b;
            font-weight: 500;
          }
          .info-value {
            color: #1e293b;
            font-weight: 600;
            text-align: right;
          }
          .medical-section {
            background: #f8fafc;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 16px;
          }
          .treatment-card {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            border-radius: 12px;
            padding: 20px;
          }
          .consultation-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            margin-bottom: 12px;
          }
          
          @media (max-width: 768px) {
            .info-grid {
              grid-template-columns: 1fr;
            }
            .header-buttons {
              flex-direction: column;
              gap: 12px;
            }
          }
        `}
      </style>

      <div className="dossier-page">
        {/* En-tête */}
        <div className="dossier-card" style={{padding: '24px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px'}}>
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
                  marginBottom: '16px',
                  padding: '8px 0'
                }}
              >
                <i className="fas fa-arrow-left" style={{marginRight: '8px'}}></i>
                Retour
              </button>
              <h1 style={{fontSize: '2rem', fontWeight: 'bold', color: '#1e293b', margin: 0}}>
                Dossier Patient
              </h1>
              <p style={{color: '#2c4363ff', marginTop: '8px', margin: 0}}>
                {patient.prenom} {patient.nom} • ID: {patient.id}
              </p>
            </div>
            <div className="header-buttons" style={{display: 'flex', gap: '12px'}}>
              <button className="btn-dossier-primary">
                <i className="fas fa-print"></i>
                Imprimer
              </button>
              <button className="btn-dossier-secondary">
                <i className="fas fa-edit"></i>
                Modifier
              </button>
            </div>
          </div>

          {/* Informations principales */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px'}}>
            <div className="stat-card" style={{borderLeftColor: '#3b82f6'}}>
              <div style={{fontSize: '0.875rem', color: '#000000ff'}}>Âge</div>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b'}}>{patient.age} ans</div>
            </div>
            <div className="stat-card" style={{borderLeftColor: '#10b981'}}>
              <div style={{fontSize: '0.875rem', color: '#64748b'}}>HbA1c</div>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b'}}>{patient.hbA1c}%</div>
            </div>
            <div className="stat-card" style={{borderLeftColor: '#8b5cf6'}}>
              <div style={{fontSize: '0.875rem', color: '#64748b'}}>IMC</div>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b'}}>{patient.imc}</div>
            </div>
            <div className="stat-card" style={{borderLeftColor: '#ef4444'}}>
              <div style={{fontSize: '0.875rem', color: '#64748b'}}>Glycémie</div>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b'}}>{patient.glycemie} mg/dL</div>
            </div>
          </div>
        </div>

        {/* Navigation par onglets */}
        <div className="dossier-card" style={{padding: '24px'}}>
          <div style={{borderBottom: '1px solid #e2e8f0', marginBottom: '24px'}}>
            <nav style={{display: 'flex', gap: '8px'}}>
              {[
                { id: "informations", label: "Informations Générales", icon: "user" },
                { id: "medical", label: "Historique Médical", icon: "heartbeat" },
                { id: "traitements", label: "Traitements", icon: "pills" },
                { id: "consultations", label: "Consultations", icon: "stethoscope" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-button ${activeTab === tab.id ? 'tab-active' : ''}`}
                >
                  <i className={`fas fa-${tab.icon}`}></i>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contenu des onglets */}
          <div>
            {activeTab === "informations" && (
              <div className="info-grid">
                <div>
                  <h3 style={{fontSize: '1.25rem', fontWeight: 'semibold', color: '#1e293b', marginBottom: '16px'}}>Informations Personnelles</h3>
                  <div>
                    <div className="info-item">
                      <span className="info-label">Nom complet</span>
                      <span className="info-value">{patient.prenom} {patient.nom}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Date de naissance</span>
                      <span className="info-value">{new Date(patient.dateNaissance).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Genre</span>
                      <span className="info-value">{patient.genre}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Groupe sanguin</span>
                      <span className="info-value">{patient.groupeSanguin}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 style={{fontSize: '1.25rem', fontWeight: 'semibold', color: '#1e293b', marginBottom: '16px'}}>Contact</h3>
                  <div>
                    <div className="info-item">
                      <span className="info-label">Téléphone</span>
                      <span className="info-value">{patient.telephone}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Email</span>
                      <span className="info-value">{patient.email}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Adresse</span>
                      <span className="info-value" style={{textAlign: 'right'}}>{patient.adresse}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "medical" && (
              <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                <div className="medical-section">
                  <h3 style={{fontSize: '1.25rem', fontWeight: 'semibold', color: '#1e293b', marginBottom: '12px'}}>Antécédents Médicaux</h3>
                  <p style={{color: '#475569', lineHeight: '1.6'}}>{patient.antecedents}</p>
                </div>
                <div className="medical-section" style={{background: '#fefce8', border: '1px solid #fef08a'}}>
                  <h3 style={{fontSize: '1.25rem', fontWeight: 'semibold', color: '#1e293b', marginBottom: '12px'}}>Allergies</h3>
                  <p style={{color: '#92400e', lineHeight: '1.6'}}>{patient.allergies}</p>
                </div>
                <div className="medical-section" style={{background: '#eff6ff', border: '1px solid #bfdbfe'}}>
                  <h3 style={{fontSize: '1.25rem', fontWeight: 'semibold', color: '#1e293b', marginBottom: '12px'}}>Dernier Bilan</h3>
                  <p style={{color: '#1e40af', lineHeight: '1.6'}}>Dernière mise à jour: {new Date(patient.dernierBilan).toLocaleDateString('fr-FR')}</p>
                </div>
              </div>
            )}

            {activeTab === "traitements" && (
              <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <h3 style={{fontSize: '1.25rem', fontWeight: 'semibold', color: '#1e293b'}}>Traitements en cours</h3>
                <div className="treatment-card">
                  <p style={{color: '#166534', lineHeight: '1.6', fontWeight: '500'}}>{patient.traitements}</p>
                </div>
                <div style={{marginTop: '24px'}}>
                  <h4 style={{fontSize: '1.125rem', fontWeight: 'semibold', color: '#1e293b', marginBottom: '12px'}}>Posologie recommandée</h4>
                  <ul style={{display: 'flex', flexDirection: 'column', gap: '8px', color: '#475569'}}>
                    <li style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <i className="fas fa-check-circle" style={{color: '#10b981'}}></i>
                      Prendre les médicaments avec les repas
                    </li>
                    <li style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <i className="fas fa-check-circle" style={{color: '#10b981'}}></i>
                      Surveillance glycémique quotidienne
                    </li>
                    <li style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <i className="fas fa-check-circle" style={{color: '#10b981'}}></i>
                      Consultation de suivi trimestrielle
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "consultations" && (
              <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <h3 style={{fontSize: '1.25rem', fontWeight: 'semibold', color: '#1e293b'}}>Prochaines Consultations</h3>
                <div className="consultation-item">
                  <div>
                    <p style={{fontWeight: '600', color: '#1e293b', margin: 0}}>Consultation de suivi diabète</p>
                    <p style={{fontSize: '0.875rem', color: '#64748b', margin: '4px 0 0 0'}}>15 Mars 2024 à 10:00</p>
                  </div>
                  <span style={{
                    background: '#dbeafe',
                    color: '#1e40af',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    Confirmée
                  </span>
                </div>
                
                <h4 style={{fontSize: '1.125rem', fontWeight: 'semibold', color: '#1e293b', marginTop: '24px'}}>Historique des consultations</h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  {[
                    { date: "2024-01-15", type: "Bilan trimestriel", resultat: "HbA1c: 6.8%" },
                    { date: "2023-10-20", type: "Consultation de suivi", resultat: "Stable" },
                    { date: "2023-07-15", type: "Bilan trimestriel", resultat: "HbA1c: 7.1%" }
                  ].map((consult, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: '12px',
                      borderBottom: '1px solid #e2e8f0'
                    }}>
                      <div>
                        <p style={{fontWeight: '600', color: '#1e293b', margin: 0}}>{consult.type}</p>
                        <p style={{fontSize: '0.875rem', color: '#64748b', margin: '4px 0 0 0'}}>
                          {new Date(consult.date).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                      <span style={{fontSize: '0.875rem', color: '#64748b'}}>{consult.resultat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}