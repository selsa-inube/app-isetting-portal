import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { UseRequestsInProgress } from "@hooks/positions/useRequestsInProgress";
import { IEntry } from "@ptypes/design/table/IEntry";
import { RequestsInProgressTabUI } from "./interface";

const RequestsInProgressTab = () => {
  const { appData } = useContext(AuthAndData);
  const {
    requestsInProgress,
    searchRequestsInProgress,
    loading,
    handleSearchRequestsInProgress,
    setEntryDeleted,
    columnWidths,
    smallScreen,
  } = UseRequestsInProgress(appData.businessUnit.publicCode);

  return (
    <RequestsInProgressTabUI
      entries={requestsInProgress as IEntry[]}
      loading={loading}
      searchrequestProgress={searchRequestsInProgress}
      onSearchrequestProgress={handleSearchRequestsInProgress}
      setEntryDeleted={setEntryDeleted}
      columnWidths={columnWidths}
      smallScreen={smallScreen}
    />
  );
};

export { RequestsInProgressTab };
