import { useContext, useEffect, useState, useRef } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { AuthAndData } from "@context/authAndDataProvider";
import { useOptionsByBusinessunits } from "@hooks/subMenu/useOptionsByBusinessunits";
import { decrypt } from "@utils/decrypt";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { useAuth0 } from "@auth0/auth0-react";
import { enviroment } from "@config/environment";
import { useCaseForStaff } from "@hooks/staffPortal/useCaseForStaff";

const useHome = () => {
  const {
    appData,
    businessUnitsToTheStaff,
    setBusinessUnitSigla,
    businessUnitSigla,
    setUseCases,
  } = useContext(AuthAndData);
  const { logout } = useAuth0();

  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";
  const { optionsCards, loading } = useOptionsByBusinessunits({
    staffPortalId,
    businessUnitSigla,
  });
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
    const SelectJSON = JSON.stringify(BusinessUnit);
    setBusinessUnitSigla(SelectJSON);
    SetSelectedClient(BusinessUnit.abbreviatedName);
    SetCollapse(false);
  };

  const Username = appData.user.userName.split(" ")[0];

  const hasData = optionsCards && optionsCards?.length > 0;

  const multipleBusinessUnits = businessUnitsToTheStaff.length > 1;
  const { useCases } = useCaseForStaff({
    businessUnitPrevious: appData.businessUnit.publicCode,
    useCasesByStaff: appData.useCasesByStaff,
    businessUnit: businessUnitSigla,
    userAccount: appData.user.userAccount,
    businessManagerCode: appData.businessManager.publicCode,
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
    hasData,
    multipleBusinessUnits,
    handlelogout,
  };
};

export { useHome };
