import { RouterProvider } from "react-router-dom";
import { FlagProvider } from "@inubekit/inubekit";
import { ErrorPage } from "@design/layout/ErrorPage";
import { AuthAndDataProvider } from "@context/authAndDataProvider";
import { router } from "@routes/mainNavigationConfig";

import { GlobalStyles } from "./styles/global";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import { UseAppData } from "@hooks/staffPortal/usePortalManage";
import { IUser } from "@ptypes/authAndPortalDataProvider/IUser";
import { ChangeToRequestTabProvider } from "@context/changeToRequestTab";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const portalCode = params.get("portal");

interface IApp {
  code?: string;
  businessUnit?: string;
  user?: IUser;
}

const App = (props: IApp) => {
  const { code, user, businessUnit } = props;
  const { isLoading, hasError, isAuthenticated, errorCode } = UseAppData(
    portalCode,
    code,
    user as IUser,
    businessUnit
  );

  if (isLoading) {
    return null;
  }

  if (hasError && !isAuthenticated) {
    return <ErrorPage errorCode={errorCode} />;
  }

  if (!isAuthenticated) {
    return null;
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

export { App };
