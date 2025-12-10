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

  const { appliedFilters, setShowModal } = useFilterRoles({
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
      onHandleSelectCheckChange={onHandleSelectCheckChange}
      onReset={onReset}
      showMenu={showMenu}
      smallScreen={smallScreen}
      withFilter={withFilter}
    />
  );
};

export { RolesForm };
