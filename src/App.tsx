import { RouterProvider } from "react-router-dom";
import { FlagProvider } from "@inubekit/inubekit";
import { ErrorPage } from "@design/layout/ErrorPage";
import { AuthAndDataProvider } from "@context/authAndDataProvider";
import { router } from "@routes/mainNavigationConfig";

import { GlobalStyles } from "./styles/global";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import { useAppData } from "@hooks/staffPortal/usePortalManage";
import { IUser } from "@ptypes/authAndPortalDataProvider/IUser";
import { ChangeToRequestTabProvider } from "@context/changeToRequestTab";
import { AuthWrapper } from "@pages/authWrapper";
import { encrypt } from "@utils/encrypt";
import { Loading } from "@pages/login/loading";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const portalCode = params.get("portal");

interface IApp {
  code?: string;
  businessUnit?: string;
  user?: IUser;
}

const AppContent = (props: IApp) => {
  const { code, user, businessUnit } = props;
  if (portalCode && portalCode?.length > 0) {
    localStorage.setItem("portalCode", encrypt(portalCode));
  }
  const { isLoading, hasError, isAuthenticated, errorCode } = useAppData({
    code,
    user: user as IUser,
    businessUnit,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (hasError && !isAuthenticated) {
    return <ErrorPage errorCode={errorCode} />;
  }

  if (!isAuthenticated) {
    return <Loading />;
  }

  return (
    <>
      <GlobalStyles />
      <ThemeProviderWrapper>
        <FlagProvider>
          <AuthAndDataProvider>
            <ChangeToRequestTabProvider>
              <RouterProvider router={router} />
            </ChangeToRequestTabProvider>
          </AuthAndDataProvider>
        </FlagProvider>
      </ThemeProviderWrapper>
    </>
  );
};

function App(props: IApp) {
  return (
    <AuthWrapper>
      <AppContent {...props} />
    </AuthWrapper>
  );
}

export default App;
