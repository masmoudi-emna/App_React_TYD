import React from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function PatientDashboard() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block" style={{ height: "300px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${
                require("assets/img/profil2.jpg").default
              })`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-48">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="Profil patient"
                        src={require("assets/img/team-2-800x800.jpg").default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ width: "150px", height: "150px" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-20">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Marie Dupont
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blue-600 font-bold uppercase">
                    <i className="fas fa-heartbeat mr-2 text-lg text-blue-600"></i>{" "}
                    Patient Diabétique Type 2
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-user-md mr-2 text-lg text-blueGray-400"></i>
                    Dr. Martin - Diabétologue
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-calendar-alt mr-2 text-lg text-blueGray-400"></i>
                    Prochain RDV: 15/12/2024
                  </div>
                </div>

                {/* Indicateurs de santé */}
                <div className="flex justify-center py-8">
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="p-4 text-center">
                      <span className="text-2xl font-bold block text-blue-600">
                        6.2%
                      </span>
                      <span className="text-sm text-blueGray-400">HbA1c</span>
                    </div>
                    <div className="p-4 text-center">
                      <span className="text-2xl font-bold block text-green-600">
                        125
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Glycémie
                      </span>
                    </div>
                    <div className="p-4 text-center">
                      <span className="text-2xl font-bold block text-purple-600">
                        24.8
                      </span>
                      <span className="text-sm text-blueGray-400">IMC</span>
                    </div>
                  </div>
                </div>

                {/* Section des fonctionnalités patient - DÉBUT */}
                <div className="mt-8 py-8 border-t border-blueGray-200">
                  <h2 className="text-3xl font-bold text-center text-blueGray-700 mb-8">
                    Mes Fonctionnalités
                  </h2>

                  <div className="flex flex-wrap justify-center gap-6 mb-8">
                    {/* 3. Calcul IMC */}
                    <div className="w-full md:w-5/12 lg:w-3/12 px-4 text-center">
                      <div className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300 border border-purple-100">
                        <i className="fas fa-vial text-blue-500 text-3xl mb-4"></i>
                        <h4 className="text-lg font-semibold text-blueGray-700 mb-2">
                          Mes Analyses
                        </h4>
                        <p className="text-sm text-blueGray-600 mb-4">
                          Consultez vos derniers résultats glycémiques
                        </p>
                        <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-2 rounded-lg w-full transition duration-300 transform hover:scale-105">
                          Voir Analyses
                        </button>
                      </div>
                    </div>
                    {/* 5. Message docteur */}
                    <div className="w-full md:w-5/12 lg:w-3/12 px-4 text-center">
                      <div className="bg-red-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300 border border-red-100">
                        <i className="fas fa-calendar-check text-green-500 text-3xl mb-4"></i>
                        <h4 className="text-lg font-semibold text-blueGray-700 mb-2">
                          Rendez-vous
                        </h4>
                        <p className="text-sm text-blueGray-600 mb-4">
                          Prendre un nouveau rendez-vous en ligne
                        </p>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-lg w-full transition duration-300 transform hover:scale-105">
                          Prendre RDV
                        </button>
                      </div>
                    </div>

                    {/* 3. Calcul IMC */}
                    <div className="w-full md:w-5/12 lg:w-3/12 px-4 text-center">
                      <div className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300 border border-purple-100">
                        <i className="fas fa-weight-scale text-purple-500 text-3xl mb-4"></i>
                        <h4 className="text-lg font-semibold text-blueGray-700 mb-2">
                          Calcul IMC
                        </h4>
                        <p className="text-sm text-blueGray-600 mb-4">
                          Calculez votre indice de masse corporelle
                        </p>
                        <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-2 rounded-lg w-full transition duration-300 transform hover:scale-105">
                          Calculer IMC
                        </button>
                      </div>
                    </div>

                    {/* 4. Feedback */}
                    <div className="w-full md:w-5/12 lg:w-3/12 px-4 text-center">
                      <div className="bg-orange-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300 border border-orange-100">
                        <i className="fas fa-comment-medical text-orange-500 text-3xl mb-4"></i>
                        <h4 className="text-lg font-semibold text-blueGray-700 mb-2">
                          Feedback
                        </h4>
                        <p className="text-sm text-blueGray-600 mb-4">
                          Donnez votre avis sur votre traitement
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-lg w-full transition duration-300 transform hover:scale-105">
                          Donner Feedback
                        </button>
                      </div>
                    </div>

                    {/* 5. Message docteur */}
                    <div className="w-full md:w-5/12 lg:w-3/12 px-4 text-center">
                      <div className="bg-red-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300 border border-red-100">
                        <i className="fas fa-envelope text-red-500 text-3xl mb-4"></i>
                        <h4 className="text-lg font-semibold text-blueGray-700 mb-2">
                          Message Docteur
                        </h4>
                        <p className="text-sm text-blueGray-600 mb-4">
                          Envoyer un message à votre médecin
                        </p>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-lg w-full transition duration-300 transform hover:scale-105">
                          Contacter
                        </button>
                      </div>
                    </div>

                    {/* 6. Suivi quotidien */}
                    <div className="w-full md:w-5/12 lg:w-3/12 px-4 text-center">
                      <div className="bg-teal-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300 border border-teal-100">
                        <i className="fas fa-chart-line text-teal-500 text-3xl mb-4"></i>
                        <h4 className="text-lg font-semibold text-blueGray-700 mb-2">
                          Suivi Quotidien
                        </h4>
                        <p className="text-sm text-blueGray-600 mb-4">
                          Saisir vos mesures glycémiques quotidiennes
                        </p>
                        <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-2 rounded-lg w-full transition duration-300 transform hover:scale-105">
                          Saisir Mesures
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Section des fonctionnalités patient - FIN */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
