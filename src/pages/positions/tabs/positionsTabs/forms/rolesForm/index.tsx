import { useAssignmentForm } from "@hooks/design/useAssignmentForm";
import { useFilterRoles } from "@hooks/positions/useFilterRoles";
import { AssignmentForm } from "@design/forms/assignmentForm";
import { IEntry } from "@ptypes/design/table/IEntry";
import { IRolesForm } from "@ptypes/positions/IRolesForm";

const RolesForm = (props: IRolesForm) => {
  const {
    entries,
    options,
    withFilter,
    setSelectedToggle,
    onButtonClick,
    onReset,
    editDataOption = false,
  } = props;

  const {
    appliedFilters,
    formFields,
    showModal,
    handleFilterChange,
    handleClear,
    handleApply,
    handleToggleModal,
    setShowModal,
  } = useFilterRoles({
    options: options as IEntry[],
  });

  const {
    filteredRows,
    filterValue,
    isAssignAll,
    isDisabledButton,
    labelButtonNext,
    labelButtonPrevious,
    loading,
    menuOptions,
    showMenu,
    smallScreen,
    handleCloseMenuRol,
    handleFilterInput,
    handleToggleAllEntries,
    handleToggleRol,
    onHandleSelectCheckChange,
  } = useAssignmentForm({
    entries,
    setSelectedToggle,
    editDataOption,
    setShowModal,
    withFilter,
    appliedFilters,
  });
  return (
    <AssignmentForm
      appliedFilters={appliedFilters}
      formFields={formFields}
      filteredRows={filteredRows}
      filterValue={filterValue}
      handleClear={handleClear}
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
      handleApply={handleApply}
      onButtonClick={onButtonClick}
      handleFilterChange={handleFilterChange}
      onReset={onReset}
      onHandleSelectCheckChange={onHandleSelectCheckChange}
      showMenu={showMenu}
      smallScreen={smallScreen}
      showModal={showModal}
      withFilter={withFilter}
    />
  );
};

export { RolesForm };
