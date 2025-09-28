import React from 'react';

const DiabetesDashboard = () => {
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header compact */}
      <div className="bg-white border-b border-gray-200 flex-shrink-0">
        <div className="px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              
              
            </div>
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
              En ligne
            </span>
          </div>
        </div>
      </div>

      {/* Container Power BI - Prend tout l'espace restant */}
      <div className="flex-1 bg-white">
        <iframe
          src="https://app.powerbi.com/reportEmbed?reportId=0be67867-38e6-414d-8a83-75b31a0b28ed&autoAuth=true&ctid=76965b8b-46f0-455b-9d56-37a500464222"
          className="w-full h-full border-0"
          title="Dashboard Diabète Type 2"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default DiabetesDashboard;