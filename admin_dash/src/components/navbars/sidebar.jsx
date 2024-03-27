import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import PG from "../../assets/PG.svg";
import database from "../../assets/database.png";
import chart2 from "../../assets/chart2.png";
import tools from "../../assets/tools.png";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  // Define a CSS class based on the visibility state
  const sidebarClass = isVisible ? "lg:flex" : "hidden lg:flex";

  // Get the current location
  const location = useLocation();

  // Define local state to track active button
  const [activeButton, setActiveButton] = useState("");

  // Function to handle button click and set active button
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    toggleSidebar(); // Close sidebar after click (optional)
  };

  console.log("activeButton:", activeButton);
  console.log("location.pathname:", location.pathname);

  return (
    <>
      <nav className={`${sidebarClass} `}>
        <div
          id="sidebar1"
          className="flex items-center flex-col w-20 border-r-2 border-r-custom-slate h-screen"
        >
          <img className="w-10 py-4" src={PG} alt="" />
          <Link to="/chart">
            <button
              onClick={() => handleButtonClick("chart")}
              className={`w-11 object-contain p-2 rounded-xl my-3 opacity-80 hover:bg-custom-slate border-2 ${
                location.pathname === "/chart" && activeButton === "chart" ? "border-black" : ""
              }`}
            >
              <img className=" " src={chart2} alt="" />
            </button>
          </Link>
          <Link to="/database">
            <button
              onClick={() => handleButtonClick("database")}
              className={`w-11 object-contain p-2 rounded-xl my-3 opacity-80 hover:bg-custom-slate border-2 ${
                location.pathname === "/database" && activeButton === "database" ? "border-black" : ""
              }`}
            >
              <img className=" " src={database} alt="" />
            </button>
          </Link>
          <button
            onClick={() => handleButtonClick("tools")}
            className={`w-11 object-contain p-2 rounded-xl my-3 opacity-80 hover:bg-custom-slate border-2 ${
              activeButton === "tools" ? "border-black" : ""
            }`}
          >
            <img className=" " src={tools} alt="" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
