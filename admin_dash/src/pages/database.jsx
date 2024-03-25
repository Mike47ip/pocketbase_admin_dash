import settings from "../assets/settings.png";
import refresh from "../assets/refresh.png";
import users from "../assets/users.png";
import folder from "../assets/folder.png";
import mail from "../assets/mail.png";
import key from "../assets/key.png";
import account from "../assets/account.png";
import image from "../assets/image.png";
import date from "../assets/date.png";

const Database = () => {
 return (
  <>
   <section>
    <div className="flex w-screen">
     <div
      id="sidebar2"
      className="flex items-center flex-col border-r-2 border-r-custom-slate h-screen w-[17%]"
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
     <div className="flex flex-col w-[75%]">
      <div className="flex justify-between  p-7">
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
      <div id="input" className="flex justify-center items-center">
       <input
        type="text"
        className="border border-gray-300 bg-custom-slate px-3  h-10 rounded-3xl w-[94%] mt-2 text-sm focus:outline-none focus:border-blue-500"
        placeholder="Search collection..."
       />
      </div>
      {/* Table */}
      <table className="table-auto w-full mt-4">
       <thead className="h-10 border border-b-slate-600">
        <tr className="text-start">
         <th className="text-start w-16">
          {" "}
          <div className="flex items-center justify-center">
           <input className="w-[20px] h-[20px]" type="checkbox" />
          </div>
         </th>
         <th className="h-14 ">
          <div
           className="flex gap-2 opacity-50
         text-start"
          >
           <img src={key} alt="" /> <span className="font-medium">id</span>
          </div>
         </th>
         <th className="text-start">
          <div
           className="flex gap-2 opacity-50
         text-start"
          >
           <img src={account} alt="" />
           <span className="font-medium">username</span>
          </div>{" "}
         </th>
         <th className="text-start">
          {" "}
          <div
           className="flex gap-2 opacity-50
         text-start"
          >
           <img src={mail} alt="" />
           <span className="font-medium">email</span>
          </div>{" "}
         </th>
         <th className="text-start">
          {" "}
          <div
           className="flex gap-2 opacity-50
         text-start"
          >
           <span>T</span>
           <span className="font-medium">name</span>
          </div>{" "}
         </th>
         <th className="text-start">
          {" "}
          <div
           className="flex gap-2 opacity-50
         text-start"
          >
           <img src={image} alt="" />
           <span className="font-medium">avatar</span>
          </div>{" "}
         </th>
         <th className="text-start">          <div
           className="flex gap-2 opacity-50
         text-start"
          >
           <img src={mail} alt="" />
           <span className="font-medium">website</span>
          </div>{" "}</th>
         <th className="text-start">          <div
           className="flex gap-2 opacity-50
         text-start"
          >
           <img src={date} alt="" />
           <span className="font-medium">created</span>
          </div>{" "}</th>
         <th className="text-start">          <div
           className="flex gap-2 opacity-50
         text-start"
          >
           <img src={date} alt="" />
           <span className="font-medium">updated</span>
          </div>{" "}</th>
        </tr>
       </thead>
       <tbody>
        <tr>
         <td>
          <div className="flex items-center justify-center">
           <input className="w-[20px] h-[20px]" type="checkbox" />
          </div>
         </td>
         <td>JJ2YRU30FBG8MqX</td>
         <td>u_fY6TDdqL6JEG4xu</td>
         <td>test3@example.com</td>
         <td>John Doe</td>
         <td>N/A</td>
         <td>N/A</td>
         <td>2020-01-12 </td>
         <td className="flex flex-col">
          <span>2024-04-05</span> <span>20:23:42 UTC</span>
         </td>
        </tr>
        <tr>
         <td>
          <div className="flex items-center justify-center">
           <input className="w-[20px] h-[20px] text-red-800" type="checkbox" />
          </div>
         </td>
         <td>JJ2YRU30FBG8MqX</td>
         <td>u_fY6TDdqL6JEG4xu</td>
         <td>test3@example.com</td>
         <td>N/A</td>
         <td>N/A</td>
         <td>N/A</td>
         <td>2020-01-12 </td>
         <td className="flex flex-col">
          <span>2024-04-05</span> <span>20:23:42 UTC</span>
         </td>
        </tr>
        <tr>
         <td>
          <div className="flex items-center justify-center">
           <input className="w-[20px] h-[20px]" type="checkbox" />
          </div>
         </td>
         <td>JJ2YRU30FBG8MqX</td>
         <td>u_fY6TDdqL6JEG4xu</td>
         <td>test3@example.com</td>
         <td>John Doe</td>
         <td>N/A</td>
         <td>N/A</td>
         <td>2020-01-12 </td>
         <td className="flex flex-col">
          <span>2024-04-05</span> <span>20:23:42 UTC</span>
         </td>
        </tr>
        <tr>
         <td>
          <div className="flex items-center justify-center">
           <input className="w-[20px] h-[20px]" type="checkbox" />
          </div>
         </td>
         <td>JJ2YRU30FBG8MqX</td>
         <td>u_fY6TDdqL6JEG4xu</td>
         <td>test3@example.com</td>
         <td>Jane Doe</td>
         <td>N/A</td>
         <td>N/A</td>
         <td>2020-01-12 </td>
         <td className="flex flex-col">
          <span>2024-04-05</span> <span>20:23:42 UTC</span>
         </td>
        </tr>
        {/* Add more rows as needed */}
       </tbody>
      </table>
     </div>
    </div>
   </section>
  </>
 );
};

export default Database;
