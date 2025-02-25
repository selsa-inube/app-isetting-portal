import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQueries } from "@inubekit/inubekit";
import { AuthAndData } from "@context/authAndDataProvider";
import { ValidateBusinessUnities } from "src/services/staffPortal/getValidateBusinessUnities";

const UseSelectBusinessUnits = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { appData, setBusinessUnitsToTheStaff } = useContext(AuthAndData);

  const {
    "(max-width: 1100px)": screenTablet,
    "(min-width: 1101px) and (max-width: 2200px)": screenDesktop,
  }: Record<string, boolean> = useMediaQueries([
    "(max-width: 1100px)",
    "(min-width: 1101px) and (max-width: 2200px)",
  ]);

  const imageWidth = () => {
    if (screenDesktop) return "240px";
    if (screenTablet) return "200px";
    return "160px";
  };

  useEffect(() => {
    if (appData.portal.publicCode) {
      ValidateBusinessUnities(
        appData.portal.publicCode,
        appData.user.userAccount
      ).then((data) => {
        setBusinessUnitsToTheStaff(data);
      });
    }
  }, [
    appData.portal.publicCode,
    appData.user.userAccount,
    setBusinessUnitsToTheStaff,
  ]);

  useEffect(() => {
    if (
      location.pathname === "/selectBusinessUnit" ||
      location.pathname === "/selectBusinessUnit/" ||
      location.pathname === "/"
    ) {
      navigate(`/selectBusinessUnit/checking-credentials/`);
    }
  }, [location, navigate]);

  return {
    screenTablet,
    screenDesktop,
    imageWidth,
    appData,
  };
};

export { UseSelectBusinessUnits };
