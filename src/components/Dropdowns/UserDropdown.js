import React from "react";
import { createPopper } from "@popperjs/core";

const UserDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <a
  className="text-blueGray-500 block hover:text-blue-600 transition-colors duration-200"
  href="#pablo"
  ref={btnDropdownRef}
  onClick={(e) => {
    e.preventDefault();
    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
  }}
>
  <div className="items-center flex">
    {/* Conteneur circulaire avec overflow-hidden pour garantir la circularité */}
    <span className="w-12 h-12 text-sm text-white bg-blue-100 inline-flex items-center justify-center rounded-full border-2 border-blue-300 shadow-md overflow-hidden">
      <img
        alt="Profil médecin"
        className="w-full h-full object-cover" // object-cover pour remplir le cercle sans déformation
        src={require("assets/img/deuxm.jpg").default}
      />
    </span>
    <div className="ml-3 hidden md:block">
      <p className="text-sm font-semibold text-blueGray-700">Dr. Martin</p>
      <p className="text-xs text-blueGray-500">Diabétologue</p>
    </div>
  </div>
</a>
      
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-xl min-w-48 border border-gray-100"
        }
      >
        {/* En-tête du profil */}
        <div className="px-4 py-3 border-b border-gray-100">
          <p className="text-sm font-semibold text-blueGray-800">Dr. Martin</p>
          <p className="text-xs text-blueGray-500 truncate">martin@diabetacare.com</p>
        </div>
        
        <a
          href="#pablo"
          className={
            "text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
          }
          onClick={(e) => e.preventDefault()}
        >
          <i className="fas fa-user-circle mr-2 text-blue-500"></i>
          Mon Profil
        </a>
        
        <a
          href="#pablo"
          className={
            "text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
          }
          onClick={(e) => e.preventDefault()}
        >
          <i className="fas fa-cogs mr-2 text-green-500"></i>
          Paramètres
        </a>
        
        <a
          href="#pablo"
          className={
            "text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
          }
          onClick={(e) => e.preventDefault()}
        >
          <i className="fas fa-bell mr-2 text-yellow-500"></i>
          Notifications
          <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">3</span>
        </a>

        <div className="h-0 my-2 border border-solid border-gray-100" />
        
        <a
          href="#pablo"
          className={
            "text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
          }
          onClick={(e) => e.preventDefault()}
        >
          <i className="fas fa-question-circle mr-2 text-purple-500"></i>
          Aide & Support
        </a>
        
        <a
          href="#pablo"
          className={
            "text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
          }
          onClick={(e) => e.preventDefault()}
        >
          <i className="fas fa-sign-out-alt mr-2"></i>
          Déconnexion
        </a>

        {/* Pied de page avec version */}
        <div className="px-4 py-2 border-t border-gray-100">
          <p className="text-xs text-blueGray-400">v2.1.0 • DiabetaCare</p>
        </div>
      </div>
    </>
  );
};

export default UserDropdown;