import { useContext, useEffect } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { useAuthRedirect } from "@hooks/authentication/useAuthRedirect";
import { IUseAppData } from "@ptypes/hooks/IUseAppData";
import { usePortalData } from "../usePortalData";
import { useBusinessManagers } from "../useBusinessManagers";

const useAppData = (props: IUseAppData) => {
  const { portalCode, code, user, businessUnit } = props;
  const { setBusinessUnitSigla, setAppData } = useContext(AuthAndData);
  const updateAppData = () => {
    if (code) {
      localStorage.setItem("portalCode", code);
    }

    if (businessUnit) {
      localStorage.setItem("businessUnitSigla", businessUnit);
      setBusinessUnitSigla(businessUnit);
    }

    if (user) {
      setAppData((prev) => ({
        ...prev,
        user: {
          userAccount: user.userAccount,
          userName: user.userName,
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

  const {
    portalData,
    hasError: portalError,
    errorCode: errorCodePortal,
  } = usePortalData({ portalCode });
  const {
    businessManagersData,
    hasError: businessError,
    errorCode: errorCodeBusiness,
  } = useBusinessManagers({ portalPublicCode: portalData });

  const {
    hasError: authError,
    isLoading: authLoading,
    isAuthenticated: authAuthenticated,
    errorCode: errorCodeAuth,
  } = useAuthRedirect({
    portalPublicCode: portalData,
    businessManagersData,
    portalCode,
  });

  hasError = portalError || businessError || authError;
  errorCode = errorCodePortal || errorCodeBusiness || errorCodeAuth;
  isLoading = authLoading;
  isAuthenticated = authAuthenticated;

  return { hasError, isLoading, isAuthenticated, errorCode };
};

export { useAppData };
