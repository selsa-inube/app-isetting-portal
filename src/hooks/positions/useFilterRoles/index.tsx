import { useCallback, useState } from "react";

import { IUseFilter } from "@ptypes/hooks/positions/IUseFilter";
import { ILabels } from "@ptypes/hooks/assignments/filter/ILabel";

const useFilterRoles = (props: IUseFilter) => {
  const { options } = props;

  const optionsMapped = options.map((role) => ({
    id: role.id,
    label: role.value,
    value: role.value,
  }));
  const [filters, setFilters] = useState<ILabels>({ label: [] });

  const appliedFilters = "";
  const handleFilterChange = useCallback((_name: string, values: string) => {
    const selectedIds = values.split(",").map((value) => value.trim());
    const selectedValues = options
      .filter((option) => selectedIds.includes(option.id))
      .map((option) => option.value);

    setFilters({ label: selectedValues });
  }, []);

  return {
    appliedFilters,
    optionsMapped,
    handleFilterChange,
    filters,
  };
};

export { useFilterRoles };
