import { IEntry } from "@ptypes/design/table/IEntry";
import { usePageLength } from "@hooks/authentication/usePageLength";
import { useAssignmentsTab } from "@hooks/assignments/useAssignmentsTab";
import { IAssignmentsTab } from "@ptypes/assignments/IAssignmentsTab";
import { AssignmentsTabUI } from "./interface";

const AssignmentsTab = (props: IAssignmentsTab) => {
  const {showAbsenceModal} =props;
  const {
    assingments,
    searchAssingments,
    loading,
    smallScreen,
    columnWidths,
    emptyDataMessage,
    showModal,
    absentOfficialOptions,
    formik,
    disabledButtonModal,
    handleSelectChange,
    handleSelectCheckChange,
    handleClickModal,
    handleToggleModal,
    setEntryDeleted,
    handleSearchAssingments,
  } = useAssignmentsTab({showAbsenceModal});

  const pageLength = usePageLength();

  return (
    <AssignmentsTabUI
      onSearchAssingments={handleSearchAssingments}
      searchAssingments={searchAssingments}
      loading={loading}
      entries={assingments as IEntry[]}
      setEntryDeleted={setEntryDeleted}
      smallScreen={smallScreen}
      columnWidths={columnWidths}
      pageLength={pageLength}
      emptyDataMessage={emptyDataMessage}
      showModal={showModal}
      onClickModal={handleClickModal}
      onToggleModal={handleToggleModal}
      isActiveChecked={formik.values.isActive}
      absentOfficialOptions={absentOfficialOptions}
      formik={formik}
      onSelectChange={handleSelectChange}
      onSelectCheckChange={handleSelectCheckChange}
      disabledButtonModal={disabledButtonModal}
    />
  );
};

export { AssignmentsTab };
