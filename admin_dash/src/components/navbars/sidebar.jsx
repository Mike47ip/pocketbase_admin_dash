import PG from "../../assets/PG.svg";
import database from "../../assets/database.png";
import chart2 from "../../assets/chart2.png";
import tools from "../../assets/tools.png";
import users from "../../assets/users.png";
import folder from "../../assets/folder.png";
import mail from "../../assets/mail.png";

const Sidebar = () => {
 return (
  <>
   <section className="flex">
    <div
     id="sidebar1"
     className="flex items-center flex-col w-20 border-r-2 border-r-custom-slate h-screen"
    >
     <img className="w-10 py-4" src={PG} alt="" />
     <img className="w-6 py-5 opacity-80" src={chart2} alt="" />
     <img className="w-6 py-5 opacity-80" src={database} alt="" />
     <img className="w-6 py-5 opacity-80" src={tools} alt="" />
    </div>

    <div
     id="sidebar2"
     className="flex items-center flex-col w-56 border-r-2 border-r-custom-slate h-screen"
    >
     <div className="flex justify-center border-b-2 border-custom-slate pb-7 w-full">
      <input
       type="text"
       className="border border-gray-300 bg-custom-slate rounded-md px-3 py-4 h-7 w-48 mt-9 text-sm focus:outline-none focus:border-blue-500"
       placeholder="Search collection..."
      />
     </div>
     <div>
      <button className="flex justify-start gap-1 items-center hover:bg-custom-slate w-48 focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
        <img className="opacity-50 object-contain w-5 " src={users} alt="" />
        <p>Users</p>
      </button> 
      <button className="flex justify-start gap-1 items-center hover:bg-custom-slate w-48 focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
        <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
        <p>Author</p>
      </button> 
      <button className="flex justify-start gap-1 items-center hover:bg-custom-slate w-48 focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
        <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
        <p>Book</p>
      </button> 
      <button className="flex justify-start gap-1 items-center hover:bg-custom-slate w-48 focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
        <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
        <p>Luggage</p>
      </button> 
      <button className="flex justify-start gap-1 items-center hover:bg-custom-slate w-48 focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
        <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
        <p>Messages</p>
      </button> 
      <button className="flex justify-start gap-1 items-center hover:bg-custom-slate w-48 focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
        <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
        <p>Plans</p>
      </button> 
      <button className="flex justify-start gap-1 items-center hover:bg-custom-slate w-48 focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
        <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
        <p>Posts</p>
      </button> 
     </div>
    </div>
   </section>
  </>
 );
};

export default Sidebar;
