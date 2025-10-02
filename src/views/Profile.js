import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Profile() {
  const history = useHistory();

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block" style={{ height: "300px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${require("assets/img/profil2.jpg").default})`,
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
              <div className="px-8 py-8">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-6 lg:order-2 flex justify-center">
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

                <div className="text-center mt-24">
                  <h3 className="text-4xl font-semibold leading-normal mb-4 text-blueGray-700">
                    Marie Dupont
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-4 text-blue-600 font-bold uppercase">
                    <i className="fas fa-heartbeat mr-2 text-lg text-blue-600"></i>{" "}
                    Patient Diabétique Type 2
                  </div>
                  <div className="mb-3 text-blueGray-600">
                    <i className="fas fa-user-md mr-2 text-lg text-blueGray-400"></i>
                    Dr. Martin - Diabétologue
                  </div>
                  <div className="mb-3 text-blueGray-600">
                    <i className="fas fa-calendar-alt mr-2 text-lg text-blueGray-400"></i>
                    Prochain RDV: 15/12/2024
                  </div>
                </div>

                {/* Indicateurs de santé */}
                <div className="flex justify-center py-8">
                  <div className="flex flex-wrap justify-center gap-8">
                    <div className="p-6 text-center">
                      <span className="text-2xl font-bold block text-blue-600">
                        6.2%
                      </span>
                      <span className="text-sm text-blueGray-400">HbA1c</span>
                    </div>
                    <div className="p-6 text-center">
                      <span className="text-2xl font-bold block text-green-600">
                        125
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Glycémie
                      </span>
                    </div>
                    <div className="p-6 text-center">
                      <span className="text-2xl font-bold block text-purple-600">
                        24.8
                      </span>
                      <span className="text-sm text-blueGray-400">IMC</span>
                    </div>
                  </div>
                </div>

                {/* Section des fonctionnalités patient - DÉBUT */}
                <div className="mt-8 py-10 border-t border-blueGray-200">
                  <h2 className="text-3xl font-bold text-center text-blueGray-700 mb-10 px-4">
                    Mes Fonctionnalités
                  </h2>

                  <div className="flex flex-wrap justify-center gap-8 mb-10">
                    {/* 1. Voir Mon Dossier */}
                    <div className="w-full md:w-5/12 lg:w-3/12 px-6 text-center mb-8">
                      <div className="bg-blue-50 p-8 rounded-lg shadow hover:shadow-md transition duration-300 border border-blue-100 h-full flex flex-col">
                        <i className="fas fa-folder-open text-lightBlue-600  text-3xl mb-6"></i>
                        <h4 className="text-lg font-semibold text-blueGray-700 mb-4 px-2">
                          Voir Mon Dossier
                        </h4>
                        <p className="text-sm text-blueGray-600 mb-6 px-3 leading-relaxed flex-grow">
                          Consultez votre dossier médical complet
                        </p>
                        <button 
                          onClick={() => history.push('/voir-dossier')}
                          className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-8 py-3 rounded-lg w-full transition duration-300 transform hover:scale-105"
                        >
                          Voir Dossier
                        </button>
                      </div>
                    </div>

                    {/* 2. Prendre Rendez-vous */}
                    <div className="w-full md:w-5/12 lg:w-3/12 px-6 text-center mb-8">
                      <div className="bg-green-50 p-8 rounded-lg shadow hover:shadow-md transition duration-300 border border-green-100 h-full flex flex-col">
                        <i className="fas fa-calendar-check text-red-500  text-3xl mb-6"></i>
                        <h4 className="text-lg font-semibold text-blueGray-700 mb-4 px-2">
                          Prendre Rendez-vous
                        </h4>
                        <p className="text-sm text-blueGray-600 mb-6 px-3 leading-relaxed flex-grow">
                          Prendre un nouveau rendez-vous en ligne
                        </p>
                        <button 
                          onClick={() => alert("Fonctionnalité: Prendre rendez-vous")}
                          className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-8 py-3 rounded-lg w-full transition duration-300 transform hover:scale-105"
                        >
                          Prendre RDV
                        </button>
                      </div>
                    </div>

                    {/* 3. Donner Avis */}
                    <div className="w-full md:w-5/12 lg:w-3/12 px-6 text-center mb-8">
                      <div className="bg-orange-50 p-8 rounded-lg shadow hover:shadow-md transition duration-300 border border-orange-100 h-full flex flex-col">
                        <i className="fas fa-comment-medical text-green-700 text-3xl mb-6"></i>
                        <h4 className="text-lg font-semibold text-blueGray-700 mb-4 px-2">
                          Donner Avis
                        </h4>
                        <p className="text-sm text-blueGray-600 mb-6 px-3 leading-relaxed flex-grow">
                          Donnez votre avis sur votre traitement
                        </p>
                        <button 
                          onClick={() => alert("Fonctionnalité: Donner avis")}
                          className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-8 py-3 rounded-lg w-full transition duration-300 transform hover:scale-105"
                        >
                          Donner Avis
                        </button>
                      </div>
                    </div>

                    {/* 4. Message Docteur */}
                    <div className="w-full md:w-5/12 lg:w-3/12 px-6 text-center mb-8">
                      <div className="bg-purple-50 p-8 rounded-lg shadow hover:shadow-md transition duration-300 border border-purple-100 h-full flex flex-col">
                        <i className="fas fa-envelope text-teal-500 text-3xl mb-6"></i>
                        <h4 className="text-lg font-semibold text-blueGray-700 mb-4 px-2">
                          Message Docteur
                        </h4>
                        <p className="text-sm text-blueGray-600 mb-6 px-3 leading-relaxed flex-grow">
                          Envoyer un message à votre médecin
                        </p>
                        <button 
                          onClick={() => alert("Fonctionnalité: Message docteur")}
                          className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-8 py-3 rounded-lg w-full transition duration-300 transform hover:scale-105"
                        >
                          Contacter
                        </button>
                      </div>
                    </div>
                  </div>
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