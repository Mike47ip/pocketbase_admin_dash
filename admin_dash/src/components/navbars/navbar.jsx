import menu from "../../assets/menu.png";
import moon from "../../assets/moon.svg";
import stargo from "../../assets/stargo.svg";

export const Navbar = () => {
 return (
  <>
   <nav>
    <div className="flex justify-between p-3 overflow-x-hidden bg-slate-600">
     <img className="object-contain" src={menu} alt="" />

     <div className="flex gap-3">
      <img className="object-contain " src={moon} alt="" />
      <img className="object-contain" src={stargo} alt="" />
     </div>
    </div>
   </nav>
  </>
 );
};
