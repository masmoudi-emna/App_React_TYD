/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Votre santé, notre priorité!
                <br></br>
                <hr></hr>
                Medecin Diabétologue spécialisé
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Prenez le contrôle de votre diabète avec un accompagnement
                personnalisé{" "}
              </p>
              <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  📅 Prendre rendez-vous en ligne
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  🚨 Urgences diabétiques
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-1 b-auto right-0 pt-16"
          style={{
            marginTop: "3px",
            width: "700px",
            height: "auto",
            maxHeight: "650px",
            borderRadius: "20px",
            background: "transparent",
            borderRadius: "25px",
            padding: "6px",

            borderRadius: "30px",
            display: "inline-block",
          }}
          src={require("assets/img/medecinfour.jpg").default}
          alt="Médecin diabétologue"
        />
      </section>

<section className="relative -mb-24 z-20 ">
  <div className="container mx-auto px-4">
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8 md:p-10 transform hover:-translate-y-1 transition-all duration-300">
      <div className="relative text-center px-6 z-10">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-tight drop-shadow-lg">
          <i class="fas fa-search-plus text-blue-400 text-2xl"></i> 
          Predire ton Diabète
        </h1>
        
        {/* Ligne décorative */}
        <div className="w-20 h-1 bg-white/80 mx-auto my-4 rounded-full"></div>
        
       
        <button className="bg-black text-white hover:bg-green-50  py-2 px-6 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300  mt-2">
          Maintenant tu peux savoir votre risque de diabète avec notre outil de prédiction avancé...

        </button>
        
        {/* Bouton moderne avec effet de profondeur */}
        <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
        </button>
        
      </div>
      
      {/* Élément décoratif */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full"></div>
      
    </div>
  </div>
  
</section>

<section className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen1">
  
      {/* Image de fond avec overlay */}
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
           style={{
             backgroundImage: `url(${require("assets/img/predire.jpg").default})`,
           }}>
        {/* Overlay avec opacité */}
        
        <span className="absolute top-0 w-full h-full bg-blueGray-800 opacity-50"></span>
      </div>
       {/* Contenu du cercle */}
      <div className="relative text-center px-6 z-10">
        
        
        {/* Ligne décorative */}
        <div className="w-16 h-1 bg-white/80 mx-auto my-3 rounded-full"></div>
        
        {/* Bouton simple */}
        <button className="bg-white text-green-700 hover:bg-green-50 font-bold py-2 px-6 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300  mt-2">
          <i class="fas fa-brain text-indigo-500 text-2xl"></i>
          Explorer les fonctionnalités et commencer l'analyse! 
        </button>
      </div>
  
      
      
    </section>




      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src={require("assets/img/medecinEtPatient.jpg").default}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Pathologies prises en charge
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Des technologies au service de votre santé
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-syringe text-blue-500"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Diabète Type 1
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Traitement et éducation thérapeutique
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-heartbeat text-red-500"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Diabète Type 2
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Suivi et prévention des complications
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-baby text-pink-500"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Diabète Gestationnel
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Accompagnement pendant la grossesse
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-shield-alt text-green-500"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Pré-diabète
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Programmes de prévention
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <div className="text-orange-500 text-3xl mb-4">
                  <i className="fas fa-chart-line"></i>
                </div>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Suivi personnalisé grâce aux nouvelles technologies
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Nous mettons à votre disposition les outils technologiques les
                plus avancés pour{" "}
                <strong>vous permettre de devenir acteur de votre santé</strong>{" "}
                et suivre votre état au quotidien en toute autonomie.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  📱 Capteurs Glycémiques
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  💉 Pompes à Insuline
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  🌐 Télémédecine
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  📊 Applications Mobile
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Analysez vos données facilement
                </span>
              </div>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                View All{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/medecinone.jpg").default}
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/dia1.jpg").default}
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/dia2.jpg").default}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src={require("assets/img/dia3.jpg").default}
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />

                <img
                  alt="..."
                  src={require("assets/img/dia4.jpg").default}
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              {/* Icône */}
              <div className="bg-blue-50 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md rounded-full border border-blue-200">
                <i className="fas fa-users text-xl text-blue-600"></i>
              </div>

              {/* Titre */}
              <h3 className="text-2xl mb-4 font-bold text-gray-800">
                Un accompagnement pas à pas
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Notre équipe médicale vous guide à travers chaque étape de votre
                parcours santé, en combinant expertise médicale et technologies
                modernes pour un suivi optimal.
              </p>

              {/* Chiffre clé */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-500">
                  de patients satisfaits du parcours
                </div>
              </div>

              {/* Lien vers plus d'info */}
              <a
                href="#parcours"
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
              >
                <span>Découvrir le parcours détaillé</span>
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  {/* Étape 1 */}
                  <div className="text-center mb-8">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg rounded-full text-center p-8 w-44 h-44 mx-auto flex items-center justify-center border-2 border-blue-300">
                      <div className="text-center">
                        <div className="text-blue-800 text-3xl font-bold mb-2">
                          1
                        </div>
                        <div className="text-blue-600 text-5xl mb-2">📞</div>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold mt-4 text-gray-800">
                      Premier contact téléphonique
                    </h4>
                    <p className="text-gray-600 text-sm mt-2">
                      Évaluation initiale de vos besoins
                    </p>
                  </div>

                  {/* Étape 2 */}
                  <div className="text-center mb-8">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 shadow-lg rounded-full text-center p-8 w-44 h-44 mx-auto flex items-center justify-center border-2 border-green-300">
                      <div className="text-center">
                        <div className="text-green-800 text-3xl font-bold mb-2">
                          2
                        </div>
                        <div className="text-green-600 text-5xl mb-2">🏥</div>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold mt-4 text-gray-800">
                      Première consultation
                    </h4>
                    <p className="text-gray-600 text-sm mt-2">
                      Bilan complet et création du dossier
                    </p>
                  </div>

                  {/* Étape 3 */}
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-purple-100 to-purple-200 shadow-lg rounded-full text-center p-8 w-44 h-44 mx-auto flex items-center justify-center border-2 border-purple-300">
                      <div className="text-center">
                        <div className="text-purple-800 text-3xl font-bold mb-2">
                          3
                        </div>
                        <div className="text-purple-600 text-5xl mb-2">👤</div>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold mt-4 text-gray-800">
                      Création du compte
                    </h4>
                    <p className="text-gray-600 text-sm mt-2">
                      Accès à votre espace patient sécurisé
                    </p>
                  </div>
                </div>

                <div className="my-4 w-full lg:w-6/12 px-4">
                  {/* Étape 4 */}
                  <div className="text-center mb-8">
                    <div className="bg-gradient-to-br from-orange-100 to-orange-200 shadow-lg rounded-full text-center p-8 w-44 h-44 mx-auto flex items-center justify-center border-2 border-orange-300">
                      <div className="text-center">
                        <div className="text-orange-800 text-3xl font-bold mb-2">
                          4
                        </div>
                        <div className="text-orange-600 text-5xl mb-2">📊</div>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold mt-4 text-gray-800">
                      Suivi personnalisé
                    </h4>
                    <p className="text-gray-600 text-sm mt-2">
                      Saisie de vos données de santé
                    </p>
                  </div>

                  {/* Étape 5 */}
                  <div className="text-center mb-8">
                    <div className="bg-gradient-to-br from-red-100 to-red-200 shadow-lg rounded-full text-center p-8 w-44 h-44 mx-auto flex items-center justify-center border-2 border-red-300">
                      <div className="text-center">
                        <div className="text-red-800 text-3xl font-bold mb-2">
                          5
                        </div>
                        <div className="text-red-600 text-5xl mb-2">💻</div>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold mt-4 text-gray-800">
                      Autonomie complète
                    </h4>
                    <p className="text-gray-600 text-sm mt-2">
                      Gestion en ligne de votre santé
                    </p>
                  </div>

                  {/* Étape 6 */}
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-teal-100 to-teal-200 shadow-lg rounded-full text-center p-8 w-44 h-44 mx-auto flex items-center justify-center border-2 border-teal-300">
                      <div className="text-center">
                        <div className="text-teal-800 text-3xl font-bold mb-2">
                          6
                        </div>
                        <div className="text-teal-600 text-5xl mb-2">🔄</div>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold mt-4 text-gray-800">
                      Suivi continu
                    </h4>
                    <p className="text-gray-600 text-sm mt-2">
                      Adaptation continue du traitement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


<div className="container mx-auto px-4 pb-32 pt-48">
  <div className="items-center flex flex-wrap">
    <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
      <div className="md:pr-12">
        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
          <i className="fas fa-heartbeat text-xl"></i>
        </div>
        <h3 className="text-3xl font-semibold">
          Suivi Médical Complet
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
          Notre plateforme vous offre un accompagnement personnalisé pour la gestion 
          de votre diabète. Accédez à vos données de santé, suivez votre traitement 
          et restez connecté avec votre équipe médicale en toute simplicité.
        </p>
        <ul className="list-none mt-6">
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
              <div>
                <h4 className="text-blueGray-500">
                  Données Sécurisées et Confidentiales
                </h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                  <i className="fas fa-chart-line"></i>
                </span>
              </div>
              <div>
                <h4 className="text-blueGray-500">
                  Suivi Personnalisé en Temps Réel
                </h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                  <i className="fas fa-mobile-alt"></i>
                </span>
              </div>
              <div>
                <h4 className="text-blueGray-500">
                  Accessible sur Tous Vos Appareils
                </h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
      <img
        alt="Interface de suivi médical"
        className="max-w-full rounded-lg shadow-xl"
        style={{
          transform:
            "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
        }}
        src={require("assets/img/videoframe1.png").default}
      />
    </div>
  </div>
</div>


        <div className="container mx-auto">
        
          </div>
        
      </section>

      <Footer />
    </>
  );
}
