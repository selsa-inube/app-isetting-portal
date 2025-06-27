import { UseLogout } from "@hooks/authentication/useLogout";
import { Home } from "@pages/home";

const Logout = () => {
  UseLogout();
  return <Home />;
};

export { Logout };
