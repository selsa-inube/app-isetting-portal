import { IAssignmentForm } from "@ptypes/assignmentForm/IAssignmentForm";
import { AssignmentFormUI } from "./interface";

const AssignmentForm = (props: IAssignmentForm) => {
  const {
    appliedFilters,
    filteredRows,
    filterValue,
    formFields,
    handleApply,
    handleClear,
    handleCloseMenuRol,
    handleFilterChange,
    handleFilterInput,
    handleToggleAllEntries,
    handleToggleModal,
    handleToggleRol,
    isAssignAll,
    isDisabledButton,
    labelButtonNext,
    labelButtonPrevious,
    loading,
    menuOptions,
    onButtonClick,
    onHandleSelectCheckChange,
    onReset,
    showMenu,
    showModal,
    smallScreen,
    withFilter,
  } = props;

  const showFilter = withFilter && !smallScreen;

  const showFilterModal = withFilter && showModal;

  return (
    <AssignmentFormUI
      appliedFilters={appliedFilters}
      fields={formFields}
      filter={filterValue}
      filteredEntries={filteredRows}
      filterValue={filterValue}
      handleClearFilters={handleClear}
      handleCloseMenuRol={handleCloseMenuRol}
      handleFilterInput={handleFilterInput}
      handleToggleAllEntries={handleToggleAllEntries}
      handleToggleModal={handleToggleModal}
      handleToggleRol={handleToggleRol}
      isAssignAll={isAssignAll}
      isDisabledButton={isDisabledButton}
      labelButtonNext={labelButtonNext}
      labelButtonPrevious={labelButtonPrevious}
      loading={loading}
      menuOptions={menuOptions}
      onApply={handleApply}
      onButtonClick={onButtonClick}
      onFilterChange={handleFilterChange}
      onReset={onReset}
      onSelectCheckChange={onHandleSelectCheckChange}
      showMenu={showMenu}
      smallScreen={smallScreen}
      showFilter={showFilter}
      showFilterModal={showFilterModal}
    />
  );
};

export { AssignmentForm };
