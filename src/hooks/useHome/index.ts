import { useContext, useEffect, useState, useRef } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { AuthAndData } from "@context/authAndDataProvider";
import { useOptionsByBusinessunits } from "@hooks/subMenu/useOptionsByBusinessunits";
import { decrypt } from "@utils/decrypt";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";

const useHome = () => {
  const {
    appData,
    businessUnitsToTheStaff,
    setBusinessUnitSigla,
    businessUnitSigla,
  } = useContext(AuthAndData);
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
  };
};

export { useHome };
