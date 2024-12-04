import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ErrorPage } from "@components/layout/ErrorPage";
import { AppPage } from "@components/layout/AppPage";
import { useAuth0 } from "@auth0/auth0-react";
import { PrivilegesRoutes } from "@routes/privileges";
import { RulesRoutes } from "@routes/rules";
import { usePortalData } from "@hooks/usePortalData";
import { useBusinessManagers } from "@hooks/useBusinessManagers";
import { useAuthRedirect } from "@hooks/useAuthRedirect";
import { GlobalStyles } from "./styles/global";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import { useContext } from "react";
import { AppContext, AppContextProvider } from "@context/AppContext";
import { SelectBusinessUnits } from "@pages/selectBusinessUnits";
import { SelectBusinessUnitsRoutes } from "@routes/selectBusinessunits";

const redirect_uri = window.location.origin;
function LogOut() {
  localStorage.clear();
  const { logout } = useAuth0();
  logout({ logoutParams: { returnTo: redirect_uri } });
  return <AppPage />;
}
function FirstPage() {
  const { businessUnitSigla } = useContext(AppContext);
  return businessUnitSigla.length === 0 ? <SelectBusinessUnits /> : <AppPage />;
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="selectBusinessUnit/*"
        element={<SelectBusinessUnitsRoutes />}
      />
      <Route path="/" element={<FirstPage />} errorElement={<ErrorPage />}>
        <Route path="/" element={<PrivilegesRoutes />} />
        <Route path="privileges/*" element={<PrivilegesRoutes />} />
        <Route path="rules/*" element={<RulesRoutes />} />
      </Route>
      <Route path="logout" element={<LogOut />} />
    </>
  )
);
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const portalCode = params.get("portal");
function App() {
  const { portalData, hasError: portalError } = usePortalData(portalCode);
  const { businessManagersData, hasError: businessError } =
    useBusinessManagers(portalData);

  const {
    hasError: authError,
    isLoading,
    isAuthenticated,
  } = useAuthRedirect(portalData, businessManagersData, portalCode);

  const hasError = portalError || businessError || authError;

  if (isLoading) {
    return null;
  }

  if (hasError && !isAuthenticated) {
    return <ErrorPage />;
  }

  if (!isAuthenticated) {
    return null;
  }
  return (
    <>
      <GlobalStyles />
      <ThemeProviderWrapper>
        <AppContextProvider>
          <RouterProvider router={router} />
        </AppContextProvider>
      </ThemeProviderWrapper>
    </>
  );
}

export { App };
