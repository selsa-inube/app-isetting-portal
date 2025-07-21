import { IBusinessUnitForm } from "@ptypes/assignments/assisted/IBusinessUnitForm";
import { UseBusinessUnitForm } from "@hooks/assignments/useBusinessUnitForm";
import { BusinessUnitFormUI } from "./interface";

const BusinessUnitForm = (props: IBusinessUnitForm) => {
  const {
    entries,
    editDataOption,
    onButtonClick,
    onPreviousStep,
    setSelectedToggle,
  } = props;

  const {
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
  } = UseBusinessUnitForm({
    entries,
    setSelectedToggle,
    editDataOption,
  });

  return (
    <BusinessUnitFormUI
      editDataOption={editDataOption}
      filteredEntries={filteredRows}
      isAssignAll={isAssignAll}
      isDisabledButton={isDisabledButton}
      isMobile={isMobile}
      labelButtonNext={labelButtonNext}
      labelButtonPrevious={labelButtonPrevious}
      loading={loading}
      menuOptions={menuOptions}
      onButtonClick={onButtonClick}
      onClose={handleClose}
      onSearchBusinessUnit={handleSearchBusinessUnit}
      onSelectCheckChange={handleSelectCheckChange}
      onToggleAllEntries={handleToggleAllEntries}
      onToggleUnits={handleToggleUnits}
      searchBusinessUnit={searchBusinessUnit}
      showMenu={showMenu}
      onPreviousStep={onPreviousStep}
    />
  );
};

export { BusinessUnitForm };
