/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl border-b-4 border-blue-300">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase transition duration-300 hover:scale-105"
            >
              <i className="fas fa-heartbeat mr-2 text-red-500"></i>
              <span className="text-red-500">Diabet</span><span className="text-green-700">Care</span>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-blue-300 rounded bg-white block lg:hidden outline-none focus:outline-none text-blue-600 transition duration-300 hover:bg-blue-50 shadow-lg animate-pulse"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-gradient-to-b from-white to-blue-50 lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded-lg mt-2 shadow-xl border border-blue-100" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link
                  to="/"
                  className="hover:text-blue-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold transition duration-300 relative group"
                >
                  <i className="fas fa-home text-blue-500 text-lg leading-lg mr-2 transition duration-300 group-hover:scale-110" />{" "}
                  <span className="relative">
                    Accueil
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/services"
                  className="hover:text-blue-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold transition duration-300 relative group"
                >
                  <i className="fas fa-stethoscope text-blue-500 text-lg leading-lg mr-2 transition duration-300 group-hover:scale-110" />{" "}
                  <span className="relative">
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/about"
                  className="hover:text-blue-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold transition duration-300 relative group"
                >
                  <i className="fas fa-user-md text-blue-500 text-lg leading-lg mr-2 transition duration-300 group-hover:scale-110" />{" "}
                  <span className="relative">
                    Médecins
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/contact"
                  className="hover:text-blue-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold transition duration-300 relative group"
                >
                  <i className="fas fa-phone text-blue-500 text-lg leading-lg mr-2 transition duration-300 group-hover:scale-110" />{" "}
                  <span className="relative">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
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
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-black px-4 py-2 rounded-lg flex items-center text-sm font-bold transition duration-300 shadow-lg hover:shadow-xl mx-2 hover:-translate-y-0.5"
                >
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  Connexion
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/auth/register"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-4 py-2 rounded-lg flex items-center text-sm font-bold transition duration-300 shadow-lg hover:shadow-xl mx-2 hover:-translate-y-0.5"
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