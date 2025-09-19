import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-blueGray-800"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-blueGray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-400 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="/"
                  className="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
                >
                  DiabetaCare
                </a>
                . Tous droits réservés.
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end justify-center">
                <li>
                  <a
                    href="/contact"
                    className="text-white hover:text-blue-300 text-sm font-semibold block py-1 px-3 transition duration-300"
                  >
                    <i className="fas fa-phone-alt mr-1 text-xs"></i>
                    Contact Urgent
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-white hover:text-blue-300 text-sm font-semibold block py-1 px-3 transition duration-300"
                  >
                    <i className="fas fa-shield-alt mr-1 text-xs"></i>
                    Confidentialité
                  </a>
                </li>
                <li>
                  <a
                    href="/help"
                    className="text-white hover:text-blue-300 text-sm font-semibold block py-1 px-3 transition duration-300"
                  >
                    <i className="fas fa-question-circle mr-1 text-xs"></i>
                    Aide
                  </a>
                </li>
                <li>
                  <a
                    href="/emergency"
                    className="text-red-300 hover:text-red-200 text-sm font-semibold block py-1 px-3 transition duration-300"
                  >
                    <i className="fas fa-exclamation-triangle mr-1 text-xs"></i>
                    Urgence Diabétique
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Ligne supplémentaire avec informations médicales */}
          <div className="text-center mt-4">
            <p className="text-xs text-blueGray-500">
              ⚕️ Service de diabétologie - Consultations sur rendez-vous
            </p>
            <p className="text-xs text-blueGray-500 mt-1">
              📞 Urgences: 15 (SAMU) | 🕒 Réponse sous 24h
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}