import { Route, Routes } from "react-router-dom";
import { Positions } from "@pages/positions";
import { AddPosition } from "@pages/positions/tabs/positionsTabs/outlets/addPosition";
import { EditPositions } from "@pages/positions/tabs/positionsTabs/outlets/editPosition";
import { PositionsOptions } from "@pages/positions/tabs/positionsTabs/outlets/options";
import { Users } from "@pages/users";
import { AddUsers } from "@pages/users/outlets/addUsers";

const PositionsRoutes = () => (
  <Routes>
    <Route path="/" element={<PositionsOptions />} />
    <Route path="/positions" element={<Positions />} />
    <Route path="/users" element={<Users />} />
    <Route path="users/add-users" element={<AddUsers />} />
    <Route path="positions/add-position" element={<AddPosition />} />
    <Route path="positions/edit-destination" element={<EditPositions />} />
  </Routes>
);

export { PositionsRoutes };
