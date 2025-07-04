import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@inubekit/inubekit";
import { mainNavigation } from "@config/mainNav";
import { useOptionsByBusinessunits } from "@hooks/subMenu/useOptionsByBusinessunits";
import { IUseCorePageStructure } from "@ptypes/hooks/IUseCorePageStructure";
import { decrypt } from "@utils/decrypt";
import { enviroment } from "@config/environment";
import { portalLocalStorage } from "@config/portalLocalStorage";

const useCorePageStructure = (props: IUseCorePageStructure) => {
  const { businessUnitSigla, logout } = props;

  const [collapse, setCollapse] = useState(false);
  const collapseMenuRef = useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery(enviroment.IS_MOBILE_849);
  const isTabletMain = useMediaQuery(enviroment.IS_MOBILE_970);

  const portalId = localStorage.getItem(portalLocalStorage);
  const staffPortalId = portalId ? decrypt(portalId) : "";

  const { optionsCards } = useOptionsByBusinessunits({
    staffPortalId,
    businessUnitSigla
  });

  const location = useLocation();

  const sanitizedOptionsCards = optionsCards.map(card => ({
    ...card,
    url: typeof card.url === "string" ? card.url : String(card.url),
  }));

  const { optionsHeader, optionsNav } = mainNavigation(
    sanitizedOptionsCards,
    logout,
    location
  );

  return {
    collapse,
    collapseMenuRef,
    isTablet,
    isTabletMain,
    optionsHeader,
    optionsNav,
    setCollapse,
  };
};

export { useCorePageStructure };
