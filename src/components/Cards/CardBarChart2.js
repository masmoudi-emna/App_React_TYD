import React from "react";
import Chart from "chart.js";

export default function CardLineChart() {
  React.useEffect(() => {
    var config = {
      type: "bar",
      data: {
        labels: ["<18.5 (Maigreur)", "18.5-25 (Normal)", "25-30 (Surpoids)", "30-35 (Obésité I)", "35-40 (Obésité II)", ">40 (Obésité III)"],
        datasets: [
          {
            label: "Patients Diabétiques Type 2",
            backgroundColor: [
              "#9ae6b4", // Vert clair - Maigreur
              "#68d391", // Vert - Normal
              "#fbd38d", // Orange - Surpoids
              "#f6ad55", // Orange foncé - Obésité I
              "#ed8936", // Orange rouge - Obésité II
              "#c53030"  // Rouge - Obésité III
            ],
            borderColor: [
              "#48bb78",
              "#38a169",
              "#ed8936",
              "#dd6b20",
              "#c05621",
              "#9b2c2c"
            ],
            borderWidth: 2,
            data: [2, 18, 45, 52, 28, 11],
            barThickness: 40,
            borderRadius: 6,
          }
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            titleColor: "#2d3748",
            bodyColor: "#4a5568",
            borderColor: "#e2e8f0",
            borderWidth: 1,
            callbacks: {
              label: function(context) {
                const total = 156; // Total patients Type 2
                const percentage = ((context.parsed.y / total) * 100).toFixed(1);
                return `${context.parsed.y} patients (${percentage}%)`;
              }
            }
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Catégories d'IMC (kg/m²)",
              color: "#4a5568",
              font: {
                weight: "bold",
              },
            },
            grid: {
              display: false,
            },
            ticks: {
              color: "#718096",
              maxRotation: 45,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Nombre de Patients",
              color: "#4a5568",
            },
            grid: {
              color: "rgba(226, 232, 240, 0.8)",
            },
            ticks: {
              color: "#718096",
              stepSize: 10,
            },
            beginAtZero: true,
          },
        },
      },
    };
    
    // CHANGEMENT ICI : Utiliser un ID différent pour éviter les conflits
    var ctx = document.getElementById("imc-distribution-chart").getContext("2d");
    
    if (window.imcChartInstance) {
      window.imcChartInstance.destroy();
    }
    
    window.imcChartInstance = new Chart(ctx, config);
    
    return () => {
      if (window.imcChartInstance) {
        window.imcChartInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border border-gray-100">
        <div className="p-4 flex-auto">
          {/* CHANGEMENT ICI : ID du canvas modifié */}
          <div className="relative h-80">
            <canvas id="imc-distribution-chart"></canvas>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 rounded-b-lg border-t border-gray-100">
          <div className="flex justify-between text-sm text-blueGray-600">
            <span>Total patients Type 2: <strong>156</strong></span>
            <span>IMC moyen: <strong>31.2 kg/m²</strong></span>
            <span>Obésité: <strong>58% des patients</strong></span>
          </div>
        </div>
      </div>
    </>
  );
}