import { useState, useEffect } from "react";

import { getBusinessManagers } from "@services/staffPortal/getBusinessManager";

import { IUseBusinessManagers } from "@ptypes/hooks/IUseBusinessManagers";
import { IBusinessManagers } from "@ptypes/staffPortal/IBusinessManagers";
import { storeEncryptedData } from "@src/utils/storeEncryptedData";

const useBusinessManagers = (props: IUseBusinessManagers) => {
  const { portalPublicCode } = props;
  const [businessManagersData, setBusinessManagersData] =
    useState<IBusinessManagers>({} as IBusinessManagers);
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
          const newData = await getBusinessManagers(
            portalPublicCode.businessManagerCode,
            "",
          );

          storeEncryptedData({
            originatorId: newData.clientId,
            originatorCode: newData.publicCode,
            aplicationName: portalPublicCode.publicCode,
          });

          setBusinessManagersData(newData);
        }
      } catch (error) {
        console.info(error);
        setHasError(true);
        setErrorCode(500);
      }
    };

    fetchBusinessManagers();
  }, [portalPublicCode]);

  return { businessManagersData, hasError, errorCode };
};

export { useBusinessManagers };
