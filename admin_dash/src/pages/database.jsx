import settings from "../assets/settings.png";
import refresh from "../assets/refresh.png";
import users from "../assets/users.png";
import folder from "../assets/folder.png";
import mail from "../assets/mail.png";

const Database = () => {
 return (
  <>
   <section>
    <div className="flex w-[100%]">
     <div
      id="sidebar2"
      className="flex items-center flex-col border-r-2 border-r-custom-slate h-screen w-[16%]"
     >
      <div className="flex justify-center border-b-2 border-custom-slate pb-7 w-full">
       <input
        type="text"
        className="border border-gray-300 bg-custom-slate rounded-md px-3 py-4 h-7 w-48 mt-9 text-sm focus:outline-none focus:border-blue-500"
        placeholder="Search collection..."
       />
      </div>
      <div>
       <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
        <img className="opacity-50 object-contain w-5 " src={users} alt="" />
        <p className="text-slate-500">Users</p>
       </button>
       <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
        <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
        <p className="text-slate-500">Author</p>
       </button>
       <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
        <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
        <p className="text-slate-500">Book</p>
       </button>
       <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
        <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
        <p className="text-slate-500">Luggage</p>
       </button>
       <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
        <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
        <p className="text-slate-500">Messages</p>
       </button>
       <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
        <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
        <p className="text-slate-500">Plans</p>
       </button>
       <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
        <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
        <p className="text-slate-500">Posts</p>
       </button>
       <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
        <img className="opacity-50 object-contain w-5 " src={mail} alt="" />
        <p className="text-slate-500">MessageReport</p>
       </button>
      </div>
      <button className="flex justify-center gap-1 items-center hover:border-2 hover:border-slate-900 focus:border-slate-900 f w-48 p-2 rounded-md h-9 my-3">
       <span className="text-md text-lg">+</span>
       <p className="text-slate-500">New collection</p>
      </button>
     </div>
     {/* Compactment 3 */}
     <div className="flex flex-col bg-slate-500 w-screen">
      <div className="flex gap-[31%] w-[100%] p-7">
       <div className="Titles flex gap-6  text-lg">
        <h1>Collection</h1>
        <span>/</span>
        <h2>Users</h2>
        <div>
         <img
          className="object-contain pt-1 opacity-70 w-5"
          src={settings}
          alt=""
         />
        </div>
        <div>
         <img
          className="object-contain pt-1 opacity-70 w-5"
          src={refresh}
          alt=""
         />
        </div>
       </div>
       <div className="Buttons flex gap-3">
        <button className="border-2 h-10 text-center border-black px-3 font-semibold rounded-sm text-gray-700">
         &lt;/&gt; API Review
        </button>
        <button className="border-2 h-10 text-center border-black px-3 font-semibold rounded-sm bg-black text-white">
         + New Record
        </button>
       </div>
      </div>
      <input
       type="text"
       className="border border-gray-300 bg-custom-slate rounded-md px-3 py-4 h-7 w-48 mt-9 text-sm focus:outline-none focus:border-blue-500"
       placeholder="Search collection..."
      />
     </div>
    </div>
   </section>
  </>
 );
};

export default Database;
