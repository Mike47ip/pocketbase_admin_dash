import settings from "../assets/settings.png";
import refresh from "../assets/refresh.png";
import folder from "../assets/folder.png";
import mail from "../assets/mail.png";
import home from "../assets/home.png";

const Settings = ({ darkMode }) => {
 return (
  <>
   <div
    className={`flex w-screen ${
     darkMode ? "bg-custom-dark " : "border-r-custom-slate"
    }`}
   >
    <div
     id="sidebar2"
     className="hidden lg:flex items-center flex-col border-r-2 border-r-custom-slate h-screen w-[18.5%]"
    >
     <div className="flex w-[100%] flex-col justify-center items-center">
      <h2 className="text-slate-500 px-7 self-start block font-medium text-sm pt-6">
       System
      </h2>
      <button
       className={`flex justify-start  w-[87%] gap-1 items-center ${
        darkMode ? "bg-white" : ""
       } hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-[5px]`}
      >
       <img className="opacity-50 object-contain w-5 " src={home} alt="" />
       <p className="text-slate-500">Applications</p>
      </button>
      <button
       className={`flex justify-start  w-[87%] gap-1 items-center ${
        darkMode ? "bg-white" : ""
       } hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-[5px]`}
      >
       <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
       <p className="text-slate-500">Mails settings</p>
      </button>
      <button
       className={`flex justify-start  w-[87%] gap-1 items-center ${
        darkMode ? "bg-white" : ""
       } hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-[5px]`}
      >
       <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
       <p className="text-slate-500">File storage</p>
      </button>
      <button
       className={`flex justify-start  w-[87%] gap-1 items-center ${
        darkMode ? "bg-white" : ""
       } hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-[5px]`}
      >
       <img className="opacity-50 object-contain w-5 " src={mail} alt="" />
       <p className="text-slate-500">Backups</p>
      </button>
     </div>
     <div className="flex w-[100%] flex-col justify-center items-center">
      <h2 className="text-slate-500 px-7 self-start block font-medium text-sm pt-6">
       Sync
      </h2>
      <button
       className={`flex whitespace-nowrap justify-start  w-[87%] gap-1 items-center ${
        darkMode ? "bg-white" : ""
       } hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-[5px]`}
      >
       <img className="opacity-50 object-contain w-5 " src={home} alt="" />
       <p className="text-slate-500">Export collections</p>
      </button>
      <button
       className={`flex whitespace-nowrap justify-start  w-[87%] gap-1 items-center ${
        darkMode ? "bg-white" : ""
       } hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-[5px]`}
      >
       <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
       <p className="text-slate-500">Import collections</p>
      </button>
     </div>
     <div className="flex w-[100%] flex-col justify-center items-center">
      <h2 className="text-slate-500 px-7 self-start block font-medium text-sm pt-6">
       Authentication
      </h2>
      <button
       className={`flex justify-start  w-[87%] gap-1 items-center ${
        darkMode ? "bg-white" : ""
       } hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-[5px]`}
      >
       <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
       <p className="text-slate-500">Auth providers</p>
      </button>
      <button
       className={`flex justify-start  w-[87%] gap-1 items-center ${
        darkMode ? "bg-white" : ""
       } hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-[5px]`}
      >
       <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
       <p className="text-slate-500">Token options</p>
      </button>
      <button
       className={`flex justify-start  w-[87%] gap-1 items-center ${
        darkMode ? "bg-white" : ""
       } hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-[5px]`}
      >
       <img className="opacity-50 object-contain w-5 " src={mail} alt="" />
       <p className="text-slate-500">Admins</p>
      </button>
     </div>
    </div>
    {/* Compactment 3 */}
    <div
     className={`flex flex-col w-screen lg:w-[83%] ${
      darkMode ? "bg-custom-dark " : "bg-custom-back"
     }`}
    >
     <div className="flex justify-between p-7 flex-col  lg:flex-row">
      <div className="Titles flex gap-6 text-md lg:text-lg">
       <h1 className="text-slate-400">Settings</h1>
       <span>/</span>
       <h2>Application</h2>
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
      <div className="Buttons flex gap-3 mt-9 lg:mt-0">
       <button className="border-2 h-11 lg:h-12 text-center border-black px-2 lg:px-3 text-[12px] lg:text-base font-semibold rounded-sm text-gray-700">
        <span className="hidden lg:inline">&lt;/&gt; </span> API Review
       </button>
      </div>
     </div>
     <div id="input" className="flex justify-center items-center"></div>
     {/* Input */}
     <div className={`w-[80%] mx-auto`}>
      <div
       className={`flex gap-7 justify-center flex-col lg:flex-row  ${
        darkMode ? "bg-custom-dark" : "bg-custom-back"
       } shadow-md rounded px-8 pt-6 pb-8 mb-4`}
      >
       <div className="mb-4 w-[90%] lg:w-[40%]">
        <label
         className="block text-gray-700 text-sm font-bold mb-2"
         htmlFor="appName"
        >
         Application Name
        </label>
        <input
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         id="appName"
         type="text"
        />
       </div>
       <div className="mb-6 w-[90%] lg:w-[40%] ">
        <label
         className="block text-gray-700 text-sm font-bold mb-2"
         htmlFor="appUrl"
        >
         Application URL
        </label>
        <input
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         id="appUrl"
         type="text"
        />
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default Settings;
