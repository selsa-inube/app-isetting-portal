import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RulesRoutes } from "@routes/rules";
import { ErrorPage } from "@design/layout/ErrorPage";
import { CorePageStructure } from "@design/layout/corePageStructure";
import { Logout } from "@pages/login/logout";
import { PositionsRoutes } from "@routes/positions";
import { Home } from "@pages/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="/" element={<CorePageStructure />}>
        <Route path="privileges/*" element={<PositionsRoutes />} />
        <Route path="rules/*" element={<RulesRoutes />} />
      </Route>
      <Route path="logout" element={<Logout />} />
    </>
  )
);

export { router };
