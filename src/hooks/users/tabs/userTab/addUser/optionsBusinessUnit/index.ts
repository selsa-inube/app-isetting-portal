import { useContext, useEffect, useState } from "react";

import { AuthAndData } from "@context/authAndDataProvider";
import { useOptionsByBusinessUnit } from "@hooks/staffPortal/useOptionsByBusinessUnit";
import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IUseOptionsBusinessEntity } from "@ptypes/hooks/IUseOptionsBusinessEntity";

const useOptionsBusinessEntity = (props: IUseOptionsBusinessEntity) => {
  const { formValues } = props;
  const { appData } = useContext(AuthAndData);
  const { optionsSelectUnits: optionsUnits } = useOptionsByBusinessUnit({
    publicCode: appData.portal.publicCode,
    userAccount: appData.user.userAccount,
  });
  const [entriesAdditionalSaasService, setEntriesAdditionalSaasService] =
    useState<IFormEntry[]>([]);

  useEffect(() => {
    if (entriesAdditionalSaasService.length === 0 && optionsUnits.length > 0) {
      setEntriesAdditionalSaasService([
        ...formValues.businessUnits.map((value, index) => ({
          id: index.toString(),
          value,
          isActive: true,
        })),
        ...optionsUnits.map((unit) => ({
          id: unit.id!,
          value: unit.value!,
          isActive: false,
        })),
      ]);
    }
  }, [formValues.businessUnits, optionsUnits]);
  return {
    entriesAdditionalSaasService,
    setEntriesAdditionalSaasService,
  };
};
export { useOptionsBusinessEntity };
