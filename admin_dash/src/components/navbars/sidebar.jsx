import { Link } from "react-router-dom";
import PG from "../../assets/PG.svg";
import database from "../../assets/database.png";
import chart2 from "../../assets/chart2.png";
import tools from "../../assets/tools.png";


const Sidebar = () => {
 return (
  <>
  
   <nav className="hidden lg:flex">
    <div
     id="sidebar1"
     className="flex items-center flex-col w-20 border-r-2 border-r-custom-slate h-screen"
    >
     <img className="w-10 py-4" src={PG} alt="" />
     <button className="w-11 object-contain p-2 rounded-xl my-3 opacity-80 hover:bg-custom-slate  focus:border-2 focus:border-black transition-transform duration-4000 ease-in-out">
      <img className=" " src={chart2} alt="" />
     </button>
     <Link to="/database">
      <button
       id="database"
       className="w-11 object-contain p-2 rounded-xl my-3 opacity-80 hover:bg-custom-slate  focus:border-2 focus:border-black"
      >
       <img className=" " src={database} alt="" />
      </button>
     </Link>
     <button className="w-11 object-contain p-2 rounded-xl my-3 opacity-80 hover:bg-custom-slate  focus:border-2 focus:border-black">
      <img className=" " src={tools} alt="" />
     </button>
    </div>
   </nav>
  </>
 );
};

export default Sidebar;
