import { Assignments } from "@pages/assignments";
import { Route, Routes } from "react-router-dom";

const AssignmentsRoutes = () => (
  <Routes>
    <Route path="/" element={<Assignments />} />
  </Routes>
);

export { AssignmentsRoutes };
