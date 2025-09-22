import React from "react";
import Chart from "chart.js";

export default function CardLineChart() {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"],
        datasets: [
          {
            label: "Consultations Programmées",
            backgroundColor: "rgba(72, 187, 120, 0.1)",
            borderColor: "#48bb78",
            pointBackgroundColor: "#48bb78",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#48bb78",
            data: [45, 52, 48, 55, 60, 58, 65, 62, 70, 68, 75, 80],
            fill: true,
            tension: 0.4,
          },
          {
            label: "Consultations d'Urgence",
            backgroundColor: "rgba(237, 100, 166, 0.1)",
            borderColor: "#ed64a6",
            pointBackgroundColor: "#ed64a6",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#ed64a6",
            data: [8, 10, 12, 9, 11, 15, 18, 14, 16, 13, 12, 10],
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "#4a5568",
              font: {
                size: 12,
              },
            },
            align: "end",
            position: "top",
          },
          tooltip: {
            mode: "index",
            intersect: false,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            titleColor: "#2d3748",
            bodyColor: "#4a5568",
            borderColor: "#e2e8f0",
            borderWidth: 1,
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.parsed.y} consultations`;
              }
            }
          },
        },
        interaction: {
          mode: "nearest",
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Mois",
              color: "#4a5568",
            },
            grid: {
              display: false,
            },
            ticks: {
              color: "#718096",
            },
          },
          y: {
            type: "linear",
            display: true,
            position: "left",
            title: {
              display: true,
              text: "Nombre de Consultations",
              color: "#4a5568",
            },
            grid: {
              borderDash: [3],
              color: "rgba(226, 232, 240, 0.8)",
            },
            ticks: {
              color: "#718096",
              stepSize: 20,
            },
            beginAtZero: true,
          },
        },
      },
    };
    
    var ctx = document.getElementById("line-chart").getContext("2d");
    
    // Détruire le graphique existant avant d'en créer un nouveau
    if (window.lineChartInstance) {
      window.lineChartInstance.destroy();
    }
    
    window.lineChartInstance = new Chart(ctx, config);
    
    // Nettoyage
    return () => {
      if (window.lineChartInstance) {
        window.lineChartInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border border-gray-100">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-500 mb-1 text-xs font-semibold">
                Évolution sur 12 mois
              </h6>
              <h2 className="text-blueGray-800 text-xl font-semibold">
                Évolution des Consultations par Mois
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <div className="relative h-80">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 rounded-b-lg border-t border-gray-100">
          <p className="text-xs text-blueGray-500">
            📈 Augmentation de 78% des consultations programmées sur l'année
          </p>
        </div>
      </div>
    </>
  );
}