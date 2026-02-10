import { useContext, useEffect, useState, useRef } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { AuthAndData } from "@context/authAndDataProvider";
import { useOptionsByBusinessUnits } from "@hooks/subMenu/useOptionsByBusinessUnits";

import { useCaseForStaff } from "@hooks/staffPortal/useCaseForStaff";
import { useIAuth } from "@inube/iauth-react";
import { mainNavigation } from "@config/nav";
import { basic } from "@design/tokens";

const useHome = () => {
  const { appData, businessUnitsToTheStaff, setUseCases } =
    useContext(AuthAndData);
  const { logout } = useIAuth();
  const [collapse, setCollapse] = useState(false);
  const [dataExists, setDataExists] = useState<boolean>(false);

  const { optionsCards, loading, hasError } = useOptionsByBusinessUnits({
    staffPortalId: appData.portal.publicCode,
    businessUnit: appData.businessUnit.publicCode,
    businessUnitPublicCode: appData.businessUnit.publicCode,
    user: appData.user.userAccount,
    token: appData.token,
  });

  const { useCases } = useCaseForStaff({
    businessUnitPrevious: appData.businessUnit.publicCode,
    useCasesByStaff: appData.useCasesByStaff,
    businessUnit: appData.businessUnit.publicCode,
    userAccount: appData.user.userAccount,
    businessManagerCode: appData.businessManager.publicCode,
    token: appData.token,
  });

  const { optionsHeader } = mainNavigation(optionsCards);

  const collapseMenuRef = useRef<HTMLDivElement>(null);
  const BusinessUnitChangeRef = useRef<HTMLDivElement>(null);
  const IsTablet = useMediaQuery("(max-width: 944px)");
  const SmallScreen = useMediaQuery("(max-width: 532px)");

  const HandleLogoClick = () => {
    setCollapse(false);
  };

  const Username = appData.user.userName.split(" ")[0];

  const multipleBusinessUnits = businessUnitsToTheStaff.length > 1;

  useEffect(() => {
    if (useCases.length > 0) {
      const useCasesJSON = JSON.stringify(useCases);
      setUseCases(useCasesJSON);
    }
  }, [useCases]);

  const handlelogout = (redirect?: string) => {
    logout({ logoutParams: { returnTo: window.location.origin + redirect } });
  };
  useEffect(() => {
    if (hasError) {
      setDataExists(false);
    }

    if (optionsCards && optionsCards?.length > 0) {
      setDataExists(true);
    }
  }, [optionsCards, hasError]);

  const padding = !dataExists
    ? basic.spacing.s0
    : `${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s500}`;

  return {
    collapse,
    setCollapse,
    collapseMenuRef,
    BusinessUnitChangeRef,
    IsTablet,
    SmallScreen,
    Username,
    businessUnitsToTheStaff,
    HandleLogoClick,
    optionsCards,
    loading,
    dataExists,
    multipleBusinessUnits,
    handlelogout,
    optionsHeader,
    padding,
  };
};

export { useHome };
