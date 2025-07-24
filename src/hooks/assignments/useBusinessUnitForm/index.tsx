import { useEffect, useState } from "react";
import { MdCheck, MdClear } from "react-icons/md";
import { useMediaQuery } from "@inubekit/inubekit";
import { EModalState } from "@enum/modalState";
import { EComponentAppearance } from "@enum/appearances";
import { eventBus } from "@events/eventBus";
import { compareObjects } from "@utils/compareObjects";
import { assignmentLabels } from "@config/assignments/assignmentForm/assigmentLabels";
import { actionButtonsLabels } from "@config/assignments/assignmentForm/actionButtonsLabels";
import { enviroment } from "@config/environment";
import { IUseBusinessunitForm } from "@ptypes/hooks/assignments/IUseBusinessunitForm";
import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";

const useBusinessUnitForm = (props: IUseBusinessunitForm) => {
  const { entries, setSelectedToggle, editDataOption } = props;

  const [InitialValues] = useState(entries);
  const [loading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isAssignAll, setIsAssignAll] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const [filteredRows, setFilteredRows] = useState<IBusinessEntry[]>(entries);
  const [searchBusinessUnit, setSearchBusinessUnit] = useState("");
  const isMobile = useMediaQuery(enviroment.IS_MOBILE_970);

  const handleToggleUnits = () => {
    setShowMenu(!showMenu);
  };

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

  const handleSearchBusinessUnit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBusinessUnit(e.target.value);
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    setSelectedToggle(entries);
  }, []);

  const handleSelectCheckChange = (id: string) => {
    const toggleActiveById = (entries: typeof filteredRows) =>
      entries.map((entry) =>
        entry.id === id ? { ...entry, isActive: !entry.isActive } : entry
      );

    setFilteredRows(toggleActiveById);
    setSelectedToggle(toggleActiveById);
  };

  useEffect(() => {
    setSelectedToggle((currentEntries) => {
      let newFilter = currentEntries;

      if (searchBusinessUnit.length > 0) {
        newFilter = newFilter.filter((entry) =>
          entry.value?.toLowerCase().includes(searchBusinessUnit.toLowerCase())
        );
      }

      setFilteredRows(newFilter);
      return currentEntries;
    });
  }, [searchBusinessUnit]);

  const valuesEqual = compareObjects(InitialValues, filteredRows);

  const valuesEmpty = filteredRows.every(
    (entry) =>
      entry.publicCode === "" ||
      entry.publicCode === null ||
      entry.publicCode === undefined
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

  useEffect(() => {
    if (editDataOption) {
      setIsDisabledButton(valuesEqual || valuesEmpty);
    } else {
      const areAllInactive = (): boolean => {
        return filteredRows.every((entry) => entry.isActive === false);
      };
      setIsDisabledButton(areAllInactive);
    }
  }, [InitialValues, filteredRows]);

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
    isAssignAll,
    isDisabledButton,
    labelButtonNext,
    labelButtonPrevious,
    loading,
    searchBusinessUnit,
    menuOptions,
    showMenu,
    isMobile,
    handleClose,
    handleSearchBusinessUnit,
    handleToggleAllEntries,
    handleToggleUnits,
    handleSelectCheckChange,
  };
};

export { useBusinessUnitForm };
