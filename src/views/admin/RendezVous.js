import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CardTableRendezVous from "components/Cards/CardTableRendezVous.js";

export default function RendezVous() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWeek, setSelectedWeek] = useState(new Date());
  const [activeFilter, setActiveFilter] = useState("all");
  const history = useHistory();

  const [rendezVous, setRendezVous] = useState([
    {
      id: 1,
      patientId: 1,
      patientNom: "Dupont",
      patientPrenom: "Marie",
      date: "2024-01-22",
      heure: "09:00",
      duree: 30,
      type: "Consultation de suivi",
      statut: "Confirmé",
      notes: "Contrôle HbA1c",
    },
    {
      id: 2,
      patientId: 2,
      patientNom: "Martin",
      patientPrenom: "Pierre",
      date: "2024-01-22",
      heure: "10:30",
      duree: 45,
      type: "Nouvelle consultation",
      statut: "Confirmé",
      notes: "Éducation thérapeutique",
    },
    {
      id: 3,
      patientId: 3,
      patientNom: "Bernard",
      patientPrenom: "Sophie",
      date: "2024-01-23",
      heure: "14:00",
      duree: 30,
      type: "Urgence",
      statut: "En attente",
      notes: "Problème d'ajustement insuline",
    },
  ]);

  // Injection CSS directe
  const styles = `
    .rdv-container { background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); min-height: 100vh; padding: 35px; }
    .rdv-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
    .rdv-title h1 { font-size: 2rem; font-weight: 700; background: linear-gradient(135deg, #6366f1, #4f46e5); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0; }
    .rdv-title p { color: #64748b; margin: 5px 0 0 0; }
    .btn-primary { background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; border: none; padding: 12px 24px; border-radius: 12px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 8px; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
    .dashboard-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; margin-bottom: 25px; }
    .rdv-card { background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #cbd5e1; transition: all 0.3s ease; }
    .rdv-card:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
    .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
    .stat-card { display: flex; align-items: center; padding: 16px; border-radius: 12px; border: 1px solid #cbd5e1; transition: all 0.3s ease; cursor: pointer; }
    .stat-card:hover { transform: translateY(-2px); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    .stat-success { border-left: 4px solid #10b981; }
    .stat-warning { border-left: 4px solid #f59e0b; }
    .stat-danger { border-left: 4px solid #ef4444; }
    .stat-info { border-left: 4px solid #3b82f6; }
    .stat-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 1.2rem; }
    .stat-success .stat-icon { background: rgba(16,185,129,0.1); color: #10b981; }
    .stat-warning .stat-icon { background: rgba(245,158,11,0.1); color: #f59e0b; }
    .stat-danger .stat-icon { background: rgba(239,68,68,0.1); color: #ef4444; }
    .stat-info .stat-icon { background: rgba(59,130,246,0.1); color: #3b82f6; }
    .stat-value { font-size: 1.8rem; font-weight: 700; color: #1e293b; margin: 0; }
    .stat-label { font-size: 0.85rem; color: #64748b; margin: 0; }
    .calendar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .calendar-controls { display: flex; gap: 8px; align-items: center; }
    .calendar-btn { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 6px; cursor: pointer; transition: all 0.2s ease; color: #64748b; }
    .calendar-btn:hover { background: #e2e8f0; }
    .calendar-today { background: #6366f1; color: white; border: none; border-radius: 8px; padding: 6px 12px; cursor: pointer; font-size: 0.8rem; font-weight: 600; }
    .calendar-today:hover { background: #4f46e5; }
    .week-calendar { display: flex; flex-direction: column; gap: 10px; }
    .day-item { display: flex; justify-content: space-between; align-items: center; padding: 12px; border-radius: 12px; border: 1px solid #cbd5e1; background: #f8fafc; transition: all 0.3s ease; }
    .day-current { border-color: #6366f1; background: rgba(99,102,241,0.05); }
    .day-header { display: flex; align-items: center; gap: 12px; }
    .day-number { width: 36px; height: 36px; border-radius: 50%; background: #e2e8f0; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #1e293b; }
    .day-number-current { background: #6366f1; color: white; }
    .day-name { font-weight: 600; color: #1e293b; font-size: 0.9rem; }
    .day-count { font-size: 0.75rem; color: #64748b; }
    .day-indicators { display: flex; align-items: center; gap: 4px; }
    .indicator { width: 8px; height: 8px; border-radius: 50%; }
    .indicator-confirmed { background: #10b981; }
    .indicator-pending { background: #f59e0b; }
    .indicator-urgent { background: #ef4444; }
    .indicator-more { font-size: 0.7rem; color: #64748b; }
    .filters-content { display: flex; gap: 15px; align-items: center; }
    .search-container { position: relative; flex-grow: 1; }
    .search-icon { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: #64748b; }
    .search-input { width: 100%; padding: 12px 15px 12px 45px; border: 1px solid #cbd5e1; border-radius: 12px; font-size: 0.9rem; transition: all 0.3s ease; background: #f8fafc; }
    .search-input:focus { outline: none; border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.1); }
    .filter-buttons { display: flex; gap: 8px; }
    .filter-btn { display: flex; align-items: center; gap: 6px; padding: 8px 16px; border: 1px solid #cbd5e1; border-radius: 10px; background: #f8fafc; color: #64748b; font-size: 0.85rem; font-weight: 500; cursor: pointer; transition: all 0.3s ease; }
    .filter-btn:hover { background: #e2e8f0; }
    .filter-btn-active { background: rgba(99,102,241,0.1); color: #6366f1; border-color: #6366f1; }
    .btn-dossier { background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 0.8rem; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; gap: 4px; margin-left: 8px; }
    .btn-dossier:hover { transform: translateY(-1px); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    
    @media (max-width: 1024px) {
      .dashboard-grid { grid-template-columns: 1fr; }
      .stats-grid { grid-template-columns: 1fr; }
      .filters-content { flex-direction: column; align-items: stretch; }
    }
  `;

  const filteredRendezVous = rendezVous.filter((rv) => {
    const matchesSearch =
      searchTerm === "" ||
      rv.patientNom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rv.patientPrenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rv.type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "confirmed" && rv.statut === "Confirmé") ||
      (activeFilter === "pending" && rv.statut === "En attente") ||
      (activeFilter === "urgent" && rv.type === "Urgence") ||
      (activeFilter === "today" &&
        rv.date === new Date().toISOString().split("T")[0]);

    return matchesSearch && matchesFilter;
  });

  const stats = {
    confirmed: rendezVous.filter((rv) => rv.statut === "Confirmé").length,
    pending: rendezVous.filter((rv) => rv.statut === "En attente").length,
    urgent: rendezVous.filter((rv) => rv.type === "Urgence").length,
    today: rendezVous.filter(
      (rv) => rv.date === new Date().toISOString().split("T")[0]
    ).length,
  };

  const handleAddRendezVous = () => {
    history.push("/admin/ajouterrendezvous");
  };

  const handleEditRendezVous = (id) => {
    history.push(`/admin/modifierrendezvous/${id}`);
  };

  const handleDeleteRendezVous = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce rendez-vous ?")) {
      setRendezVous(rendezVous.filter((rv) => rv.id !== id));
    }
  };

  const handleViewDossier = (patientId) => {
    history.push(`/admin/VoirDossier/${patientId}`);
  };

  const getWeekDates = (date) => {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay() + 1);
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const current = new Date(start);
      current.setDate(start.getDate() + i);
      dates.push(current);
    }
    return dates;
  };

  const weekDates = getWeekDates(selectedWeek);

  return (
    <>
      <style>{styles}</style>
      <div className="rdv-container">
        {/* En-tête */}
        <div className="rdv-header">
          <div className="rdv-title">
            <h1>Gestion des Rendez-vous</h1>
            <p></p>
          </div>

          <button onClick={handleAddRendezVous} className="btn-primary">
            <i className="fas fa-calendar-plus"></i>
            Nouveau RDV
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          {/* Statistiques */}
          <div className="rdv-card">
            <h3 style={{ marginBottom: "20px", color: "#1e293b" }}>
              Aperçu de la semaine
            </h3>
            <div className="stats-grid">
              {[
                {
                  key: "confirmed",
                  label: "Rendez-vous confirmés",
                  icon: "calendar-check",
                  color: "success",
                  value: stats.confirmed,
                },
                {
                  key: "pending",
                  label: "En attente de confirmation",
                  icon: "clock",
                  color: "warning",
                  value: stats.pending,
                },
                {
                  key: "urgent",
                  label: "Consultations urgentes",
                  icon: "exclamation-triangle",
                  color: "danger",
                  value: stats.urgent,
                },
                {
                  key: "today",
                  label: "RDV aujourd'hui",
                  icon: "calendar-day",
                  color: "info",
                  value: stats.today,
                },
              ].map((stat) => (
                <div key={stat.key} className={`stat-card stat-${stat.color}`}>
                  <div className="stat-icon">
                    <i className={`fas fa-${stat.icon}`}></i>
                  </div>
                  <div>
                    <p className="stat-value">{stat.value}</p>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calendrier */}
          <div className="rdv-card">
            <div className="calendar-header">
              <h3 style={{ margin: 0, color: "#1e293b" }}>Vue rapide</h3>
              <div className="calendar-controls">
                <button
                  onClick={() =>
                    setSelectedWeek(
                      new Date(selectedWeek.setDate(selectedWeek.getDate() - 7))
                    )
                  }
                  className="calendar-btn"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={() => setSelectedWeek(new Date())}
                  className="calendar-today"
                >
                  Auj.
                </button>
                <button
                  onClick={() =>
                    setSelectedWeek(
                      new Date(selectedWeek.setDate(selectedWeek.getDate() + 7))
                    )
                  }
                  className="calendar-btn"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <div className="week-calendar">
              {weekDates.map((date, index) => {
                const dayRendezVous = rendezVous.filter(
                  (rv) =>
                    new Date(rv.date).toDateString() === date.toDateString()
                );

                return (
                  <div
                    key={index}
                    className={`day-item ${
                      date.toDateString() === new Date().toDateString()
                        ? "day-current"
                        : ""
                    }`}
                  >
                    <div className="day-header">
                      <div
                        className={`day-number ${
                          date.toDateString() === new Date().toDateString()
                            ? "day-number-current"
                            : ""
                        }`}
                      >
                        <span>{date.getDate()}</span>
                      </div>
                      <div>
                        <div className="day-name">
                          {date.toLocaleDateString("fr-FR", {
                            weekday: "short",
                          })}
                        </div>
                        <div className="day-count">
                          {dayRendezVous.length} RDV
                        </div>
                      </div>
                    </div>

                    {dayRendezVous.length > 0 && (
                      <div className="day-indicators">
                        {dayRendezVous.slice(0, 2).map((rv, rvIndex) => (
                          <div
                            key={rvIndex}
                            className={`indicator ${
                              rv.type === "Urgence"
                                ? "indicator-urgent"
                                : rv.statut === "Confirmé"
                                ? "indicator-confirmed"
                                : "indicator-pending"
                            }`}
                          ></div>
                        ))}
                        {dayRendezVous.length > 2 && (
                          <span className="indicator-more">
                            +{dayRendezVous.length - 2}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div className="rdv-card" style={{ marginBottom: "25px" }}>
          <div className="filters-content">
            <div className="search-container">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher un patient, type de consultation..."
                className="search-input"
              />
            </div>

            <div className="filter-buttons">
              {[
                { key: "all", label: "Tous", icon: "list" },
                { key: "confirmed", label: "Confirmés", icon: "check-circle" },
                { key: "pending", label: "En attente", icon: "clock" },
                {
                  key: "urgent",
                  label: "Urgences",
                  icon: "exclamation-triangle",
                },
                { key: "today", label: "Aujourd'hui", icon: "calendar-day" },
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`filter-btn ${
                    activeFilter === filter.key ? "filter-btn-active" : ""
                  }`}
                >
                  <i className={`fas fa-${filter.icon}`}></i>
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tableau */}
        
        <div className="rdv-card">
          <CardTableRendezVous
            rendezVous={filteredRendezVous}
            onEditRendezVous={handleEditRendezVous}
            onDeleteRendezVous={handleDeleteRendezVous}
            onViewDossier={handleViewDossier} 
          />
        </div>
      </div>
    </>
  );
}
