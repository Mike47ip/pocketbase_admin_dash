import ReactApexChart from "react-apexcharts";
import settings from "../assets/settings.png";
import refresh from "../assets/refresh.png";
import mail from "../assets/mail.png";
import key from "../assets/key.png";
import account from "../assets/account.png";
import image from "../assets/image.png";
import date from "../assets/date.png";
import copy from "../assets/copy.png";

const Graph = ({darkMode}) => {
 // Define chart options
 const options = {
  chart: {
   id: "basic-bar",
  },
  xaxis: {
   categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
 };

 // Define chart series data
 const series = [
  {
   name: "Series 1",
   data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
  },
 ];

 return (
  <>
   <div className="flex flex-col w-full overflow-y-hidden">
    <div className="flex justify-between  p-7">
     <div className="Titles flex gap-6 text-md lg:text-lg">
      <h1 className="text-slate-400">Logs</h1>
      <span>/</span>
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
      <button className={`border-2 h-11 lg:h-12 text-center  ${darkMode ? "border-white text-white" : "border-black text-gray-700"} px-2 lg:px-3 text-[12px] lg:text-base font-semibold rounded-sm`}>
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
      placeholder="Search item or filter like  > 0 && data.auth = guess..."
     />
    </div>

    <div className="w-full p-7">
     <h2>Sample Graph</h2>
     <ReactApexChart
      id="linechart"
      options={options}
      series={series}
      type="line"
      height={350}
     />
    </div>

  

    <div className="!border-l-2 !border-l-custom-slate m-[-2px] overflow-x-auto w-full">

    

    <table className="table-auto w-full ">
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
          <th className="text-start pl-4 xl:!pl-0 lg:!pl-4">
           <div
            className="flex gap-2 opacity-50
         text-start"
           >
            <img className="w-5 object-contain" src={account} alt="" />
            <span className="font-medium">username</span>
           </div>{" "}
          </th>
          <th className="text-start pl-4 xl:!pl-0 lg:!pl-4">
           {" "}
           <div
            className="flex gap-2 opacity-50
            text-start"
           >
            <img className="w-5 object-contain" src={mail} alt="" />
            <span className="font-medium">email</span>
           </div>{" "}
          </th>
          <th className="text-start pl-4 xl:!pl-0 lg:!pl-4">
           {" "}
           <div
            className="flex gap-2 opacity-50
         text-start"
           >
            <span className="w-5 object-contain">T</span>
            <span className="font-medium">name</span>
           </div>{" "}
          </th>
          <th className="text-start pl-4 xl:!pl-0 lg:!pl-4">
           {" "}
           <div
            className="flex gap-2 opacity-50
            text-start"
           >
            <img className="w-5 object-contain" src={image} alt="" />
            <span className="font-medium">avatar</span>
           </div>{" "}
          </th>
          <th className="text-start pl-4 xl:!pl-0 lg:!pl-9">
           {" "}
           <div
            className="flex gap-2 opacity-50
            text-start"
           >
            <img className="w-5 object-contain" src={mail} alt="" />
            <span className="font-medium">website</span>
           </div>{" "}
          </th>
          <th className="text-start pl-4 xl:!pl-0 lg:!pl-9">
           {" "}
           <div
            className="flex gap-2 opacity-50
         text-start"
           >
            <img className="w-5 object-contain" src={date} alt="" />
            <span className="font-medium">created</span>
           </div>{" "}
          </th>
          <th className="ttext-start pl-4 xl:!pl-0 lg:!pl-9">
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
          <td className="pl-3 xl:!pl-0 lg:!pl-4">u_fY6TDdqL6JEG4xu</td>
          <td className="pl-3 xl:!pl-0 lg:!pl-4">test3@example.com</td>
          <td className="pl-3 xl:!pl-0 lg:!pl-4">John Doe</td>
          <td className="pl-4 xl:!pl-0 lg:!pl-4 text-slate-500">N/A</td>
          <td className="pl-5 xl:!pl-0 lg:!pl-9 ">N/A</td>
          <td className="text-xs pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9">
           2020-01-12{" "}
          </td>
          <td className="flex mt-2 flex-col whitespace-nowrap pl-9 xl:!pl-0 lg:!pl-9 text-xs items-center justify-center ">
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
          <td className="pl-3 xl:!pl-0 lg:!pl-4">u_fY6TDdqL6JEG4xu</td>
          <td className="pl-3 xl:!pl-0 lg:!pl-4">test3@example.com</td>
          <td className="pl-3 xl:!pl-0 lg:!pl-4">N/A</td>
          <td className="pl-4 xl:!pl-0 lg:!pl-4 text-slate-500">N/A</td>
          <td className="pl-5 xl:!pl-0 lg:!pl-9 ">N/A</td>
          <td className="text-xs pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9">
           2020-01-12{" "}
          </td>
          <td className="flex mt-2 flex-col whitespace-nowrap pl-9 xl:!pl-0 lg:!pl-9 text-xs items-center justify-center ">
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
          <td className="pl-3 xl:!pl-0 lg:!pl-4">u_fY6TDdqL6JEG4xu</td>
          <td className="pl-3 xl:!pl-0 lg:!pl-4">test3@example.com</td>
          <td className="pl-3 xl:!pl-0 lg:!pl-4">John Doe</td>
          <td className="pl-4 xl:!pl-0 lg:!pl-4 text-slate-500">N/A</td>
          <td className="pl-5 xl:!pl-0 lg:!pl-9 ">N/A</td>
          <td className="text-xs pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9">
           2020-01-12{" "}
          </td>
          <td className="flex mt-2 flex-col whitespace-nowrap pl-9 xl:!pl-0 lg:!pl-9 text-xs items-center justify-center ">
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
          <td className="pl-3 xl:!pl-0 lg:!pl-4">u_fY6TDdqL6JEG4xu</td>
          <td className="pl-3 xl:!pl-0 lg:!pl-4">test3@example.com</td>
          <td className="pl-3 xl:!pl-0 lg:!pl-4">Jane Doe</td>
          <td className="pl-4 xl:!pl-0 lg:!pl-4 text-slate-500">N/A</td>
          <td className="pl-5 xl:!pl-0 lg:!pl-9 ">N/A</td>
          <td className="text-xs pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9">
           2020-01-12{" "}
          </td>
          <td className="flex mt-2 flex-col whitespace-nowrap pl-9 xl:!pl-0 lg:!pl-9 text-xs items-center justify-center ">
           <span>2024-04-05</span>{" "}
           <span className="text-slate-500">20:23:42 UTC</span>
          </td>
         </tr>
         {/* Add more rows as needed */}
        </tbody>
       </table>
       </div>

   </div>
  </>
 );
};

export default Graph;
