import { rolesByBusinessUnitColumnsTitles } from "@config/users/addUsers/form/rolesByBusinessUnit/tableTitles";
import { AssignmentForm } from "@design/forms/assignmentForm";
import { useAssignmentForm } from "@hooks/design/useAssignmentForm";
import { IRolesByBusinessUnitProps } from "@ptypes/users/tabs/userTab/addUser/forms/IRolesByBusinessUnit";

const RolesByBusinessUnit = (props: IRolesByBusinessUnitProps) => {
  const {
    entries,
    setSelectedToggle,
    onButtonClick,
    onReset,
    editDataOption = false,
    withFilter = false,
  } = props;

  const {
    filteredRows,
    filterValue,
    isAssignAll,
    labelButtonNext,
    labelButtonPrevious,
    loading,
    menuOptions,
    showMenu,
    smallScreen,
    handleFilterInput,
    handleToggleAllEntries,
    handleToggleRol,
    onHandleSelectCheckChange,
  } = useAssignmentForm({
    entries,
    setSelectedToggle,
    editDataOption,
    withFilter: false,
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
      columnsTitles={rolesByBusinessUnitColumnsTitles}
    />
  );
};

RolesByBusinessUnit.displayName = "RolesByBusinessUnit";

export { RolesByBusinessUnit };
