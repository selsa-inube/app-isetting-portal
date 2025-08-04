import { Route, Routes } from "react-router-dom";
import { Positions } from "@pages/positions";
import { AddPosition } from "@pages/positions/tabs/positionsTabs/outlets/addPosition";
import { EditPositions } from "@pages/positions/tabs/positionsTabs/outlets/editPosition";

const PositionsRoutes = () => (
  <Routes>
    <Route path="/" element={<Positions />} />
    <Route path="/add-position" element={<AddPosition />} />
    <Route path="/edit-destination" element={<EditPositions />} />

  </Routes>
);

export { PositionsRoutes };
