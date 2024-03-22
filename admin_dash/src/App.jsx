import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/navbars/sidebar";
import Hello from "./pages/hello";

function App() {
 return (
  <>
   <Router>
    <div>
     <Sidebar />
     <Routes>
      <Route path="/hello" element={<Hello />} />
      {/* Add other routes as needed */}
     </Routes>
    </div>
   </Router>
  </>
 );
}

export default App;
