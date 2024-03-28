import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/navbars/sidebar";
import Database from "./pages/database";
import { Navbar } from "./components/navbars/navbar";
import Graph from "./pages/graph";
import Settings from "./pages/settings";


function App() {
 const [sidebarVisible, setSidebarVisible] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

 const toggleSidebar = () => {
  setSidebarVisible(!sidebarVisible);
 };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

 return (
  <>
   <Router>
    <Navbar toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    <div className={`flex w-full overflow-x-hidden ${darkMode ? 'dark' : 'light'}`}>
     <Sidebar isVisible={sidebarVisible} toggleDarkMode={toggleDarkMode} toggleSidebar={toggleSidebar} darkMode={darkMode} />
     <Routes>
      <Route path="/" element={<Database darkMode={darkMode} />} />
      <Route path="/chart" element={<Graph darkMode={darkMode}/>} />
      <Route path="/settings" element={<Settings darkMode={darkMode} />} />
     </Routes>
    </div>
   </Router>
  </>
 );
}

export default App;
