import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { enviroment } from "@config/environment";

const UseLogoutAndClearLocalStorage = () => {
  const { logout } = useAuth0();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: enviroment.REDIRECT_URI } });
  };

  return { handleLogout };
};

export { UseLogoutAndClearLocalStorage };
