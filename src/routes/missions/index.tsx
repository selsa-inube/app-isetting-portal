import { Route, Routes } from "react-router-dom";
import { Missions } from "@pages/missions";
import { AddMission } from "@pages/missions/tabs/missionsTabs/addMission";
import { EditMission } from "@pages/missions/tabs/missionsTabs/editMission";
import { ErrorPage } from "@design/layout/ErrorPage";

const MissionsRoutes = () => (
  <Routes>
    <Route path="/" element={<Missions />} />
    <Route path="/add-mission" element={<AddMission />} />
    <Route path="/edit-mission" element={<EditMission />} />
    <Route path="/*" element={<ErrorPage errorCode={404} />} />
  </Routes>
);

export { MissionsRoutes };
