import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blue-50 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
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
              className="text-blue-50 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-blue-900">Prendre rendez-vous</h4>
              <h5 className="text-lg mt-0 mb-2 text-blue-700">
                Contactez-nous pour toute question ou pour planifier une consultation.
              </h5>
              <div className="mt-4 mb-6">
                <p className="text-blue-800 flex items-center justify-center lg:justify-start mb-2">
                  <i className="fas fa-phone-alt mr-2"></i>
                  <span>01 23 45 67 89</span>
                </p>
                <p className="text-blue-800 flex items-center justify-center lg:justify-start mb-2">
                  <i className="fas fa-envelope mr-2"></i>
                  <span>contact@diabetologue-exemple.fr</span>
                </p>
                <p className="text-blue-800 flex items-center justify-center lg:justify-start">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>123 Avenue de la Santé, 75000 Paris</span>
                </p>
              </div>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-blue-600 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition duration-150 ease-in-out hover:bg-blue-700"
                  type="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button
                  className="bg-blue-400 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition duration-150 ease-in-out hover:bg-blue-500"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-blue-800 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition duration-150 ease-in-out hover:bg-blue-900"
                  type="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </button>
                <button
                  className="bg-blue-700 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition duration-150 ease-in-out hover:bg-blue-800"
                  type="button"
                >
                  <i className="fas fa-calendar-alt"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-6/12 px-4 ml-auto">
                  <span className="block uppercase text-blue-800 text-sm font-semibold mb-2">
                    Informations pratiques
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-900 font-semibold block pb-2 text-sm transition-colors duration-150"
                        href="/consultation"
                      >
                        Consultations
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-900 font-semibold block pb-2 text-sm transition-colors duration-150"
                        href="/hypoglycemie"
                      >
                        Urgences hypoglycémie
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-900 font-semibold block pb-2 text-sm transition-colors duration-150"
                        href="/education-therapeutique"
                      >
                        Éducation thérapeutique
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-900 font-semibold block pb-2 text-sm transition-colors duration-150"
                        href="/horaires"
                      >
                        Horaires & Accès
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <span className="block uppercase text-blue-800 text-sm font-semibold mb-2">
                    Ressources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-900 font-semibold block pb-2 text-sm transition-colors duration-150"
                        href="/diabete-type1"
                      >
                        Diabète de type 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-900 font-semibold block pb-2 text-sm transition-colors duration-150"
                        href="/diabete-type2"
                      >
                        Diabète de type 2
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-900 font-semibold block pb-2 text-sm transition-colors duration-150"
                        href="/nutrition"
                      >
                        Conseils nutritionnels
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-900 font-semibold block pb-2 text-sm transition-colors duration-150"
                        href="/faq"
                      >
                        Foire aux questions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blue-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-5/12 px-4 mx-auto text-center">
              <div className="text-sm text-blue-700 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Dr. [Nom du Médecin] - Diabétologue. Tous droits réservés.
              </div>
              <div className="text-xs text-blue-600 mt-1">
                <a href="/confidentialite" className="hover:text-blue-900 mx-2">Politique de confidentialité</a> | 
                <a href="/mentions-legales" className="hover:text-blue-900 mx-2">Mentions légales</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}