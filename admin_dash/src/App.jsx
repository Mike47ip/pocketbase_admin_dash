import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/navbars/sidebar";
import Database from "./pages/database";

function App() {
 return (
  <>
   <Router>
    <div className="flex w-screen overflow-x-hidden">
 
      <Sidebar />
     <Routes>
      <Route path="/database" element={<Database />} />
      {/* Add other routes as needed */}
     </Routes>
    </div>
   </Router>
  </>
 );
}

export default App;
