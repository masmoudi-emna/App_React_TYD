import React from "react";
import PropTypes from "prop-types";

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-500 uppercase font-bold text-xs tracking-wide">
                {statSubtitle}
              </h5>
              <span className="font-bold text-2xl text-blueGray-800 block mt-1">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full transition-transform duration-300 hover:scale-110 " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-500 mt-4 pt-3 border-t border-blueGray-100">
            <span className={statPercentColor + " font-semibold mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up mr-1"
                    : statArrow === "down"
                    ? "fas fa-arrow-down mr-1"
                    : "fas fa-minus mr-1"
                }
              ></i>
              {statPercent}%
            </span>
            <span className="whitespace-nowrap text-blueGray-400">
              {statDescripiron}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

CardStats.defaultProps = {
  statSubtitle: "Indicateur",
  statTitle: "0",
  statArrow: "up",
  statPercent: "0",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Depuis le mois dernier", // Traduit en français
  statIconName: "fas fa-chart-bar",
  statIconColor: "bg-blue-500",
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  statArrow: PropTypes.oneOf(["up", "down", ""]),
  statPercent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  statIconColor: PropTypes.string,
};