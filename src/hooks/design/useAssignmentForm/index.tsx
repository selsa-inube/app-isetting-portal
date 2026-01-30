import { useEffect, useState } from "react";
import { MdCheck, MdClear } from "react-icons/md";
import { useMediaQuery } from "@inubekit/inubekit";

import { EComponentAppearance } from "@enum/appearances";

import { actionButtonsLabels } from "@config/assignments/assignmentForm/actionButtonsLabels";
import { IUseAssignmentForm } from "@ptypes/hooks/assignments/IUseAssignmentForm";
import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { assignmentLabels } from "@src/config/assignments/assignmentForm/assigmentLabels";
import { mediaQueryMobile } from "@src/config/environment";

const useAssignmentForm = (props: IUseAssignmentForm) => {
  const { entries, setSelectedToggle, filters, editDataOption } = props;

  const withFilter = true;
  const [loading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isAssignAll, setIsAssignAll] = useState(false);

  const [filteredRows, setFilteredRows] = useState<IFormEntry[]>(entries);
  const [filterValue, setFilterValue] = useState("");
  const smallScreen = useMediaQuery(mediaQueryMobile);
  const handleToggleRol = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

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

  const handleToggleAllEntries = (allocate: boolean) => {
    const newFilteredEntries = filteredRows.map((entry) => ({
      ...entry,
      isActive: allocate,
    }));

    const newEntries = entries.map((entry) => {
      const filteredEntry = newFilteredEntries.find(
        (filterEntry) => filterEntry.id === entry.id,
      );
      return filteredEntry ? filteredEntry : entry;
    });

    setIsAssignAll(allocate);
    setSelectedToggle(newEntries);
  };
  const handleFilterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
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
          : entry,
      );
    });

    handleToggleEntry(id);
  };

  useEffect(() => {
    let result = entries;

    if (filters?.label && filters.label.length > 0) {
      result = result.filter(
        (entry) =>
          entry.applicationStaff &&
          filters.label.includes(entry.applicationStaff),
      );
    }

    if (filterValue.length > 0) {
      result = result.filter((entry) =>
        entry.value.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    setFilteredRows(result);
    setIsAssignAll(result.length > 0 && result.every((e) => e.isActive));
  }, [entries, filters, filterValue]);

  const labelButtonPrevious = editDataOption
    ? assignmentLabels.cancel
    : assignmentLabels.previous;

  const labelButtonNext = editDataOption
    ? assignmentLabels.send
    : assignmentLabels.next;

  return {
    filteredRows,
    filterValue,
    isAssignAll,
    labelButtonNext,
    labelButtonPrevious,
    loading,
    menuOptions,
    showMenu,
    smallScreen,
    withFilter,
    handleFilterInput,
    handleToggleAllEntries,
    handleToggleRol,
    onHandleSelectCheckChange,
  };
};
export { useAssignmentForm };
