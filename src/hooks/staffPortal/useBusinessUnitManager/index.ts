import { useState, useEffect } from "react";

import { IUseBusinessManagers } from "@ptypes/hooks/IUseBusinessManagers";

import { getBusinessUnitManager } from "@services/staffPortal/getBusinessUnitManager";
import { IBusinessesUnit } from "@ptypes/staffPortal/IBusinessesUnit";

const useBusinessUnitManagers = (props: IUseBusinessManagers) => {
  const { portalPublicCode } = props;
  const [businessUnitManagersData, setBusinessUnitManagersData] =
    useState<IBusinessesUnit>({} as IBusinessesUnit);
  const [hasError, setHasError] = useState(false);
  const [errorCode, setErrorCode] = useState<number>(0);

  useEffect(() => {
    const fetchBusinessManagers = async () => {
      if (!portalPublicCode) {
        setHasError(true);
        setErrorCode(1000);
        return;
      }
      try {
        if (
          portalPublicCode.businessManagerCode &&
          portalPublicCode.businessManagerCode.length > 0
        ) {
          const newData = await getBusinessUnitManager(
            portalPublicCode.businessManagerCode,
            "",
          );

          setBusinessUnitManagersData(newData);
        }
      } catch (error) {
        console.info(error);
        setHasError(true);
        setErrorCode(500);
      }
    };

    fetchBusinessManagers();
  }, [portalPublicCode]);

  return { businessUnitManagersData, hasError, errorCode };
};

export { useBusinessUnitManagers };
