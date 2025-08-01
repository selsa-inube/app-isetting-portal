import { Route, Routes } from "react-router-dom";
import { Assignments } from "@pages/assignments";
import { AddAssignments } from "@pages/assignments/tabs/assignmentsTab/addAssignments";
import { ErrorPage } from "@design/layout/ErrorPage";

const AssignmentsRoutes = () => (
  <Routes>
    <Route path="/" element={<Assignments />} 
    />
    <Route path="/add-assignment" element={<AddAssignments />} />
    <Route path="/*" element={<ErrorPage errorCode={404} />} />
  </Routes>
);

export { AssignmentsRoutes };
