import { useEffect, useState } from "react";
import { MdCheck, MdClear, MdOutlineFilterAlt } from "react-icons/md";
import { useMediaQuery } from "@inubekit/inubekit";
import { IOptionItemChecked } from "@design/select/OptionItem";
import { compareObjects } from "@utils/compareObjects";
import { EModalState } from "@enum/modalState";
import { EComponentAppearance } from "@enum/appearances";
import { eventBus } from "@events/eventBus";
import { assignmentLabels } from "@config/assignments/assignmentForm/assigmentLabels";
import { actionButtonsLabels } from "@config/assignments/assignmentForm/actionButtonsLabels";
import { enviroment } from "@config/environment";
import { IUseAssignmentForm } from "@ptypes/hooks/assignments/IUseAssignmentForm";
import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";

const useAssignmentForm = (props: IUseAssignmentForm) => {
  const {
    entries,
    setSelectedToggle,
    editDataOption,
    setShowModal,
    withFilter,
    appliedFilters,
  } = props;

  const [InitialValues] = useState(entries);
  const [loading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isAssignAll, setIsAssignAll] = useState(false);
  const [selectedOptions] = useState<IOptionItemChecked[]>([]);
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const [filteredRows, setFilteredRows] = useState<IFormEntry[]>(entries);
  const [filterValue, setFilterValue] = useState("");
  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_970);

  const handleToggleRol = () => {
    setShowMenu(!showMenu);
  };

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

  const menuOptions = [
    {
      id: "deallocate-all",
      icon: <MdClear />,
      appearanceIcon: EComponentAppearance.PRIMARY,
      description: actionButtonsLabels.uncheckAll,
      onClick: () => {
        handleToggleAllEntries(false);
      },
      disabled: false,
    },
    {
      id: "allocate-all",
      icon: <MdCheck />,
      appearanceIcon: EComponentAppearance.PRIMARY,
      description: actionButtonsLabels.checkAll,
      onClick: () => handleToggleAllEntries(true),
      disabled: false,
    },
  ];

  if (withFilter) {
    menuOptions.push({
      id: "allocate-rol",
      icon: <MdOutlineFilterAlt />,
      appearanceIcon: EComponentAppearance.SUCCESS,
      description: `${actionButtonsLabels.filter} (${appliedFilters?.length})`,
      onClick: () => {
        setShowModal(true);
      },
      disabled: false,
    });
  }

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
    ? assignmentLabels.cancel
    : assignmentLabels.previous;

  const labelButtonNext = editDataOption
    ? assignmentLabels.send
    : assignmentLabels.next;

  useEffect(() => {
    eventBus.emit(EModalState.SECOND_MODAL_STATE, showMenu);
  }, [showMenu]);

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

export { useAssignmentForm };
