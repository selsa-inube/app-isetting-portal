import { IEntry } from "@ptypes/design/table/IEntry";
import { usePageLength } from "@hooks/authentication/usePageLength";
import { useAssignmentsTab } from "@hooks/assignments/useAssignmentsTab";
import { AssignmentsTabUI } from "./interface";

const AssignmentsTab = () => {

  const {
    assingments,
    searchAssingments,
    loading,
    smallScreen,
    columnWidths,
    emptyDataMessage,
    setEntryDeleted,
    handleSearchAssingments,
  } = useAssignmentsTab();

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
    />
  );
};

export { AssignmentsTab };
