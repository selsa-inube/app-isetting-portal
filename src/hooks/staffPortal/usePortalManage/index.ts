import { AuthAndData } from "@context/authAndDataProvider";
import { IUser } from "@ptypes/authAndPortalDataProvider/IUser";
import { useContext, useEffect } from "react";
import { UsePortalData } from "../usePortalData";
import { UseBusinessManagers } from "../useBusinessManagers";
import { UseAuthRedirect } from "@hooks/authentication/useAuthRedirect";

const UseAppData = (
  portalCode: string | null,
  code: string | undefined,
  user: IUser,
  businessUnit: string | undefined
) => {
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

  if (!code) {
    const {
      portalData,
      hasError: portalError,
      errorCode: errorCodePortal,
    } = UsePortalData(portalCode);
    const {
      businessManagersData,
      hasError: businessError,
      errorCode: errorCodeBusiness,
    } = UseBusinessManagers(portalData);

    const {
      hasError: authError,
      isLoading: authLoading,
      isAuthenticated: authAuthenticated,
      errorCode: errorCodeAuth,
    } = UseAuthRedirect(portalData, businessManagersData, portalCode);

    hasError = portalError || businessError || authError;
    errorCode = errorCodePortal || errorCodeBusiness || errorCodeAuth;
    isLoading = authLoading;
    isAuthenticated = authAuthenticated;
  }

  return { hasError, isLoading, isAuthenticated, errorCode };
};

export { UseAppData };
