/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow-lg border-b border-blue-100">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blue-600 text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <i className="fas fa-heartbeat mr-2"></i>
              DiabetaCare
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none text-blue-600"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded-lg mt-2 shadow-md" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link
                  to="/"
                  className="hover:text-blue-600 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-semibold transition duration-300"
                >
                  <i className="fas fa-home text-blue-500 text-lg leading-lg mr-2" />{" "}
                  Accueil
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/services"
                  className="hover:text-blue-600 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-semibold transition duration-300"
                >
                  <i className="fas fa-stethoscope text-blue-500 text-lg leading-lg mr-2" />{" "}
                  Services
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/about"
                  className="hover:text-blue-600 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-semibold transition duration-300"
                >
                  <i className="fas fa-user-md text-blue-500 text-lg leading-lg mr-2" />{" "}
                  Médecins
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/contact"
                  className="hover:text-blue-600 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-semibold transition duration-300"
                >
                  <i className="fas fa-phone text-blue-500 text-lg leading-lg mr-2" />{" "}
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              
              {/* Boutons d'action */}
              <li className="flex items-center">
                <Link
                  to="/auth/login"
                  className="text-blue-600 hover:text-blue-800 px-3 py-4 lg:py-2 flex items-center text-sm font-semibold transition duration-300"
                >
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  Connexion
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/auth/register"
                  className="text-blue-600 hover:text-blue-800 px-3 py-4 lg:py-2 flex items-center text-sm font-semibold transition duration-300"
                >
                  <i className="fas fa-user-plus mr-2"></i>
                  Inscription
                </Link>
              </li>
              
              

              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}