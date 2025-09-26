import React from "react";

const PredictionDropdown = ({ onPredict, onViewHistory, onExport }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <button
        className="text-gray-600 hover:text-gray-900 py-1 px-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-xl border border-gray-200 min-w-48"
        }
      >
        <button
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
          }
          onClick={(e) => {
            e.preventDefault();
            onPredict();
            closeDropdownPopover();
          }}
        >
          <i className="fas fa-calculator mr-2"></i>Effectuer une prédiction
        </button>
        <button
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
          }
          onClick={(e) => {
            e.preventDefault();
            onViewHistory();
            closeDropdownPopover();
          }}
        >
          <i className="fas fa-history mr-2"></i>Voir l'historique
        </button>
        <button
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
          }
          onClick={(e) => {
            e.preventDefault();
            onExport();
            closeDropdownPopover();
          }}
        >
          <i className="fas fa-download mr-2"></i>Exporter les résultats
        </button>
      </div>
    </>
  );
};

export default PredictionDropdown;