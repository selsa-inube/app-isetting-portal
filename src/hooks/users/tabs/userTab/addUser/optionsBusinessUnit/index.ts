import { Dispatch, SetStateAction, useMemo } from "react";
import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IUseOptionsBusinessEntity } from "@ptypes/hooks/IUseOptionsBusinessEntity";

const useOptionsBusinessEntity = (props: IUseOptionsBusinessEntity) => {
  const { formValues, setFormValues } = props;

  const entriesAdditionalBusinessEntity = formValues.businessUnitsStep ?? [];

  const setSelectedToggle: Dispatch<SetStateAction<IFormEntry[]>> = (value) => {
    setFormValues((prev) => {
      const previous = prev.businessUnitsStep ?? [];

      const updated = typeof value === "function" ? value(previous) : value;
      return {
        ...prev,
        businessUnitsStep: updated,
      };
    });
  };

  const activeEntries = useMemo(
    () => entriesAdditionalBusinessEntity.filter((e) => e.isActive),
    [entriesAdditionalBusinessEntity],
  );

  return {
    setSelectedToggle,
    entriesAdditionalBusinessEntity,
    activeEntries,
  };
};

export { useOptionsBusinessEntity };
