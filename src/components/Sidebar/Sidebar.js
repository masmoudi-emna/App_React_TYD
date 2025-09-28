// components/Sidebar/Sidebar.js - Version médicale
import React from "react";
import { Link, useLocation } from "react-router-dom";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const location = useLocation();

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Brand - Modifié pour DiabetaCare */}
          <Link
            className="md:block text-left md:pb-2 text-blue-600 mr-0 inline-block whitespace-nowrap text-lg uppercase font-bold p-4 px-0"
            to="/"
          >
            <i className="fas fa-heartbeat mr-2"></i>
            DiabetaCare
          </Link>

          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>

          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blue-600 mr-0 inline-block whitespace-nowrap text-lg uppercase font-bold p-4 px-0"
                    to="../layout/Admin.js"
                  >
                    <i className="fas fa-heartbeat mr-2"></i>
                    DiabetaCare
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Tableau de Bord Médical
            </h6>

            {/* Navigation Médicale */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (location.pathname === "/admin/dashboard"
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-tachometer-alt mr-2 text-sm " +
                      (location.pathname === "/admin/dashboard"
                        ? "text-blue-500"
                        : "text-blueGray-300")
                    }
                  ></i>
                  Tableau de Bord Médical
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (location.pathname === "/admin/patients"
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/patients"
                >
                  <i
                    className={
                      "fas fa-user-injured mr-2 text-sm " +
                      (location.pathname === "/admin/patients"
                        ? "text-blue-500"
                        : "text-blueGray-300")
                    }
                  ></i>
                  Patients
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (location.pathname === "/admin/rendezvous"
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/rendezvous"
                >
                  <i
                    className={
                      "fas fa-calendar-check mr-2 text-sm " +
                      (location.pathname === "/admin/rendezvous"
                        ? "text-blue-500"
                        : "text-blueGray-300")
                    }
                  ></i>
                  Rendez-vous
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (location.pathname === "/admin/predictiondiabete"
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/predictiondiabete"
                >
                  <i
                    className={
                      "fas fa-vial mr-2 text-sm " +
                      (location.pathname === "/admin/predictiondiabete"
                        ? "text-blue-500"
                        : "text-blueGray-300")
                    }
                  ></i>
                  Prediction du diabète type 2
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (location.pathname === "/admin/settings"
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/settings"
                >
                  <i
                    className={
                      "fas fa-cogs mr-2 text-sm " +
                      (location.pathname === "/admin/settings"
                        ? "text-blue-500"
                        : "text-blueGray-300")
                    }
                  ></i>
                  Paramètres
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Navigation rapide */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Actions Rapides
            </h6>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <a
                  href="/admin/ajouter-patient"
                  className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                >
                  <i className="fas fa-user-plus mr-2 text-sm text-blueGray-400"></i>
                  Ajouter Patient
                </a>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blue-500 text-xs uppercase py-2 font-bold block"
                  to="/admin/ajouterrendezvous"
                >
                  <i className="fas fa-plus-circle text-blueGray-400 mr-2 text-sm"></i>
                  Nouveau RDV
                </Link>
              </li>
              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blue-500 text-xs uppercase py-2 font-bold block"
                  to="/admin/diabetesdashboard"
                >
                  <i className="fas fa-chart-line text-blueGray-400 mr-2 text-sm"></i>
                  Dashboard Diabète type 2
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
