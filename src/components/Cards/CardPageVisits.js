import React from "react";
import Chart from "chart.js";

export default function CardPageVisits() {
  React.useEffect(() => {
    const config = {
      type: "bar",
      data: {
        labels: ["18-25 ans", "26-35 ans", "36-45 ans", "46-55 ans", "56-65 ans", "65+ ans"],
        datasets: [
          {
            label: "Hommes",
            backgroundColor: "#4299e1",
            borderColor: "#3182ce",
            borderWidth: 2,
            data: [12, 18, 25, 32, 28, 15],
            barThickness: 25,
            borderRadius: 6,
          },
          {
            label: "Femmes",
            backgroundColor: "#ed64a6",
            borderColor: "#d53f8c",
            borderWidth: 2,
            data: [15, 22, 30, 35, 26, 18],
            barThickness: 25,
            borderRadius: 6,
          }
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: "#4a5568",
              font: {
                size: 12,
                weight: '500',
              },
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
                return `${context.dataset.label}: ${context.parsed.y} patients`;
              }
            }
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Tranches d'Âge",
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

    const ctx = document.getElementById("age-distribution-chart").getContext("2d");
    
    if (window.ageDistributionChart) {
      window.ageDistributionChart.destroy();
    }
    
    window.ageDistributionChart = new Chart(ctx, config);
    
    return () => {
      if (window.ageDistributionChart) {
        window.ageDistributionChart.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg border border-gray-100">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Répartition Démographique
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Voir détails
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <div className="relative h-80">
            <canvas id="age-distribution-chart"></canvas>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 rounded-b-lg border-t border-gray-100">
          <div className="flex justify-between text-sm text-blueGray-600">
            <span>Total patients: <strong>201</strong></span>
            <span>Âge moyen: <strong>47 ans</strong></span>
            <span>Ratio H/F: <strong>48% / 52%</strong></span>
          </div>
        </div>
      </div>
    </>
  );
}