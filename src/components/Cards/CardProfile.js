import React from "react";

export default function CardProfile() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    156
                  </span>
                  <span className="text-sm text-blueGray-400">Patients</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    24
                  </span>
                  <span className="text-sm text-blueGray-400">Consultations/mois</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    12
                  </span>
                  <span className="text-sm text-blueGray-400">Années exp.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              Dr. Sophie Martin
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              Paris, France
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-stethoscope mr-2 text-lg text-blueGray-400"></i>
              Endocrinologue - Diabétologue
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              Université Paris Descartes
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-id-card mr-2 text-lg text-blueGray-400"></i>
              RPPS: 12345678901
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  Médecin endocrinologue spécialisée dans le traitement du diabète depuis 12 ans. 
                  Passionnée par l'innovation médicale et l'utilisation des technologies IA 
                  pour améliorer le diagnostic et le suivi des patients diabétiques.
                </p>
                <div className="mt-6">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Endocrinologie
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                    Diabétologie
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                    Nutrition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}