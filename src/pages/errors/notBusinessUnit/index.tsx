import { useAuth0 } from "@auth0/auth0-react";

import { enviroment } from "@config/environment";
import { ErrorPage } from "@design/layout/ErrorPage";
import { UseLogout } from "@hooks/authentication/useLogout";

function NotBusinessUnit() {
  const { logout } = useAuth0();

  UseLogout();

  const handlelogout = () => {
    logout({ logoutParams: { returnTo: enviroment.REDIRECT_URI } });
  };

  return (
    <ErrorPage
      errorCode={1004}
      heading="No hay resultados..."
      onClick={handlelogout}
    />
  );
}

export { NotBusinessUnit };
