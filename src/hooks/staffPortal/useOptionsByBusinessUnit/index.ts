import { useState, useEffect } from "react";

import { IOption } from "@inubekit/inubekit";
import { IUseOptionsByBusinessUnit } from "@ptypes/staffPortal/IUseOptionsByBusinessUnit";
import { getBusinessUnitsPortalStaff } from "@services/staffPortal/getBusinessUnitsPortalStaff";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";


const useOptionsByBusinessUnit = (props: IUseOptionsByBusinessUnit) => {
  const { publicCode, userAccount } = props;
  const [optionsBusinessUnit, setOptionsBusinessUnit] = useState<
    IBusinessUnitsPortalStaff[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchOptionBusinessUnitData = async () => {
      setLoading(true);
      try {
        const data = await getBusinessUnitsPortalStaff(publicCode, userAccount);
        setOptionsBusinessUnit(data);
      } catch (error) {
        console.info(error);

        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchOptionBusinessUnitData();
  }, [publicCode, userAccount]);

  const optionsSelectUnits: IOption[] = optionsBusinessUnit.map(
    (option, index) => ({
      id: `${index}-${option.publicCode}`,
      label: option.abbreviatedName ?? "",
      value: option.publicCode ?? "",
    })
  );

  return {
    optionsSelectUnits,
    optionsBusinessUnit,
    loading,
    hasError,
  };
};

export { useOptionsByBusinessUnit };
