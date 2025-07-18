import { Route, Routes } from "react-router-dom";
import { Assignments } from "@pages/assignments";
import { AddAssignments } from "@pages/assignments/tabs/assignmentsTab/addAssignments";

const AssignmentsRoutes = () => (
  <Routes>
    <Route path="/" element={<Assignments />} />
    <Route path="/add-assignment" element={<AddAssignments />} />
  </Routes>
);

export { AssignmentsRoutes };
