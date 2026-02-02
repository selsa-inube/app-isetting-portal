import { AssignmentForm } from "@design/forms/assignmentForm";
import { useAssignmentForm } from "@hooks/design/useAssignmentForm";

import { IBusinessEntityForm } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IBusinessEntityForm";

const BusinessEntityForm = (props: IBusinessEntityForm) => {
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

BusinessEntityForm.displayName = "BusinessEntityForm";
export { BusinessEntityForm };
