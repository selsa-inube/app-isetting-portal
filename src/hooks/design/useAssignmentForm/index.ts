import { useEffect, useState, useMemo } from "react";
import { IFilterTag } from "@isettingkit/business-rules";
import { useMediaQuery } from "@inubekit/inubekit";
import { IOptionItemChecked } from "@design/select/OptionItem";
import { IFormEntry } from "@ptypes/assignmentForm/IFormEntry";
import { assigmentLabels } from "@config/assignmentForm/assigmentLabels";
import { actionButtonsLabels } from "@config/assignmentForm/actionButtonsLabels";
import { compareObjects } from "@utils/compareObjects";

const UseAssignmentForm = (
  entries: IFormEntry[],
  setSelectedToggle: React.Dispatch<
    React.SetStateAction<IFormEntry[] | undefined>
  >,
  editDataOption: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  withFilter: boolean,
  appliedFilters?: IFilterTag[]
) => {
  const [InitialValues] = useState(entries);
  const [loading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isAssignAll, setIsAssignAll] = useState(false);
  const [selectedOptions] = useState<IOptionItemChecked[]>([]);
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const [filteredRows, setFilteredRows] = useState<IFormEntry[]>(entries);
  const [filterValue, setFilterValue] = useState("");
  const smallScreen = useMediaQuery("(max-width: 1001px)");

  const handleToggleRol = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const menuOptions = useMemo(() => {
    const baseOptions = [
      {
        id: "allocate-all",
        label: actionButtonsLabels.CheckAll,
        handleClick: () => handleToggleAllEntries(true),
      },
      {
        id: "deallocate-all",
        label: actionButtonsLabels.uncheckAll,
        handleClick: () => handleToggleAllEntries(false),
      },
    ];

    if (withFilter) {
      baseOptions.push({
        id: "allocate-rol",
        label: `${actionButtonsLabels.filter} (${appliedFilters?.length})`,
        handleClick: () => {
          setShowModal(true);
        },
      });
    }

    return baseOptions;
  }, [withFilter, appliedFilters?.length]);

  useEffect(() => {
    if (appliedFilters && appliedFilters.length > 0) {
      const newFilteredRows = entries.filter((entry) =>
        appliedFilters.some((filter) => filter.label === entry.applicationStaff)
      );
      setFilteredRows(newFilteredRows);
    } else {
      setFilteredRows(entries);
    }
  }, [appliedFilters]);

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

        return updatedEntry;
      }

      return entry;
    });
    setSelectedToggle(newEntries);
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

  const valuesEqual = compareObjects(InitialValues, filteredRows);

  const valuesEmpty = filteredRows.every(
    (entry) =>
      entry.value === "" || entry.value === null || entry.value === undefined
  );

  useEffect(() => {
    if (editDataOption) {
      setIsDisabledButton(valuesEqual || valuesEmpty);
    } else {
      setIsDisabledButton(false);
    }
  }, [InitialValues, filteredRows]);

  const handleReset = () => {
    setFilteredRows(InitialValues);
  };

  const labelButtonPrevious = editDataOption
    ? assigmentLabels.cancel
    : assigmentLabels.previous;

  const labelButtonNext = editDataOption
    ? assigmentLabels.send
    : assigmentLabels.next;

  return {
    filteredRows,
    filterValue,
    isAssignAll,
    isDisabledButton,
    labelButtonNext,
    labelButtonPrevious,
    loading,
    menuOptions,
    selectedOptions,
    showMenu,
    smallScreen,
    handleCloseMenuRol,
    handleFilterInput,
    handleReset,
    handleToggleAllEntries,
    handleToggleRol,
    onHandleSelectCheckChange,
  };
};

export { UseAssignmentForm };
