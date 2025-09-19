/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gradient-to-r from-blue-800 to-blue-600 shadow-md">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase hover:text-blue-100 transition duration-300"
              to="/"
            >
              <i className="fas fa-heartbeat mr-2"></i>
              DiabetaCare
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none text-white hover:text-blue-100"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded-lg shadow-lg bg-blue-700 mt-2" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="text-white hover:text-blue-100 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-semibold transition duration-300"
                  href="/about"
                >
                  <i className="fas fa-info-circle mr-2 text-sm"></i>
                  À propos
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="text-white hover:text-blue-100 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-semibold transition duration-300"
                  href="/services"
                >
                  <i className="fas fa-stethoscope mr-2 text-sm"></i>
                  Services
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
              
              <li className="flex items-center">
                <a
                  className="text-white hover:text-blue-100 px-3 py-4 lg:py-2 flex items-center text-sm font-semibold transition duration-300"
                  href="/contact"
                >
                  <i className="fas fa-phone-alt mr-2 text-sm"></i>
                  Contact
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="text-white hover:text-blue-100 px-3 py-4 lg:py-2 flex items-center text-sm font-semibold transition duration-300"
                  href="/urgence"
                >
                  <i className="fas fa-exclamation-triangle mr-2 text-sm"></i>
                  Urgence
                </a>
              </li>

              <li className="flex items-center">
                <Link
                  to="/auth/login"
                  className="text-white hover:text-blue-100 px-3 py-4 lg:py-2 flex items-center text-sm font-semibold transition duration-300"
                >
                  <i className="fas fa-sign-in-alt mr-2 text-sm"></i>
                  Connexion
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  to="/auth/register"
                  className="bg-white text-blue-700 hover:bg-blue-50 ml-3 px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
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