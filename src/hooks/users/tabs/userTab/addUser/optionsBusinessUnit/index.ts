import { useEffect, useMemo, useState } from "react";

import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IUseOptionsBusinessEntity } from "@ptypes/hooks/IUseOptionsBusinessEntity";
import { useBusinessUnits } from "@src/hooks/useBusinessUnits";

const useOptionsBusinessEntity = (props: IUseOptionsBusinessEntity) => {
  const { formValues, setFormValues } = props;

  const [entriesAdditionalBusinessEntity, setEntriesAdditionalBusinessEntity] =
    useState<IFormEntry[]>([]);

  const { businessUnits } = useBusinessUnits();

  useEffect(() => {
    if (
      entriesAdditionalBusinessEntity.length === 0 &&
      businessUnits.length > 0
    ) {
      const activeIds = new Set(
        (formValues.businessUnitsStep ?? []).map((e) => e.id)
      );

      setEntriesAdditionalBusinessEntity(
        businessUnits.map((unit) => ({
          id: unit.publicCode!,
          value: unit.abbreviatedName!,
          isActive: activeIds.has(unit.publicCode!),
        }))
      );
    }
  }, [
    businessUnits,
    entriesAdditionalBusinessEntity.length,
    formValues.businessUnitsStep,
  ]);

  const activeEntries = useMemo(
    () => entriesAdditionalBusinessEntity.filter((e) => e.isActive),
    [entriesAdditionalBusinessEntity]
  );

  useEffect(() => {
    const current = formValues.businessUnitsStep ?? [];

    const currentIds = current.map((e) => e.id).sort();
    const activeIds = activeEntries.map((e) => e.id).sort();

    const same =
      currentIds.length === activeIds.length &&
      currentIds.every((id, i) => id === activeIds[i]);

    if (!same) {
      setFormValues((prev) => ({
        ...prev,
        businessUnitsStep: activeEntries,
      }));
    }
  }, [activeEntries, formValues.businessUnitsStep, setFormValues]);

  return {
    setEntriesAdditionalBusinessEntity,
    entriesAdditionalBusinessEntity,
    activeEntries,
  };
};

export { useOptionsBusinessEntity };
