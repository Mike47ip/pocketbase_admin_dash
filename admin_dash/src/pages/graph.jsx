import ReactApexChart from "react-apexcharts";
import settings from "../assets/settings.png";
import refresh from "../assets/refresh.png";

const Graph = () => {
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
   <div className="flex flex-col w-full">
    <div className="flex justify-between  p-7">
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
     <div className="Buttons flex gap-3">
      <button className="border-2 h-11 lg:h-12 text-center border-black px-2 lg:px-3 text-[12px] lg:text-base font-semibold rounded-sm text-gray-700">
       <span className="hidden lg:inline">&lt;/&gt; </span> API Review
      </button>
      <button className="border-2 h-11 lg:h-12 text-center border-black px-2 lg:px-3 text-[12px] lg:text-base font-semibold rounded-sm bg-black text-white">
       + New Record
      </button>
     </div>
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
   </div>
  </>
 );
};

export default Graph;
