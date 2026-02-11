import { useAssignmentForm } from "@hooks/design/useAssignmentForm";
import { useFilterRoles } from "@hooks/positions/useFilterRoles";
import { AssignmentForm } from "@design/forms/assignmentForm";
import { IEntry } from "@ptypes/design/table/IEntry";
import { IRolesForm } from "@ptypes/positions/IRolesForm";

const RolesForm = (props: IRolesForm) => {
  const {
    entries,
    options,
    setSelectedToggle,
    onButtonClick,
    onReset,
    editDataOption = false,
  } = props;
  const { appliedFilters, optionsMapped, handleFilterChange, filters } =
    useFilterRoles({
      options: options as IEntry[],
    });
  const {
    filteredRows,
    filterValue,
    isAssignAll,
    labelButtonNext,
    labelButtonPrevious,
    loading,
    menuOptions,
    smallScreen,
    showMenu,
    withFilter,
    handleFilterInput,
    handleToggleAllEntries,
    handleToggleRol,
    onHandleSelectCheckChange,
  } = useAssignmentForm({
    entries,
    setSelectedToggle,
    filters,
    editDataOption,
  });
  return (
    <AssignmentForm
      appliedFilters={appliedFilters}
      formFields={optionsMapped}
      filteredRows={filteredRows}
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
      handleFilterChange={handleFilterChange}
      onReset={onReset}
      onHandleSelectCheckChange={onHandleSelectCheckChange}
      smallScreen={smallScreen}
      withFilter={withFilter}
      showMenu={showMenu}
      filterTitle="applicationStaff"
      filterPlaceholder="Selecciona de la lista"
    />
  );
};

export { RolesForm };
