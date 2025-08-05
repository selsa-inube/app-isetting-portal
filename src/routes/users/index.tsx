import { Route, Routes } from "react-router-dom";
import { Users } from "@pages/users";

const UsersRoutes = () => (
  <Routes>
    <Route path="/" element={<Users />} />
  </Routes>
);

export { UsersRoutes };
