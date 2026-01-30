import { useState, useEffect } from "react";
import { getBusinessManagersId } from "@services/staffPortal/getBusinessManagersId";
import { IBusinessUnitsPortalStaff } from "@ptypes/positions/IBusinessUnitsPortalStaff";
import { IUseBusinessManagersId } from "@ptypes/hooks/IUseBusinessManagersId";

const useBusinessManagersId = (props: IUseBusinessManagersId) => {
  const { businessUnitCode, portalPublicCode, token } = props;
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
        const NewData = await getBusinessManagersId(businessUnitCode, token);
        SetbusinessManagersData(NewData);
      } catch (Error) {
        console.info(Error);
        SetHasError(true);
      }
    };

    FetchBusinessManagers();
  }, [portalPublicCode, businessUnitCode]);

  return { businessManagersData, HasError };
};

export { useBusinessManagersId };
