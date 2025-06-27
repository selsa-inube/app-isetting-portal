import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UseLogout = () => {
  const { logout } = useAuth0();

  useEffect(() => {
    const HandleLogout = () => {
      const redirect_uri = window.location.origin;
      localStorage.clear();
      logout({ logoutParams: { returnTo: redirect_uri } });
    };

    HandleLogout();
  }, [logout]);
};

export { UseLogout };
