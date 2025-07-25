import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { initializeDataDB } from "@mocks/utils/inicializeDataDB";
import { IUseAuthRedirect } from "@ptypes/hooks/IUseAuthRedirect";

const useAuthRedirect = (props: IUseAuthRedirect) => {
  const { portalPublicCode, businessManagersData, portalCode } = props;
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const [hasRedirected, setHasRedirected] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorCode, setErrorCode] = useState<number>(0);

  useEffect(() => {
    if (hasRedirected || !portalPublicCode.abbreviatedName) {
      setHasError(true);
      return;
    }

    if (businessManagersData && !isLoading && !isAuthenticated) {
      loginWithRedirect();
      initializeDataDB();
      return;
    }

    if (isAuthenticated) {
      setHasRedirected(true);
      setErrorCode(1001);
      return;
    }

    setHasError(true);
    setErrorCode(1001);
  }, [
    portalPublicCode,
    businessManagersData,
    isLoading,
    isAuthenticated,
    loginWithRedirect,
    hasRedirected,
    portalCode,
  ]);

  return { hasRedirected, hasError, isLoading, isAuthenticated, errorCode };
};

export { useAuthRedirect };
