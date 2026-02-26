import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { PositionsRoutes } from "@routes/positions";
import { AssignmentsRoutes } from "@routes/assignments";
import { MissionsRoutes } from "@routes/missions";
import { UsersRoutes } from "@routes/users";
import { Logout } from "@pages/login/logout";
import { ErrorPage } from "@design/layout/ErrorPage";
import { CorePageStructure } from "@design/layout/corePageStructure";
import { Home } from "@pages/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="/" element={<CorePageStructure />}>
        <Route path="positions/*" element={<PositionsRoutes />} />
        <Route path="missions/*" element={<MissionsRoutes />} />
        <Route path="users/*" element={<UsersRoutes />} />
        <Route path="assignments/*" element={<AssignmentsRoutes />} />
      </Route>
      <Route path="logout" element={<Logout />} />
    </>,
  ),
);

export { router };
