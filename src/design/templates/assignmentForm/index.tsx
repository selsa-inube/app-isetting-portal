import { UseAssignmentForm } from "@hooks/design/useAssignmentForm";
import { IAssignmentForm } from "@ptypes/assignmentForm/IAssignmentForm";
import { AssignmentFormUI } from "./interface";

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
    selectedOptions,
    handleFilterInput,
    handleFilterChange,
    handleToggleAllEntries,
    onHandleSelectCheckChange,
    handleSelectChange,
    handleClearFilters,
    handleToggleModal,
    setSelectedOptions,
    menuOptions,
    isAssignAll,
    showModal,
    setShowMenu,
    showMenu,
    dataValidations,
    newOptions,
    handleApplyFilters,
    handleSubmit,
    handleToggleRol,
    handleCloseMenuRol,
    smallScreen,
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
      smallScreen={smallScreen}
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
      showModal={showModal}
      selectedOptions={selectedOptions}
      setSelectedOptions={setSelectedOptions}
      handleClick={handleApplyFilters}
      handleToggleModal={handleToggleModal}
      handleClearFilters={handleClearFilters}
      onSelectChange={handleSelectChange}
    />
  );
};

export { AssignmentForm };
export type { IAssignmentForm };
