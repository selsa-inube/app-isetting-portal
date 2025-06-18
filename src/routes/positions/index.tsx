import { Route, Routes } from "react-router-dom";
import { Missions } from "@pages/missions";
import { Positions } from "@pages/positions";
import { AddPosition } from "@pages/positions/tabs/positionsTabs/outlets/addPosition";
import { EditPositions } from "@pages/positions/tabs/positionsTabs/outlets/editPosition";
import { PositionsOptions } from "@pages/positions/tabs/positionsTabs/outlets/options";
import { AddMission } from "@pages/missions/tabs/missionsTabs/addMission";
import { Users } from "@pages/users";

const PositionsRoutes = () => (
  <Routes>
    <Route path="/" element={<PositionsOptions />} />
    <Route path="/positions" element={<Positions />} />
    <Route path="/missions" element={<Missions/>} />

    <Route path="/users" element={<Users />} />
    <Route path="positions/add-position" element={<AddPosition />} />
    <Route path="positions/edit-destination" element={<EditPositions />} />
    <Route path="missions/add-mission" element={<AddMission />} />

  </Routes>
);

export { PositionsRoutes };
