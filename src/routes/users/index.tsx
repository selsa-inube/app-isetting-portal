import { Route, Routes } from "react-router-dom";
import { Users } from "@pages/users";
import { AddUser } from "@pages/users/tabs/userTab/addUser";

const UsersRoutes = () => (
  <Routes>
    <Route path="/" element={<Users />} />
    <Route path="/addUser" element={<AddUser />} />
  </Routes>
);

export { UsersRoutes };
