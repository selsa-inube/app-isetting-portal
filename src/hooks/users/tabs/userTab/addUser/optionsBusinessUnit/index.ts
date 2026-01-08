import { useContext, useEffect, useState } from "react";

import { AuthAndData } from "@context/authAndDataProvider";

import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IUseOptionsBusinessEntity } from "@ptypes/hooks/IUseOptionsBusinessEntity";
import { optionsUnits } from "@mocks/users/businessUnits";

const useOptionsBusinessEntity = (props: IUseOptionsBusinessEntity) => {
  const { formValues } = props;
  const { appData } = useContext(AuthAndData);

  const [entriesAdditionalBusinessEntity, setEntriesAdditionalBusinessEntity] =
    useState<IFormEntry[]>([]);

  useEffect(() => {
    if (
      entriesAdditionalBusinessEntity.length === 0 &&
      optionsUnits.length > 0
    ) {
      setEntriesAdditionalBusinessEntity([
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
    setEntriesAdditionalBusinessEntity,
    entriesAdditionalBusinessEntity,
  };
};
export { useOptionsBusinessEntity };
