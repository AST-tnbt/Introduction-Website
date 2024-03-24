import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import GroupPage from "./Components/GroupPage";
import ProjectPage from "./Components/ProjectPage";
import ContractPage from "./Components/ContractPage";
import PlanPage from "./Components/PlanPage";
import Navbar from "./Components/Navbar";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groups" element={<GroupPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contracts" element={<ContractPage />} />
        <Route path="/plans" element={<PlanPage />} />
      </Routes>
    </Router>
  )
}