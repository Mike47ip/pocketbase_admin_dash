import settings from "../assets/settings.png";
import refresh from "../assets/refresh.png";
import users from "../assets/users.png";
import folder from "../assets/folder.png";
import mail from "../assets/mail.png";
import key from "../assets/key.png";
import account from "../assets/account.png";
import image from "../assets/image.png";
import date from "../assets/date.png";
import copy from "../assets/copy.png";

const Database = ({darkMode}) => {
 return (
  <>
   <section>
    <div className="flex w-screen">
     <div
      id="sidebar2"
      className="hidden lg:flex items-center flex-col border-r-2 border-r-custom-slate h-screen w-[17%]"
     >
      <div className="flex justify-center border-b-2 border-custom-slate pb-7 w-full ">
       <input
        type="text"
        className="border border-gray-300 bg-custom-slate rounded-md px-3 py-4 h-7 w-48 md:w-5/6 mt-9 text-sm focus:outline-none focus:border-blue-500"
        placeholder="Search collection..."
       />
      </div>
      <div>
       <button className={`flex justify-start gap-1 items-center ${darkMode ? "bg-white" : ""} hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3`}>
        <img className="opacity-50 object-contain w-5 " src={users} alt="" />
        <p className="text-slate-500">Users</p>
       </button>
       <button className={`flex justify-start gap-1 items-center ${darkMode ? "bg-white" : ""} hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3`}>
        <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
        <p className="text-slate-500">Messages</p>
       </button>
       <button className={`flex justify-start gap-1 items-center ${darkMode ? "bg-white" : ""} hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3`}>
        <img className="opacity-50 object-contain w-5 " src={folder} alt="" />
        <p className="text-slate-500">Posts</p>
       </button>
       <button className={`flex justify-start gap-1 items-center ${darkMode ? "bg-white" : ""} hover:bg-custom-slate focus:bg-custom-slate w-48 p-2 rounded-md h-9 my-3`}>
        <img className="opacity-50 object-contain w-5 " src={mail} alt="" />
        <p className="text-slate-500">MessageReport</p>
       </button>
      </div>
      <button className={`flex justify-center gap-1 items-center border-2 ${darkMode ? "bg-white text-black" : ""} hover:bg-custom-slate border-slate-900 focus:border-slate-900 f w-48 p-2 rounded-md h-9 my-3 md:w-5/6`}>
       <span className="text-md text-lg">+</span>
       <p>New collection</p>
      </button>
     </div>
     {/* Compactment 3 */}
     <div className={`flex  flex-col w-screen lg:w-[77%] ${darkMode ? "bg-custom-dark" : "bg-custom-back"}`}>
      <div className="flex justify-between p-7 flex-col  lg:flex-row">
       <div className="Titles flex gap-6 text-md lg:text-lg">
        <h1 className="text-slate-400">Collection</h1>
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
       <div className="Buttons flex gap-3 pr-[10%] mt-9 lg:mt-0 lg:pr-0"> 
        <button className="border-2 h-11 lg:h-12 text-center border-black px-2 lg:px-3 text-[12px] lg:text-base font-semibold rounded-sm text-gray-700">
         <span className="hidden lg:inline">&lt;/&gt; </span> API Review
        </button>
        <button className="border-2 h-11 lg:h-12 text-center border-black px-2 lg:px-3 text-[12px] lg:text-base font-semibold rounded-sm bg-black text-white">
         + New Record
        </button>
       </div>
      </div>
      <div id="input" className="flex justify-center items-center">
       <input
        type="text"
        className="border border-gray-300 bg-custom-slate px-3  h-10 rounded-3xl w-[94%] mt-2 text-sm focus:outline-none focus:border-blue-500"
        placeholder="Search collection..."
       />
      </div>
      {/* Table */}
      <div className="w-full overflow-x-auto mt-4">
       <table className="table-auto w-full">
        <thead className="h-10  hover:bg-custom-slate cursor-pointer">
         <tr className={`text-start ${darkMode ? "hover:bg-red-500 cursor-pointer" : "hover:bg-custom-slate"}`}>
          <th className="text-start w-16">
           {" "}
           <div className="flex items-center px-5 lg:px-0  justify-center">
            <input className="w-[17px] h-[17px]" type="checkbox" />
           </div>
          </th>
          <th className="h-14 ">
           <div
            className="flex gap-2 opacity-50
            "
           >
            <img className="w-5 object-contain" src={key} alt="" />{" "}
            <span className="font-medium">id</span>
           </div>
          </th>
          <th className="text-start pl-4 lg:pl-0">
           <div
            className="flex gap-2 opacity-50
         text-start"
           >
            <img className="w-5 object-contain" src={account} alt="" />
            <span className="font-medium">username</span>
           </div>{" "}
          </th>
          <th className="text-start pl-3 lg:pl-0">
           {" "}
           <div
            className="flex gap-2 opacity-50
            text-start"
           >
            <img className="w-5 object-contain" src={mail} alt="" />
            <span className="font-medium">email</span>
           </div>{" "}
          </th>
          <th className="text-start pl-3 lg:pl-0">
           {" "}
           <div
            className="flex gap-2 opacity-50
         text-start"
           >
            <span className="w-5 object-contain">T</span>
            <span className="font-medium">name</span>
           </div>{" "}
          </th>
          <th className="text-start pl-4 lg:pl-0">
           {" "}
           <div
            className="flex gap-2 opacity-50
            text-start"
           >
            <img className="w-5 object-contain" src={image} alt="" />
            <span className="font-medium">avatar</span>
           </div>{" "}
          </th>
          <th className="text-start pl-8 lg:pl-0">
           {" "}
           <div
            className="flex gap-2 opacity-50
            text-start"
           >
            <img className="w-5 object-contain" src={mail} alt="" />
            <span className="font-medium">website</span>
           </div>{" "}
          </th>
          <th className="text-start pl-7 lg:pl-0">
           {" "}
           <div
            className="flex gap-2 opacity-50
         text-start"
           >
            <img className="w-5 object-contain" src={date} alt="" />
            <span className="font-medium">created</span>
           </div>{" "}
          </th>
          <th className="text-start pl-8 lg:pl-0">
           {" "}
           <div
            className="flex gap-2 opacity-50
            text-start"
           >
            <img className="w-5 object-contain" src={date} alt="" />
            <span className="font-medium">updated</span>
           </div>{" "}
          </th>
         </tr>
        </thead>
        <tbody>
         <tr className={`border-b border-t ${darkMode ? "hover:bg-red-500 cursor-pointer !text-white" : "hover:bg-custom-slate"} h-14 text-sm cursor-pointer`}>
          <td>
           <div className="flex items-center lg:px-0  justify-center">
            <input className="w-[17px] h-[17px]" type="checkbox" />
           </div>
          </td>
          <td>
          <span className={`flex w- w-[126px] justify-center ${darkMode ? "text-black" : ""} gap-1 text-xs  py-1 rounded-2xl bg-slate-200`}>
            <img className="w-3 object-contain" src={copy} alt="" />{" "}
            <span>JJ2YRU30FBG8MqX</span>{" "}
           </span>
          </td>
          <td className="pl-3 lg:pl-0">u_fY6TDdqL6JEG4xu</td>
          <td className="pl-3 lg:pl-0">test3@example.com</td>
          <td className="pl-3 lg:pl-0">John Doe</td>
          <td className="pl-4 lg:pl-0 text-slate-500">N/A</td>
          <td className="pl-9 lg:pl-0">N/A</td>
          <td className="text-xs pl-8 whitespace-nowrap lg:pl-0">
           2020-01-12{" "}
          </td>
          <td className="flex mt-2 flex-col whitespace-nowrap pl-9 lg:pl-0 text-xs items-center justify-center ">
           <span>2024-04-05</span>{" "}
           <span className="text-slate-500">20:23:42 UTC</span>
          </td>
         </tr>
         <tr className={`border-b border-t ${darkMode ? "hover:bg-red-500 cursor-pointer !text-white" : "hover:bg-custom-slate"} h-14 text-sm cursor-pointer`}>
          <td>
           <div className="flex items-center lg:px-0  justify-center">
            <input className="w-[17px] h-[17px]" type="checkbox" />
           </div>
          </td>
          <td>
          <span className={`flex w- w-[126px] justify-center ${darkMode ? "text-black" : ""} gap-1 text-xs  py-1 rounded-2xl bg-slate-200`}>
            <img className="w-3 object-contain" src={copy} alt="" />{" "}
            <span>JJ2YRU30FBG8MqX</span>{" "}
           </span>
          </td>
          <td className="pl-3 lg:pl-0">u_fY6TDdqL6JEG4xu</td>
          <td className="pl-3 lg:pl-0">test3@example.com</td>
          <td className="pl-3 lg:pl-0">N/A</td>
          <td className="pl-4 lg:pl-0 text-slate-500">N/A</td>
          <td className="pl-9 lg:pl-0">N/A</td>
          <td className="text-xs pl-8 whitespace-nowrap lg:pl-0">
           2020-01-12{" "}
          </td>
          <td className="flex mt-2 flex-col whitespace-nowrap pl-9 lg:pl-0 text-xs items-center justify-center ">
           <span>2024-04-05</span>{" "}
           <span className="text-slate-500">20:23:42 UTC</span>
          </td>
         </tr>
         <tr className={`border-b border-t ${darkMode ? "hover:bg-red-500 cursor-pointer !text-white" : "hover:bg-custom-slate"} h-14 text-sm cursor-pointer`}>
          <td>
           <div className="flex items-center lg:px-0  justify-center">
            <input className="w-[17px] h-[17px]" type="checkbox" />
           </div>
          </td>
          <td>
          <span className={`flex w- w-[126px] justify-center ${darkMode ? "text-black" : ""} gap-1 text-xs  py-1 rounded-2xl bg-slate-200`}>
            <img className="w-3 object-contain" src={copy} alt="" />{" "}
            <span>JJ2YRU30FBG8MqX</span>{" "}
           </span>
          </td>
          <td className="pl-3 lg:pl-0">u_fY6TDdqL6JEG4xu</td>
          <td className="pl-3 lg:pl-0">test3@example.com</td>
          <td className="pl-3 lg:pl-0">John Doe</td>
          <td className="pl-4 lg:pl-0 text-slate-500">N/A</td>
          <td className="pl-9 lg:pl-0">N/A</td>
          <td className="text-xs pl-8 whitespace-nowrap lg:pl-0">
           2020-01-12{" "}
          </td>
          <td className="flex mt-2 flex-col whitespace-nowrap pl-9 lg:pl-0 text-xs items-center justify-center ">
           <span>2024-04-05</span>{" "}
           <span className="text-slate-500">20:23:42 UTC</span>
          </td>
         </tr>
         <tr className={`border-b border-t ${darkMode ? "hover:bg-red-500 cursor-pointer !text-white" : "hover:bg-custom-slate"} h-14 text-sm cursor-pointer`}>
          <td>
           <div className="flex items-center lg:px-0  justify-center">
            <input className="w-[17px] h-[17px]" type="checkbox" />
           </div>
          </td>
          <td>
          <span className={`flex w- w-[126px] justify-center ${darkMode ? "text-black" : ""} gap-1 text-xs  py-1 rounded-2xl bg-slate-200`}>
            <img className="w-3 object-contain" src={copy} alt="" />{" "}
            <span>JJ2YRU30FBG8MqX</span>{" "}
           </span>
          </td>
          <td className="pl-3 lg:pl-0">u_fY6TDdqL6JEG4xu</td>
          <td className="pl-3 lg:pl-0">test3@example.com</td>
          <td className="pl-3 lg:pl-0">Jane Doe</td>
          <td className="pl-4 lg:pl-0 text-slate-500">N/A</td>
          <td className="pl-9 lg:pl-0">N/A</td>
          <td className="text-xs pl-8 whitespace-nowrap lg:pl-0">
           2020-01-12{" "}
          </td>
          <td className="flex mt-2 flex-col whitespace-nowrap pl-9 lg:pl-0 text-xs items-center justify-center ">
           <span>2024-04-05</span>{" "}
           <span className="text-slate-500">20:23:42 UTC</span>
          </td>
         </tr>
         {/* Add more rows as needed */}
        </tbody>
       </table>
      </div>
     </div>
    </div>
   </section>
  </>
 );
};

export default Database;
