import Home from "./components/home/Home"
import Admin from './components/admin/Admin';
import Clients from "./components/clients/Clients";
import Candidates from "./components/candidates/Candidates";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/candidates/info" element={<Candidates />} />
          <Route path="/clients/info" element={<Clients />} />
          <Route path="/dashborad" element={<Dashboard />} />
          <Route path="/add/admin" element={<Admin />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
