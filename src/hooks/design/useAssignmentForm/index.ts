import { useEffect, useState } from "react";
import { IOptionItemChecked } from "@design/select/OptionItem";
import { IEntry } from "@design/templates/assignmentForm/types";
import { useMediaQuery } from "@inubekit/inubekit";

const UseAssignmentForm = (
  entries: IEntry[],
  changeData: IEntry[],
  setChangedData: (changeData: IEntry[]) => void,
  handleChange: (entries: IEntry[]) => void,
  setSelectedToggle: React.Dispatch<React.SetStateAction<IEntry[] | undefined>>,
  valueSelect: { id: string; value: string }[]
) => {
  const [filter, setFilter] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [isAssignAll, setIsAssignAll] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<IOptionItemChecked[]>(
    []
  );
  const [filteredRows, setFilteredRows] = useState<IEntry[]>(entries);
  const [filterValue, setFilterValue] = useState("");
  const [dataValidations, setDataValidations] = useState(entries.length === 0);

  const [showModal, setShowModal] = useState<boolean>(false);
  const smallScreen = useMediaQuery("(max-width: 1001px)");
  const [tempSelectedOptions, setTempSelectedOptions] = useState<
    IOptionItemChecked[]
  >([]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
    if (!showModal) {
      setTempSelectedOptions(selectedOptions);
    }
  };

  const handleSelectChange = (options: IOptionItemChecked[]) => {
    setTempSelectedOptions((prev) => {
      const newOptions = options.filter((option) => option.checked);
      const mergedOptions = [...prev, ...newOptions].reduce<
        IOptionItemChecked[]
      >((acc, option) => {
        if (!acc.some((item) => item.id === option.id)) {
          acc.push(option);
        }
        return acc;
      }, []);

      return mergedOptions;
    });
  };

  const handleApplyFilters = () => {
    setShowModal(false);

    setSelectedOptions((prev) => {
      const mergedOptions = [...prev, ...tempSelectedOptions].reduce<
        IOptionItemChecked[]
      >((acc, option) => {
        if (!acc.some((item) => item.id === option.id)) {
          acc.push(option);
        }
        return acc;
      }, []);
      return mergedOptions;
    });
  };

  const handleClearFilters = () => {
    setSelectedOptions([]);
    setTempSelectedOptions([]);
  };

  const handleToggleRol = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  const menuOptions = [
    {
      id: "allocate-all",
      label: "Asignar todos",
      handleClick: () => handleToggleAllEntries(true),
    },
    {
      id: "deallocate-all",
      label: "Desasignar todos",
      handleClick: () => handleToggleAllEntries(false),
    },
    {
      id: "allocate-rol",
      label: `Filtrar (${selectedOptions.length})`,
      handleClick: handleToggleModal,
    },
  ];

  const handleToggleAllEntries = (allocate: boolean) => {
    const newFilteredEntries = filteredRows.map((entry) => ({
      ...entry,
      isActive: allocate,
    }));

    const newEntries = entries.map((entry) => {
      const filteredEntry = newFilteredEntries.find((e) => e.id === entry.id);
      return filteredEntry ? filteredEntry : entry;
    });

    setIsAssignAll(allocate);
    handleChange(newEntries);
    setFilteredRows(newFilteredEntries);
    setSelectedToggle(newEntries);
  };
  const handleFilterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  const handleCloseMenuRol = () => {
    setShowMenu(false);
  };

  const handleToggleEntry = (id: string) => {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        const updatedEntry = {
          ...entry,
          isActive: !entry.isActive,
        };

        if (updatedEntry.isActive !== entry.isActive) {
          const updatedChangedData = [
            ...changeData.filter((e) => e.id !== entry.id),
            updatedEntry,
          ];
          setChangedData(updatedChangedData);
        }

        return updatedEntry;
      }

      return entry;
    });
    setSelectedToggle(newEntries);
    handleChange(newEntries);
  };

  const onHandleSelectCheckChange = (id: string) => {
    setFilteredRows((prevRows) => {
      return prevRows.map((entry) =>
        entry.id === id
          ? {
              ...entry,
              isActive: !entry.isActive,
            }
          : entry
      );
    });

    handleToggleEntry(id);
  };

  useEffect(() => {
    if (selectedOptions.length) {
      setFilteredRows(
        entries.filter((entry) =>
          selectedOptions.some(
            (option) => option.label === entry.applicationName
          )
        )
      );
    }
  }, [selectedOptions]);

  const newOptions = valueSelect.map((entry) => ({
    id: entry.id,
    label: entry.value,
    checked: filteredRows.some((row) => row.applicationName === entry.value),
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleChange(entries);
  };

  useEffect(() => {
    if (selectedOptions.length === 0 && filterValue.length === 0) {
      setFilteredRows(entries);
      return;
    }

    let newFilter = entries;

    if (selectedOptions.length > 0) {
      newFilter = newFilter.filter((entry) =>
        selectedOptions.some(
          (option) => option.label === entry.applicationStaff
        )
      );
    }

    if (filterValue.length > 0) {
      newFilter = newFilter.filter((entry) =>
        entry.value.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    setFilteredRows(newFilter);
  }, [selectedOptions, filterValue, entries]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);

    const filterText = e.target.value.toLowerCase();

    const newFilteredRows = entries.filter(
      (entry) =>
        entry.value.toLowerCase().includes(filterText) ||
        (entry.applicationStaff ?? "").toLowerCase().includes(filterText)
    );
    setFilteredRows(newFilteredRows);
  };

  return {
    filteredRows,
    filterValue,
    filter,
    setDataValidations,
    setFilter,
    handleFilterInput,
    handleFilterChange,
    handleToggleAllEntries,
    onHandleSelectCheckChange,
    handleSelectChange,
    handleClearFilters,
    selectedOptions,
    setSelectedOptions,
    handleApplyFilters,
    menuOptions,
    isAssignAll,
    showModal,
    setShowMenu,
    showMenu,
    dataValidations,
    newOptions,
    handleSubmit,
    handleToggleRol,
    handleCloseMenuRol,
    handleToggleModal,
    smallScreen,
  };
};

export { UseAssignmentForm };
