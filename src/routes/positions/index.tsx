import { Positions } from "@pages/positions";
import { AddPosition } from "@pages/positions/tabs/positionsTabs/outlets/addPosition";
import { EditPositions } from "@pages/positions/tabs/positionsTabs/outlets/editPosition";
import { PositionsOptions } from "@pages/positions/tabs/positionsTabs/outlets/options";
import { Route, Routes } from "react-router-dom";

const PositionsRoutes = () => (
  <Routes>
    <Route path="/" element={<PositionsOptions />} />
    <Route path="/positions" element={<Positions />} />
    <Route path="positions/add-position" element={<AddPosition />} />
    <Route path="edit-destination" element={<EditPositions />} />
  </Routes>
);

export { PositionsRoutes };
