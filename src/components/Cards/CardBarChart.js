import React from "react";
import Chart from "chart.js";

export default function CardBarChart() {
  React.useEffect(() => {
    let config = {
      type: "doughnut",
      data: {
        labels: ["Diabète Type 1", "Diabète Type 2", "Diabète Gestationnel", "Prédiabète"],
        datasets: [
          {
            label: "Nombre de Patients",
            backgroundColor: [
              "#4299e1", // Bleu pour Type 1
              "#48bb78", // Vert pour Type 2
              "#ed8936", // Orange pour Gestationnel
              "#9f7aea", // Violet pour Prédiabète
            ],
            borderColor: [
              "#3182ce",
              "#38a169",
              "#dd6b20",
              "#805ad5",
            ],
            borderWidth: 2,
            data: [45, 89, 12, 34],
            hoverOffset: 15,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: "#4a5568",
              font: {
                size: 11,
                weight: '500',
              },
              padding: 20,
              usePointStyle: true,
              pointStyle: 'circle',
            },
          },
          tooltip: {
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            titleColor: "#2d3748",
            bodyColor: "#4a5568",
            borderColor: "#e2e8f0",
            borderWidth: 1,
            callbacks: {
              label: function(context) {
                const label = context.label;
                const value = context.parsed;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = Math.round((value / total) * 100);
                return `${label}: ${value} patients (${percentage}%)`;
              }
            }
          },
        },
        cutout: '60%',
      },
    };
    
    let ctx = document.getElementById("bar-chart").getContext("2d");
    
    // Détruire le graphique existant avant d'en créer un nouveau
    if (window.barChartInstance) {
      window.barChartInstance.destroy();
    }
    
    window.barChartInstance = new Chart(ctx, config);
    
    // Nettoyage
    return () => {
      if (window.barChartInstance) {
        window.barChartInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg border border-gray-100">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-500 mb-1 text-xs font-semibold">
                Répartition des patients
              </h6>
              <h2 className="text-blueGray-800 text-xl font-semibold">
                Types de Diabète
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <div className="relative h-80">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 rounded-b-lg border-t border-gray-100">
          <div className="text-center">
            <span className="text-sm font-semibold text-blueGray-600">
              Total: <strong>180 patients</strong>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}