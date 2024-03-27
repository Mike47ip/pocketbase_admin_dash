import settings from "../assets/settings.png";
import refresh from "../assets/refresh.png";
import users from "../assets/users.png";
import folder from "../assets/folder.png";
import mail from "../assets/mail.png";

const Settings = () => {
 return (
  <>
   <div className="flex w-screen">
    <div
     id="sidebar2"
     className="hidden lg:flex items-center flex-col border-r-2 border-r-custom-slate h-screen w-[17%]"
    >
     <h2 className="text-slate-500 !text-left font-medium pt-2">Settings</h2>
     <div>
      <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
       <img className="opacity-50 object-contain w-5 " src={users} alt="" />
       <p className="text-slate-500">Application</p>
      </button>
      <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
       <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
       <p className="text-slate-500">Mail settings</p>
      </button>
      <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
       <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
       <p className="text-slate-500">File storage</p>
      </button>
      <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
       <img className="opacity-50 object-contain w-5 " src={mail} alt="" />
       <p className="text-slate-500">Backups</p>
      </button>
     </div>
     <h2 className="text-slate-500 !text-left font-medium pt-8">Sync</h2>
     <div>
      <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
       <img className="opacity-50 object-contain w-5 " src={users} alt="" />
       <p className="text-slate-500">Export collections</p>
      </button>
      <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
       <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
       <p className="text-slate-500">More collections</p>
      </button>
     </div>
     <h2 className="text-slate-500 !text-left font-medium pt-8">
      Authentication
     </h2>
     <div>
      <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
       <img className="opacity-50 object-contain w-5 " src={users} alt="" />
       <p className="text-slate-500">Auth providers</p>
      </button>
      <button className="flex justify-start gap-1 items-center hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3">
       <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
       <p className="text-slate-500">Token options</p>
      </button>
     </div>
    </div>
    <div className="flex flex-col w-screen lg:w-[77%] bg-custom-back">
      <div className="flex justify-between  p-7">
       <div className="Titles flex gap-6 text-md lg:text-lg">
        <h1 className="text-slate-400">Settings</h1>
        <span>/</span>
        <h2>Users</h2>
        <div>
         <img
          className="hidden lg:block object-contain pt-1 opacity-70 w-5"
          src={settings}
          alt=""
         />
        </div>
        <div>
         <img
          className="hidden lg:block object-contain pt-1 opacity-70 w-5"
          src={refresh}
          alt=""
         />
        </div>
       </div>
       <div className="Buttons flex gap-3">
        <button className="border-2 h-11 lg:h-12 text-center border-black px-2 lg:px-3 text-[12px] lg:text-base font-semibold rounded-sm text-gray-700">
         <span className="hidden lg:inline">&lt;/&gt; </span> API Review
        </button>

       </div>
      </div>
      <div id="input" className="flex justify-center items-center">

      </div>
      {/* Table */}

<div>
  Under construction
</div>
     </div>
    
   </div>
  </>
 );
};

export default Settings;
