import React from "react";
import Chart from "chart.js";

export default function CardPageVisits() {
  React.useEffect(() => {
    const config = {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "Diabète Type 1",
            backgroundColor: "rgba(66, 153, 225, 0.7)",
            borderColor: "#4299e1",
            pointRadius: 8,
            pointHoverRadius: 10,
            data: [
              {x: 115, y: 75}, {x: 120, y: 78}, {x: 118, y: 76}, {x: 122, y: 80},
              {x: 125, y: 82}, {x: 118, y: 77}, {x: 130, y: 85}, {x: 128, y: 83},
              {x: 122, y: 79}, {x: 135, y: 88}, {x: 119, y: 76}, {x: 126, y: 81}
            ],
          },
          {
            label: "Diabète Type 2",
            backgroundColor: "rgba(237, 100, 166, 0.7)",
            borderColor: "#ed64a6",
            pointRadius: 8,
            pointHoverRadius: 10,
            data: [
              {x: 135, y: 85}, {x: 142, y: 90}, {x: 138, y: 88}, {x: 145, y: 92},
              {x: 148, y: 95}, {x: 140, y: 89}, {x: 152, y: 98}, {x: 155, y: 100},
              {x: 143, y: 91}, {x: 158, y: 102}, {x: 139, y: 88}, {x: 150, y: 96}
            ],
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
                weight: '500',
              },
            },
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.parsed.x}/${context.parsed.y} mmHg`;
              }
            }
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Pression Artérielle Systolique (mmHg)",
              color: "#4a5568",
            },
            min: 110,
            max: 160,
            grid: {
              color: "rgba(226, 232, 240, 0.8)",
            },
          },
          y: {
            title: {
              display: true,
              text: "Pression Artérielle Diastolique (mmHg)",
              color: "#4a5568",
            },
            min: 70,
            max: 110,
            grid: {
              color: "rgba(226, 232, 240, 0.8)",
            },
          },
        },
      },
    };

    const ctx = document.getElementById("blood-pressure-chart").getContext("2d");
    
    if (window.bloodPressureChart) {
      window.bloodPressureChart.destroy();
    }
    
    window.bloodPressureChart = new Chart(ctx, config);
    
    return () => {
      if (window.bloodPressureChart) {
        window.bloodPressureChart.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg border border-gray-100">
        <div className="p-4 flex-auto">
          <div className="relative h-96">
            <canvas id="blood-pressure-chart"></canvas>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 rounded-b-lg border-t border-gray-100">
          <div className="grid grid-cols-2 gap-4 text-sm text-blueGray-600">
            <div>
              <span className="font-semibold">Type 1 Moyenne:</span> 122/79 mmHg
            </div>
            <div>
              <span className="font-semibold">Type 2 Moyenne:</span> 145/93 mmHg
            </div>
            <div>
              <span className="font-semibold text-red-600">Hypertension Type 2:</span> 42%
            </div>
            <div>
              <span className="font-semibold text-green-600">Normotendus Type 1:</span> 78%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}