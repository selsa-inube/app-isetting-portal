import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { enviroment } from "@config/environment";

const useLogoutAndClearLocalStorage = () => {
  const { logout } = useAuth0();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: enviroment.REDIRECT_URI } });
  };

  return { handleLogout };
};

export { useLogoutAndClearLocalStorage };
