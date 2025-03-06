import { UseAssignmentForm } from "@hooks/design/useAssignmentForm";
import { AssignmentFormUI } from "./interface";
import { IAssignmentForm } from "./types";

const AssignmentForm = (props: IAssignmentForm) => {
  const {
    handleChange,
    entries,
    title,
    readOnly,
    options,
    setSelectedToggle,
    setChangedData = () => {},
    changeData = [],
  } = props;

  const {
    filteredRows,
    filterValue,
    handleFilterInput,
    handleFilterChange,
    handleToggleAllEntries,
    onHandleSelectCheckChange,
    handleSelectChange,
    menuOptions,
    isAssignAll,
    setShowMenu,
    showMenu,
    dataValidations,
    handleSubmit,
    handleToggleRol,
    handleCloseMenuRol,
    newOptions,
  } = UseAssignmentForm(
    entries,
    changeData,
    setChangedData,
    handleChange,
    setSelectedToggle,
    options
  );
  return (
    <AssignmentFormUI
      handleToggleRol={handleToggleRol}
      handleCloseMenuRol={handleCloseMenuRol}
      handleToggleAllEntries={handleToggleAllEntries}
      filter={filterValue}
      handleFilter={handleFilterChange}
      handleFilterInput={handleFilterInput}
      entries={entries}
      title={title}
      showMenu={showMenu}
      handleToggleMenuInvitation={() => setShowMenu((prev) => !prev)}
      handleCloseMenuInvitation={() => setShowMenu(false)}
      menuOptions={menuOptions}
      isAssignAll={isAssignAll}
      readOnly={readOnly}
      filteredRows={filteredRows}
      handleSubmit={handleSubmit}
      handleSelectChange={handleSelectChange}
      options={newOptions}
      filterValue={filterValue}
      onHandleSelectCheckChange={onHandleSelectCheckChange}
      dataValidations={dataValidations}
    />
  );
};

export { AssignmentForm };
export type { IAssignmentForm };
