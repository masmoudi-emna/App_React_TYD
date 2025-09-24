import React from "react";
import Chart from "chart.js";

export default function CardSocialTraffic() {
  React.useEffect(() => {
    const config = {
      type: "line",
      data: {
        labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"],
        datasets: [
          {
            label: "Patient A - Marie DUPONT",
            backgroundColor: "rgba(66, 153, 225, 0.1)",
            borderColor: "#4299e1",
            pointBackgroundColor: "#4299e1",
            data: [31.2, 30.5, 29.8, 29.1, 28.4, 27.9, 27.3, 26.8, 26.2, 25.8, 25.3, 24.9],
            tension: 0.4,
          },
          {
            label: "Patient B - Pierre MARTIN",
            backgroundColor: "rgba(237, 100, 166, 0.1)",
            borderColor: "#ed64a6",
            pointBackgroundColor: "#ed64a6",
            data: [29.8, 29.2, 28.7, 28.1, 27.6, 27.2, 26.8, 26.4, 26.0, 25.7, 25.4, 25.1],
            tension: 0.4,
          },
          {
            label: "Patient C - Sophie LEROY",
            backgroundColor: "rgba(72, 187, 120, 0.1)",
            borderColor: "#48bb78",
            pointBackgroundColor: "#48bb78",
            data: [28.5, 28.0, 27.6, 27.2, 26.8, 26.5, 26.2, 25.9, 25.6, 25.4, 25.2, 25.0],
            tension: 0.4,
          },
          {
            label: "Objectif IMC Santé",
            borderColor: "#a0aec0",
            borderWidth: 2,
            borderDash: [5, 5],
            pointRadius: 0,
            data: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
            tension: 0,
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
            },
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
        scales: {
          x: {
            title: { display: true, text: "Mois de suivi" },
          },
          y: {
            title: { display: true, text: "IMC (kg/m²)" },
            min: 24,
            max: 32,
          },
        },
      },
    };

    const ctx = document.getElementById("bmi-trend-chart").getContext("2d");
    if (window.bmiTrendChart) window.bmiTrendChart.destroy();
    window.bmiTrendChart = new Chart(ctx, config);
    
    return () => {
      if (window.bmiTrendChart) window.bmiTrendChart.destroy();
    };
  }, []);

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg border border-gray-100">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-blueGray-700">
              Comparaison de l'Évolution de l'IMC
            </h3>
            <p className="text-sm text-blueGray-500">Suivi de 3 patients sur 12 mois</p>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-80">
          <canvas id="bmi-trend-chart"></canvas>
        </div>
      </div>
    </div>
  );
}