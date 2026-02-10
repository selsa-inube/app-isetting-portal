import { useContext, useEffect } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { useAuthRedirect } from "@hooks/authentication/useAuthRedirect";
import { IUseAppData } from "@ptypes/hooks/IUseAppData";
import { usePortalData } from "../usePortalData";
import { useBusinessManagers } from "../useBusinessManagers";
import { validateAndTrimString } from "@utils/validateAndTrimString";
import { encrypt } from "@utils/encrypt";
import { decrypt } from "@utils/decrypt";

const useAppData = (props: IUseAppData) => {
  const { code, user } = props;
  const { setAppData } = useContext(AuthAndData);
  const updateAppData = () => {
    if (code) {
      localStorage.setItem("portalCode", encrypt(code));
    }

    if (user) {
      setAppData((prev) => ({
        ...prev,
        user: {
          userAccount: validateAndTrimString(user.email),
          userName: user.name,
        },
      }));
    }
  };

  useEffect(() => {
    updateAppData();
  }, []);

  let hasError = false;
  let isLoading = false;
  let isAuthenticated = true;
  let errorCode = 0;

  const decryptedPortal = decrypt(localStorage.getItem("portalCode") ?? "");

  const {
    portalData,
    hasError: portalError,
    errorCode: errorCodePortal,
    loading: loadingPortalData,
  } = usePortalData({ portalCode: decryptedPortal });

  const {
    businessManagersData,
    hasError: businessError,
    errorCode: errorCodeBusiness,
    authConfig,
    loading: loadingBusinessManagers,
  } = useBusinessManagers({ portalPublicCode: portalData });

  const {
    hasError: authError,
    isLoading: authLoading,
    isAuthenticated: authAuthenticated,
    errorCode: errorCodeAuth,
  } = useAuthRedirect({
    portalPublicCode: portalData,
    businessManagersData,
    portalCode: decryptedPortal,
    authConfig,
    loadingPortalData,
    loadingBusinessManagers,
  });

  hasError = portalError || businessError || authError;
  errorCode = errorCodePortal || errorCodeBusiness || errorCodeAuth;
  isLoading = authLoading || loadingPortalData || loadingBusinessManagers;
  isAuthenticated = authAuthenticated;

  return {
    hasError,
    isLoading,
    isAuthenticated,
    errorCode,
    businessManagersData,
    authConfig,
  };
};

export { useAppData };
