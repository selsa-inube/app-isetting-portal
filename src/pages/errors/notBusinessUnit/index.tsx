import { useAuth0 } from "@auth0/auth0-react";
import { useLogout } from "@hooks/authentication/useLogout";
import { ErrorPage } from "@design/layout/ErrorPage";
import { enviroment } from "@config/environment";

const NotBusinessUnit = () => {
  const { logout } = useAuth0();

  useLogout();

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: enviroment.REDIRECT_URI } });
  };

  return (
    <ErrorPage
      errorCode={1004}
      heading="No hay resultados..."
      onClick={handleLogout}
    />
  );
};

export { NotBusinessUnit };
