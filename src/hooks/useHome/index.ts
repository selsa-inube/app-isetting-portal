import { useContext, useEffect, useState, useRef } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { AuthAndData } from "@context/authAndDataProvider";
import { useOptionsByBusinessUnits } from "@hooks/subMenu/useOptionsByBusinessUnits";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { enviroment } from "@config/environment";
import { useCaseForStaff } from "@hooks/staffPortal/useCaseForStaff";
import { useIAuth } from "@inube/iauth-react";
import { mainNavigation } from "@src/config/nav";
import { basic } from "@src/design/tokens";

const useHome = () => {
  const {
    appData,
    businessUnitsToTheStaff,
    setUseCases,
  } = useContext(AuthAndData);
  const { logout } = useIAuth();
  const { optionsCards, loading, hasError } = useOptionsByBusinessUnits({
    staffPortalId: appData.portal.publicCode,
    businessUnit: appData.businessUnit.publicCode,
    businessUnitPublicCode: appData.businessUnit.publicCode,
    user: appData.user.userAccount,
    token: appData.token,
  });
  const [dataExists, setDataExists] = useState<boolean>(false);

  const { optionsHeader } = mainNavigation(optionsCards);
  const [Collapse, SetCollapse] = useState(false);
  const [SelectedClient, SetSelectedClient] = useState<string>("");
  const CollapseMenuRef = useRef<HTMLDivElement>(null);
  const BusinessUnitChangeRef = useRef<HTMLDivElement>(null);
  const IsTablet = useMediaQuery("(max-width: 944px)");
  const SmallScreen = useMediaQuery("(max-width: 532px)");

  useEffect(() => {
    if (appData.businessUnit.publicCode) {
      SetSelectedClient(appData.businessUnit.abbreviatedName);
    }
  }, [appData]);

  const HandleLogoClick = (BusinessUnit: IBusinessUnitsPortalStaff) => {
    SetSelectedClient(BusinessUnit.abbreviatedName);
    SetCollapse(false);
  };

  const Username = appData.user.userName.split(" ")[0];

  const multipleBusinessUnits = businessUnitsToTheStaff.length > 1;
  const { useCases } = useCaseForStaff({
    businessUnitPrevious: appData.businessUnit.publicCode,
    useCasesByStaff: appData.useCasesByStaff,
    businessUnit: appData.businessUnit.publicCode,
    userAccount: appData.user.userAccount,
    businessManagerCode: appData.businessManager.publicCode,
    token: appData.token,
  });

  useEffect(() => {
    if (useCases.length > 0) {
      const useCasesJSON = JSON.stringify(useCases);
      setUseCases(useCasesJSON);
    }
  }, [useCases]);

  const handlelogout = () => {
    logout({ logoutParams: { returnTo: enviroment.REDIRECT_URI } });
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
    Collapse,
    SetCollapse,
    SelectedClient,
    SetSelectedClient,
    CollapseMenuRef,
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
