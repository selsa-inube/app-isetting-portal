import { useContext, useEffect, useState, useRef } from "react";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { useMediaQuery } from "@inubekit/inubekit";
import { AuthAndData } from "@context/authAndDataProvider";

const UseHome = () => {
  const { appData, businessUnitsToTheStaff, setBusinessUnitSigla } =
    useContext(AuthAndData);

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
  };
};

export { UseHome };
