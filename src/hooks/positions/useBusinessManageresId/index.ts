import { useState, useEffect } from "react";
import { getBusinessManagersId } from "@services/staffPortal/getBusinessManagersId";
import { IBusinessUnitsPortalStaff } from "@ptypes/positions/IBusinessUnitsPortalStaff";

const UseBusinessManagersId = (businessUnitCode: string, portalPublicCode?: string) => {
  const [businessManagersData, SetbusinessManagersData] = useState<
    IBusinessUnitsPortalStaff[]
  >([]);
  const [HasError, SetHasError] = useState(false);

  useEffect(() => {
    const FetchBusinessManagers = async () => {
      if (!portalPublicCode) {
        SetHasError(true);
        return;
      }
      try {
        const NewData = await getBusinessManagersId(businessUnitCode);
        SetbusinessManagersData(NewData);
      } catch (Error) {
        console.info(Error);
        SetHasError(true);
      }
    };

    FetchBusinessManagers();
  }, [portalPublicCode]);

  return { businessManagersData, HasError };
};

export { UseBusinessManagersId };
