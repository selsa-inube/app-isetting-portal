import { useLogout } from "@hooks/authentication/useLogout";
import { Home } from "@pages/home";

const Logout = () => {
  useLogout();
  return <Home />;
};

export { Logout };
