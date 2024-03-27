// import { useState } from "react";
import menu from "../../assets/menu.png";
import moon from "../../assets/moon.svg";
import stargo from "../../assets/stargo.svg";
import notifications from "../../assets/notifications.png";

export const Navbar = ({ toggleSidebar,  }) => {
 return (
  <>
   <nav>
    <div className="flex justify-between p-3 overflow-x-hidden bg-custom-slate lg:hidden">
     <div
      onClick={toggleSidebar}
      id="Menu"
      className="bg-white rounded-full p-1 cursor-pointer"
     >
      <img className="object-contain" src={menu} alt="" />
     </div>
     <div className="flex gap-3">
      <div className="bg-white rounded-full p-1">
       <img className="object-contain " src={moon} alt="" />
      </div>
      <div className="bg-white rounded-full p-1">
       <img className="object-contain" src={stargo} alt="" />
      </div>
      <div className="bg-white rounded-full p-1">
       <img className="object-contain" src={notifications} alt="" />
      </div>
     </div>
    </div>
   </nav>
  </>
 );
};
