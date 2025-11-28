import { IAssignmentForm } from "@ptypes/assignments/assignmentForm/IAssignmentForm";
import { AssignmentFormUI } from "./interface";

const AssignmentForm = (props: IAssignmentForm) => {
  const {
    appliedFilters,
    filteredRows,
    filterValue,
    formFields,
    handleFilterChange,
    handleFilterInput,
    handleToggleAllEntries,
    handleToggleRol,
    isAssignAll,
    labelButtonNext,
    labelButtonPrevious,
    loading,
    menuOptions,
    onButtonClick,
    onHandleSelectCheckChange,
    onReset,
    showMenu,
    smallScreen,
    withFilter,
    filterTitle,
    filterPlaceholder,
  } = props;

  return (
    <AssignmentFormUI
      appliedFilters={appliedFilters}
      fields={formFields}
      filteredEntries={filteredRows}
      filterValue={filterValue}
      handleFilterInput={handleFilterInput}
      handleToggleAllEntries={handleToggleAllEntries}
      handleToggleRol={handleToggleRol}
      isAssignAll={isAssignAll}
      labelButtonNext={labelButtonNext}
      labelButtonPrevious={labelButtonPrevious}
      loading={loading}
      menuOptions={menuOptions}
      onButtonClick={onButtonClick}
      onFilterChange={handleFilterChange}
      onReset={onReset}
      onSelectCheckChange={onHandleSelectCheckChange}
      showMenu={showMenu}
      smallScreen={smallScreen}
      withFilter={withFilter}
      filterTitle={filterTitle}
      filterPlaceholder={filterPlaceholder}
    />
  );
};

export { AssignmentForm };
