import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            {/* Carte avec effet miroir intense */}
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-2xl  backdrop-blur-3xl border border-white/30 shadow-2xl transform transition-all duration-300 hover:scale-105">
              
              {/* Reflet miroir en haut */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/40 to-transparent opacity-30 rounded-t-2xl"></div>
              
              {/* Reflets latéraux */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-white/20 opacity-40 rounded-l-2xl"></div>
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/20 opacity-40 rounded-r-2xl"></div>
              
              <div className="rounded-t mb-0 px-6 py-6 relative z-10">
                <div className="text-center mb-3">
                  <h2 className="text-white  font-bold drop-shadow-md">
                    Créer un compte 
                  </h2>
                </div>
                
                <hr className="mt-6 border-b-1 border-white/40" />
              </div>
              
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 relative z-10">
                
                <form>
                  <div className="relative w-full mb-4">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2 drop-shadow-md"
                      htmlFor="grid-password"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      className="border-0 px-4 py-3 placeholder-white/60 text-white bg-white/15 rounded-xl text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-white/40 w-full ease-linear transition-all duration-150 backdrop-blur-md"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div className="relative w-full mb-4">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2 drop-shadow-md"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-4 py-3 placeholder-white/60 text-white bg-white/15 rounded-xl text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-white/40 w-full ease-linear transition-all duration-150 backdrop-blur-md"
                      placeholder="Votre adresse email"
                    />
                  </div>

                  <div className="relative w-full mb-4">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2 drop-shadow-md"
                      htmlFor="grid-password"
                    >
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      className="border-0 px-4 py-3 placeholder-white/60 text-white bg-white/15 rounded-xl text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-white/40 w-full ease-linear transition-all duration-150 backdrop-blur-md"
                      placeholder="Votre mot de passe"
                    />
                  </div>

                  <div className="relative w-full mb-4">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2 drop-shadow-md"
                      htmlFor="grid-password"
                    >
                      Confirmer le mot de passe
                    </label>
                    <input
                      type="password"
                      className="border-0 px-4 py-3 placeholder-white/60 text-white bg-white/15 rounded-xl text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-white/40 w-full ease-linear transition-all duration-150 backdrop-blur-md"
                      placeholder="Confirmez votre mot de passe"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-white/90 bg-white/20 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-white/90 drop-shadow-md">
                        J'accepte la{" "}
                        <a
                          href="#pablo"
                          className="text-blue-300 hover:text-blue-200 transition duration-300"
                          onClick={(e) => e.preventDefault()}
                        >
                          Politique de Confidentialité
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-white/20 hover:bg-white/30 text-white active:bg-white/40 text-sm font-bold uppercase px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 border border-white/40 transform hover:-translate-y-1"
                      type="button"
                    >
                      Créer mon compte
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Liens en bas */}
            <div className="flex flex-wrap mt-8 relative">
              <div className="w-1/2">
                <Link 
                  to="/auth/forget"
                  className="text-white/80 hover:text-white text-sm font-medium transition duration-300 drop-shadow-md"
                >
                  <small>Mot de passe oublié ?</small>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/login" className="text-white/80 hover:text-white text-sm font-medium transition duration-300 drop-shadow-md">
                  <small>Déjà inscrit ? Se connecter</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}