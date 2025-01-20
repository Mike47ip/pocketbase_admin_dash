import ReactApexChart from "react-apexcharts";
import settings from "../assets/settings.png";
import refresh from "../assets/refresh.png";
import mail from "../assets/mail.png";
import arrowright from "../assets/arrowright.svg";
import date from "../assets/date.png";
import bookmark from "../assets/bookmark.png";

const Graph = ({ darkMode }) => {
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
      <button
       className={`border-2 h-11 lg:h-12 text-center  ${
        darkMode ? "border-white text-white" : "border-black text-gray-700"
       } px-2 lg:px-3 text-[12px] lg:text-base font-semibold rounded-sm`}
      >
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
     {/* Graph table */}
     <table className="table-auto w-full ">
      <thead className="h-10  hover:bg-custom-slate cursor-pointer">
       <tr
        className={`text-start ${
         darkMode ? "hover:bg-red-500 cursor-pointer" : "hover:bg-custom-slate"
        }`}
       >
        <th className="text-start w-16">
         {" "}
         <div className="flex items-center px-5   justify-center">
          <input className="w-[17px] h-[17px]" type="checkbox" />
         </div>
        </th>
        <th className="h-14">
         <div
          className="flex gap-2 opacity-50 pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9
            "
         >
          <svg
           xmlns="http://www.w3.org/2000/svg"
           height="24"
           viewBox="0 -960 960 960"
           className={`w-5 filter ${
            darkMode ? "!text-white" : ""
           } object-contain`}
           width="24"
          >
           <path
            fill="currentColor"
            d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"
           />
          </svg>
          <span className="font-medium">level</span>
         </div>
        </th>
        <th className="text-start w-[66%]">
         <div
          className="flex gap-2 opacity-50
         text-start "
         >
          <svg
           xmlns="http://www.w3.org/2000/svg"
           height="24"
           className={`w-5 object-contain ${
            darkMode ? "text-white" : "text-gray-700"
           }`}
           viewBox="0 -960 960 960"
           width="24"
          >
           <path
            fill="currentColor"
            d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
           />
          </svg>
          <span className="font-medium">message</span>
         </div>{" "}
        </th>
        <th className="text-start pl-4 xl:!pl-0 lg:!pl-9">
         {" "}
         <div
          className="flex gap-2 opacity-50
         text-start"
         >
          <svg
           xmlns="http://www.w3.org/2000/svg"
           height="24"
           viewBox="0 -960 960 960"
           className={`w-5 object-contain ${
            darkMode ? "text-white" : "text-gray-700"
           }`}
           width="24"
          >
           <path
            fill="currentColor"
            d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"
           />
          </svg>
          <span className="font-medium">created</span>
         </div>{" "}
        </th>
       </tr>
      </thead>
      <tbody>
       <tr
        className={`border-b h-16 border-t ${
         darkMode
          ? "hover:bg-red-500 cursor-pointer !text-white"
          : "hover:bg-custom-slate"
        } h-14 text-sm cursor-pointer`}
       >
        <td>
         <div className="flex items-center lg:px-0  justify-center">
          <input className="w-[17px] h-[17px]" type="checkbox" />
         </div>
        </td>
        <td className="w-[9%]">
         <span
          className={`flex w-[90px] justify-center items-center ${
           darkMode ? "text-black" : ""
          } gap-1 text-xs  py-1 rounded-2xl bg-slate-200`}
         >
          <span className="bg-custom-orange text-sm bg-red-500 w-2 h-2 rounded-full"></span>{" "}
          <span>ERROR(8)</span>{" "}
         </span>
        </td>
        <td className="text-md w-[66%] pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9">
         <p>GET/robots.text </p>
         <div className="flex text-xs pt-2 gap-3">
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           status 404
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           execTime: 0.23145ms
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           auth: guest
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           userip: [demo_redact]
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-custom-pink px-2 rounded-2xl`}
          >
           error: Not found
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 bg-custom-orange px-2 rounded-2xl`}
          >
           details code=404: Not found
          </span>
         </div>
        </td>
        <td
         className={`flex items-center gap-1 mt-2 whitespace-nowrap pl-9 xl:!pl-0 lg:!pl-9 text-xs`}
        >
         <span>2024-04-05</span>{" "}
         <span className="flex items-center gap-2 text-slate-500">
          {" "}
          20:23:42:45:72:45 UTC{" "}
          <span className="!text-red-100">
           <svg
            className="!text-red-100"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            fill="grey"
            width="24"
           >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
           </svg>
          </span>
         </span>
        </td>
       </tr>
       <tr
        className={`border-b h-16 border-t ${
         darkMode
          ? "hover:bg-red-500 cursor-pointer !text-white"
          : "hover:bg-custom-slate"
        } h-14 text-sm cursor-pointer`}
       >
        <td>
         <div className="flex items-center lg:px-0  justify-center">
          <input className="w-[17px] h-[17px]" type="checkbox" />
         </div>
        </td>
        <td className="w-[9%]">
         <span
          className={`flex w-[90px] justify-center items-center ${
           darkMode ? "text-black" : ""
          } gap-1 text-xs  py-1 rounded-2xl bg-slate-200`}
         >
          <span className="bg-custom-orange text-sm bg-green-500 w-2 h-2 rounded-full"></span>{" "}
          <span>INFO (0)</span>{" "}
         </span>
        </td>
        <td className="text-md w-[66%] pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9">
         <p>GET/robots.text </p>
         <div className="flex text-xs pt-2 gap-3">
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           status 404
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           execTime: 0.23145ms
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           auth: guest
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           userip: [demo_redact]
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-custom-pink px-2 rounded-2xl`}
          >
           error: Not found
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 bg-custom-orange px-2 rounded-2xl`}
          >
           details code=404: Not found
          </span>
         </div>
        </td>
        <td className="flex items-center gap-1 mt-2 whitespace-nowrap pl-9 xl:!pl-0 lg:!pl-9 text-xs">
         <span>2024-04-05</span>{" "}
         <span className="flex items-center gap-2 text-slate-500">
          {" "}
          20:23:42:45:72:45 UTC{" "}
          <span>
           <svg
            className="!text-red-100"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            fill="grey"
            width="24"
           >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
           </svg>
          </span>
         </span>
        </td>
       </tr>
       <tr
        className={`border-b h-16 border-t ${
         darkMode
          ? "hover:bg-red-500 cursor-pointer !text-white"
          : "hover:bg-custom-slate"
        } h-14 text-sm cursor-pointer`}
       >
        <td>
         <div className="flex items-center lg:px-0  justify-center">
          <input className="w-[17px] h-[17px]" type="checkbox" />
         </div>
        </td>
        <td className="w-[9%]">
         <span
          className={`flex w-[90px] justify-center items-center ${
           darkMode ? "text-black" : ""
          } gap-1 text-xs  py-1 rounded-2xl bg-slate-200`}
         >
          <span className="bg-custom-orange text-sm bg-green-500 w-2 h-2 rounded-full"></span>{" "}
          <span>INFO (0)</span>{" "}
         </span>
        </td>
        <td className="text-md w-[66%] pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9">
         <p>GET/robots.text </p>
         <div className="flex text-xs pt-2 gap-3">
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           status 404
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           execTime: 0.23145ms
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           auth: guest
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           userip: [demo_redact]
          </span>{" "}
         </div>
        </td>
        <td className="flex items-center gap-1 mt-2 whitespace-nowrap pl-9 xl:!pl-0 lg:!pl-9 text-xs">
         <span>2024-04-05</span>{" "}
         <span className="flex items-center gap-2 text-slate-500">
          {" "}
          20:23:42:45:72:45 UTC{" "}
          <span>
           <svg
            className="!text-red-100"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            fill="grey"
            width="24"
           >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
           </svg>
          </span>
         </span>
        </td>
       </tr>
       <tr
        className={`border-b h-16 border-t ${
         darkMode
          ? "hover:bg-red-500 cursor-pointer !text-white"
          : "hover:bg-custom-slate"
        } h-14 text-sm cursor-pointer`}
       >
        <td>
         <div className="flex items-center lg:px-0  justify-center">
          <input className="w-[17px] h-[17px]" type="checkbox" />
         </div>
        </td>
        <td className="w-[9%]">
         <span
          className={`flex w-[90px] justify-center items-center ${
           darkMode ? "text-black" : ""
          } gap-1 text-xs  py-1 rounded-2xl bg-slate-200`}
         >
          <span className="bg-custom-orange text-sm bg-red-500 w-2 h-2 rounded-full"></span>{" "}
          <span>ERROR(8)</span>{" "}
         </span>
        </td>
        <td className="text-md w-[66%] pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9">
         <p>GET/robots.text </p>
         <div className="flex text-xs pt-2 gap-3">
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           status 404
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           execTime: 0.23145ms
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           auth: guest
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           userip: [demo_redact]
          </span>{" "}
         </div>
        </td>
        <td className="flex items-center gap-1 mt-2 whitespace-nowrap pl-9 xl:!pl-0 lg:!pl-9 text-xs">
         <span>2024-04-05</span>{" "}
         <span className="flex items-center gap-2 text-slate-500">
          {" "}
          20:23:42:45:72:45 UTC{" "}
          <span>
           <svg
            className="!text-red-100"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            fill="grey"
            width="24"
           >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
           </svg>
          </span>
         </span>
        </td>
       </tr>
       <tr
        className={`border-b h-16 border-t ${
         darkMode
          ? "hover:bg-red-500 cursor-pointer !text-white"
          : "hover:bg-custom-slate"
        } h-14 text-sm cursor-pointer`}
       >
        <td>
         <div className="flex items-center lg:px-0  justify-center">
          <input className="w-[17px] h-[17px]" type="checkbox" />
         </div>
        </td>
        <td className="w-[9%]">
         <span
          className={`flex w-[90px] justify-center items-center ${
           darkMode ? "text-black" : ""
          } gap-1 text-xs  py-1 rounded-2xl bg-slate-200`}
         >
          <span className="bg-custom-orange text-sm bg-green-500 w-2 h-2 rounded-full"></span>{" "}
          <span>INFO (0)</span>{" "}
         </span>
        </td>
        <td className="text-md w-[66%] pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9">
         <p>GET/robots.text </p>
         <div className="flex text-xs pt-2 gap-3">
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           status 404
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           execTime: 0.23145ms
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           auth: guest
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           userip: [demo_redact]
          </span>{" "}
         </div>
        </td>
        <td className="flex items-center gap-1 mt-2 whitespace-nowrap pl-9 xl:!pl-0 lg:!pl-9 text-xs">
         <span>2024-04-05</span>{" "}
         <span className="flex items-center gap-2 text-slate-500">
          {" "}
          20:23:42:45:72:45 UTC{" "}
          <span>
           <svg
            className="!text-red-100"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            fill="grey"
            width="24"
           >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
           </svg>
          </span>
         </span>
        </td>
       </tr>
       <tr
        className={`border-b h-16 border-t ${
         darkMode
          ? "hover:bg-red-500 cursor-pointer !text-white"
          : "hover:bg-custom-slate"
        } h-14 text-sm cursor-pointer`}
       >
        <td>
         <div className="flex items-center lg:px-0  justify-center">
          <input className="w-[17px] h-[17px]" type="checkbox" />
         </div>
        </td>
        <td className="w-[9%]">
         <span
          className={`flex w-[90px] justify-center items-center ${
           darkMode ? "text-black" : ""
          } gap-1 text-xs  py-1 rounded-2xl bg-slate-200`}
         >
          <span className="bg-custom-orange text-sm bg-green-500 w-2 h-2 rounded-full"></span>{" "}
          <span>INFO (0)</span>{" "}
         </span>
        </td>
        <td className="text-md w-[66%] pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9">
         <p>GET/robots.text </p>
         <div className="flex text-xs pt-2 gap-3">
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           status 404
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           execTime: 0.23145ms
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           auth: guest
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           userip: [demo_redact]
          </span>{" "}
         </div>
        </td>
        <td className="flex items-center gap-1 mt-2 whitespace-nowrap pl-9 xl:!pl-0 lg:!pl-9 text-xs">
         <span>2024-04-05</span>{" "}
         <span className="flex items-center gap-2 text-slate-500">
          {" "}
          20:23:42:45:72:45 UTC{" "}
          <span>
           <svg
            className="!text-red-100"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            fill="grey"
            width="24"
           >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
           </svg>
          </span>
         </span>
        </td>
       </tr>
       <tr
        className={`border-b h-16 border-t ${
         darkMode
          ? "hover:bg-red-500 cursor-pointer !text-white"
          : "hover:bg-custom-slate"
        } h-14 text-sm cursor-pointer`}
       >
        <td>
         <div className="flex items-center lg:px-0  justify-center">
          <input className="w-[17px] h-[17px]" type="checkbox" />
         </div>
        </td>
        <td className="w-[9%]">
         <span
          className={`flex w-[90px] justify-center items-center ${
           darkMode ? "text-black" : ""
          } gap-1 text-xs  py-1 rounded-2xl bg-slate-200`}
         >
          <span className="bg-custom-orange text-sm bg-green-500 w-2 h-2 rounded-full"></span>{" "}
          <span>INFO (0)</span>{" "}
         </span>
        </td>
        <td className="text-md w-[66%] pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9">
         <p>GET/robots.text </p>
         <div className="flex text-xs pt-2 gap-3">
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           status 404
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           execTime: 0.23145ms
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           auth: guest
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           userip: [demo_redact]
          </span>{" "}
         </div>
        </td>
        <td className="flex items-center gap-1 mt-2 whitespace-nowrap pl-9 xl:!pl-0 lg:!pl-9 text-xs">
         <span>2024-04-05</span>{" "}
         <span className="flex items-center gap-2 text-slate-500">
          {" "}
          20:23:42:45:72:45 UTC{" "}
          <span>
           <svg
            className="!text-red-100"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            fill="grey"
            width="24"
           >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
           </svg>
          </span>
         </span>
        </td>
       </tr>
       <tr
        className={`border-b h-16 border-t ${
         darkMode
          ? "hover:bg-red-500 cursor-pointer !text-white"
          : "hover:bg-custom-slate"
        } h-14 text-sm cursor-pointer`}
       >
        <td>
         <div className="flex items-center lg:px-0  justify-center">
          <input className="w-[17px] h-[17px]" type="checkbox" />
         </div>
        </td>
        <td className="w-[9%]">
         <span
          className={`flex w-[90px] justify-center items-center ${
           darkMode ? "text-black" : ""
          } gap-1 text-xs  py-1 rounded-2xl bg-slate-200`}
         >
          <span className="bg-custom-orange text-sm bg-red-500 w-2 h-2 rounded-full"></span>{" "}
          <span>ERROR(8)</span>{" "}
         </span>
        </td>
        <td className="text-md w-[66%] pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9">
         <p>GET/robots.text </p>
         <div className="flex text-xs pt-2 gap-3">
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           status 404
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           execTime: 0.23145ms
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           auth: guest
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           userip: [demo_redact]
          </span>{" "}
         </div>
        </td>
        <td className="flex items-center gap-1 mt-2 whitespace-nowrap pl-9 xl:!pl-0 lg:!pl-9 text-xs">
         <span>2024-04-05</span>{" "}
         <span className="flex items-center gap-2 text-slate-500">
          {" "}
          20:23:42:45:72:45 UTC{" "}
          <span>
           <svg
            className="!text-red-100"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            fill="grey"
            width="24"
           >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
           </svg>
          </span>
         </span>
        </td>
       </tr>
       <tr
        className={`border-b h-16 border-t ${
         darkMode
          ? "hover:bg-red-500 cursor-pointer !text-white"
          : "hover:bg-custom-slate"
        } h-14 text-sm cursor-pointer`}
       >
        <td>
         <div className="flex items-center lg:px-0  justify-center">
          <input className="w-[17px] h-[17px]" type="checkbox" />
         </div>
        </td>
        <td className="w-[9%]">
         <span
          className={`flex w-[90px] justify-center items-center ${
           darkMode ? "text-black" : ""
          } gap-1 text-xs  py-1 rounded-2xl bg-slate-200`}
         >
          <span className="bg-custom-orange text-sm bg-red-500 w-2 h-2 rounded-full"></span>{" "}
          <span>ERROR(8)</span>{" "}
         </span>
        </td>
        <td className="text-md w-[66%] pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9">
         <p>GET/robots.text </p>
         <div className="flex text-xs pt-2 gap-3">
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           status 404
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           execTime: 0.23145ms
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           auth: guest
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           userip: [demo_redact]
          </span>{" "}
         </div>
        </td>
        <td className="flex items-center gap-1 mt-2 whitespace-nowrap pl-9 xl:!pl-0 lg:!pl-9 text-xs">
         <span>2024-04-05</span>{" "}
         <span className="flex items-center gap-2 text-slate-500">
          {" "}
          20:23:42:45:72:45 UTC{" "}
          <span>
           <svg
            className="!text-red-100"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            fill="grey"
            width="24"
           >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
           </svg>
          </span>
         </span>
        </td>
       </tr>
       <tr
        className={`border-b h-16 border-t ${
         darkMode
          ? "hover:bg-red-500 cursor-pointer !text-white"
          : "hover:bg-custom-slate"
        } h-14 text-sm cursor-pointer`}
       >
        <td>
         <div className="flex items-center lg:px-0  justify-center">
          <input className="w-[17px] h-[17px]" type="checkbox" />
         </div>
        </td>
        <td className="w-[9%]">
         <span
          className={`flex w-[90px] justify-center items-center ${
           darkMode ? "text-black" : ""
          } gap-1 text-xs  py-1 rounded-2xl bg-slate-200`}
         >
          <span className="bg-custom-orange text-sm bg-red-500 w-2 h-2 rounded-full"></span>{" "}
          <span>ERROR(8)</span>{" "}
         </span>
        </td>
        <td className="text-md w-[66%] pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9">
         <p>GET/robots.text </p>
         <div className="flex text-xs pt-2 gap-3">
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           status 404
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           execTime: 0.23145ms
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           auth: guest
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           userip: [demo_redact]
          </span>{" "}
         </div>
        </td>
        <td className="flex items-center gap-1 mt-2 whitespace-nowrap pl-9 xl:!pl-0 lg:!pl-9 text-xs">
         <span>2024-04-05</span>{" "}
         <span className="flex items-center gap-2 text-slate-500">
          {" "}
          20:23:42:45:72:45 UTC{" "}
          <span>
           <svg
            className="!text-red-100"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            fill="grey"
            width="24"
           >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
           </svg>
          </span>
         </span>
        </td>
       </tr>
       <tr
        className={`border-b h-16 border-t ${
         darkMode
          ? "hover:bg-red-500 cursor-pointer !text-white"
          : "hover:bg-custom-slate"
        } h-14 text-sm cursor-pointer`}
       >
        <td>
         <div className="flex items-center lg:px-0  justify-center">
          <input className="w-[17px] h-[17px]" type="checkbox" />
         </div>
        </td>
        <td className="w-[9%]">
         <span
          className={`flex w-[90px] justify-center items-center ${
           darkMode ? "text-black" : ""
          } gap-1 text-xs  py-1 rounded-2xl bg-slate-200`}
         >
          <span className="bg-custom-orange text-sm bg-red-500 w-2 h-2 rounded-full"></span>{" "}
          <span>ERROR(8)</span>{" "}
         </span>
        </td>
        <td className="text-md w-[66%] pl-6 whitespace-nowrap xl:!pl-0 lg:!pl-9">
         <p>GET/robots.text </p>
         <div className="flex text-xs pt-2 gap-3">
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           status 404
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           execTime: 0.23145ms
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           auth: guest
          </span>{" "}
          <span
           className={`h-5 flex  ${
            darkMode ? "text-black" : ""
           } justify-center items-center bg-slate-200 px-2 rounded-2xl`}
          >
           userip: [demo_redact]
          </span>{" "}
         </div>
        </td>
        <td className="flex items-center gap-1 mt-2 whitespace-nowrap pl-9 xl:!pl-0 lg:!pl-9 text-xs">
         <span>2024-04-05</span>{" "}
         <span className="flex items-center gap-2 text-slate-500">
          {" "}
          20:23:42:45:72:45 UTC{" "}
          <span>
           <svg
            className="!text-red-100"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            fill="grey"
            width="24"
           >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
           </svg>
          </span>
         </span>
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
