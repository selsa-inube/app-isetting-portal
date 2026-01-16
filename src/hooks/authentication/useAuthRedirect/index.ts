import { useEffect, useState } from "react";
import { IUseAuthRedirect } from "@ptypes/hooks/IUseAuthRedirect";
import { useIAuth } from "@inube/iauth-react";
import { useSignOut } from "../useSignOut";

const useAuthRedirect = (props: IUseAuthRedirect) => {
  const { portalPublicCode, businessManagersData, portalCode } = props;
  const { loginWithRedirect, isAuthenticated, isLoading, error } = useIAuth();
  const [hasRedirected, setHasRedirected] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorCode, setErrorCode] = useState<number>(0);
  const { signOut } = useSignOut();

  if (error) {
    signOut("/error?code=1009");
  }

  useEffect(() => {
    if (hasRedirected) return;

    if (portalPublicCode.abbreviatedName) {
      if (businessManagersData && !isLoading && !isAuthenticated) {
        loginWithRedirect();
      } else if (isAuthenticated) {
        setHasRedirected(true);
      } else {
        setHasError(true);
        setErrorCode(1001);
      }
    } else {
      setHasError(true);
      setErrorCode(1001);
    }
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
