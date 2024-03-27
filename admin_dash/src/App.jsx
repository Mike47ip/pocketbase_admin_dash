import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/navbars/sidebar";
import Database from "./pages/database";
import { Navbar } from "./components/navbars/navbar";
import Graph from "./pages/graph";

function App() {
 // Define state to track the visibility of the sidebar
 const [sidebarVisible, setSidebarVisible] = useState(false);

 // Define the toggleSidebar function to toggle the visibility of the sidebar
 const toggleSidebar = () => {
  setSidebarVisible(!sidebarVisible);
 };
 return (
  <>
   <Router>
    <Navbar toggleSidebar={toggleSidebar} />
    <div className="flex w-full overflow-x-hidden">
     {/* Pass sidebarVisible as a prop to the Sidebar component */}
     <Sidebar isVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
     <Routes>
      <Route path="/database" element={<Database />} />
      <Route path="/chart" element={<Graph />} />
      {/* Add other routes as needed */}
     </Routes>
    </div>
   </Router>
  </>
 );
}

export default App;
