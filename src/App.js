import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCandidates from "./views/AllCandidates.jsx";
import CreateExam from "./views/CreateExam.jsx";
import CreateTraining from "./views/CreateTraining.jsx";
import Dashboard from "./views/Dashboard.jsx";
import Firms from "./views/Firms.jsx";
import Login from "./views/Login.jsx";
import ManageTraining from "./views/ManageTraining.jsx";
import PerFirm from "./views/PerFirm.jsx";
import Qualifications from "./views/Qualification.jsx";
import RecentApplications from "./views/RecentApplications.jsx";
import Rooms from "./views/Rooms.jsx";
import Unassigned from "./views/Unassigned.jsx";
import UnassignedToBoth from "./views/UnAssignedBoth.jsx";
import UnassignedToExam from "./views/UnassignedToExam.jsx";
import UnassignedToTraining from "./views/UnassignedToTraining.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route path="/candidates/all" element={<AllCandidates />}></Route>
        <Route path="/candidates/unassigned" element={<Unassigned />}></Route>
        <Route
          path="/candidates/unassigned/training"
          element={<UnassignedToTraining />}
        ></Route>
        <Route
          path="/candidates/unassigned/exam"
          element={<UnassignedToExam />}
        ></Route>
        <Route
          path="/candidates/unassigned/both"
          element={<UnassignedToBoth />}
        ></Route>
        <Route
          path="/applications/recent"
          element={<RecentApplications />}
        ></Route>
        <Route path="/candidates/perFirm" element={<PerFirm />}></Route>
        <Route path="/training/create" element={<CreateTraining />}></Route>
        <Route path="/training/manage" element={<ManageTraining />}></Route>
        <Route path="/exam/create" element={<CreateExam />}></Route>
        <Route path="/firms" element={<Firms />}></Route>
        <Route path="/qualifications" element={<Qualifications />}></Route>
        <Route path="/rooms" element={<Rooms />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
