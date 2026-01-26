import { useContext, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@inubekit/inubekit";
import { useOptionsByBusinessUnits } from "@hooks/subMenu/useOptionsByBusinessUnits";
import { useMainNavigation } from "@hooks/useMainNavigation";
import { mediaQueryTabletMain } from "@config/environment";
import { IUseCorePageStructure } from "@ptypes/hooks/IUseCorePageStructure";
import { AuthAndData } from "@context/authAndDataProvider";

const useCorePageStructure = (props: IUseCorePageStructure) => {
  const { businessUnitSigla } = props;
  const { appData } = useContext(AuthAndData);
  const [collapse, setCollapse] = useState(false);
  const collapseMenuRef = useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery(mediaQueryTabletMain);
  const isTabletMain = useMediaQuery(mediaQueryTabletMain);
  const { optionsCards } = useOptionsByBusinessUnits({
    staffPortalId: appData.portal.publicCode,
    businessUnit: businessUnitSigla,
    user: appData.user.userAccount,
    token: appData.token,
  });

  const location = useLocation();

  const sanitizedOptionsCards = optionsCards.map((card) => ({
    ...card,
    url: typeof card.url === "string" ? card.url : String(card.url),
  }));

  const { optionsHeader, optionsNav } = useMainNavigation({
    optionsCards: sanitizedOptionsCards,
    location,
  });

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
