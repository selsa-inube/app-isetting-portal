import { Route, Routes } from "react-router-dom";
import { Users } from "@pages/users";
import { AddUser } from "@pages/users/tabs/userTab/addUser";
import { EditUser } from "@pages/users/tabs/userTab/editUser";

const UsersRoutes = () => (
  <Routes>
    <Route path="/" element={<Users />} />
    <Route path="/addUser" element={<AddUser />} />
    <Route path="/edit-user" element={<EditUser />} />
  </Routes>
);

export { UsersRoutes };
