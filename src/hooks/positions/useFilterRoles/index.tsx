import { MdApps, MdOutlineApps } from "react-icons/md";
import { useCallback, useMemo, useState } from "react";
import { IOption } from "@inubekit/inubekit";
import { IFilterTag } from "@isettingkit/business-rules";
import { IUseFilter } from "@ptypes/hooks/positions/IUseFilter";

const useFilterRoles = (props: IUseFilter) => {
  const { options } = props;

  const [showModal, setShowModal] = useState(false);
  const [appliedValues, setAppliedValues] = useState({ application: "" });
  const [filters, setFilters] = useState({ application: "" });

  const optionsRecord = options.reduce(
    (option, item, index) => ({
      ...option,
      [index]: item.value,
    }),
    {} as Record<string, string>
  );

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const removeApplication = useCallback(
    (app: string) => {
      const next = filters.application
        .split(",")
        .filter((value) => value && value !== app)
        .join(",");
      setFilters((prev) => ({ ...prev, application: next }));
      setAppliedValues((prev) => ({ ...prev, application: next }));
    },
    [filters.application]
  );

  const appliedFilters: IFilterTag[] = useMemo(() => {
    const appFilters = appliedValues.application
      .split(",")
      .filter(Boolean)
      .map((application) => ({
        id: `application-${application}`,
        icon: <MdOutlineApps />,
        label: optionsRecord[application] || application,
        removable: true,
        onClose: () => removeApplication(application),
      }));

    return appFilters;
  }, [appliedValues, removeApplication]);

  const handleFilterChange = useCallback((name: string, values: string) => {
    setFilters((prev) => ({ ...prev, [name]: values }));
  }, []);

  const handleApply = useCallback(() => {
    setAppliedValues(filters);
    setShowModal(false);
  }, [filters]);

  const handleClear = useCallback(() => {
    setFilters({ application: "" });
    setAppliedValues({ application: "" });
  }, []);

  const formFields = [
    {
      icon: <MdApps />,
      label: "Aplicaciones",
      name: "application",
      options: Object.keys(optionsRecord).map((key) => ({
        id: key,
        value: key,
        label: optionsRecord[key],
      })) as IOption[],
      values: filters.application,
    },
  ];

  return {
    appliedFilters,
    formFields,
    showModal,
    setShowModal,
    handleFilterChange,
    handleClear,
    handleApply,
    handleToggleModal,
  };
};

export { useFilterRoles };
