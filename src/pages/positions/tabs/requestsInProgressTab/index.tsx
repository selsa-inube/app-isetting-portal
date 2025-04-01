import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { UseRequestsInProgress } from "@hooks/positions/useRequestsInProgress";
import { IEntry } from "@ptypes/table/IEntry";
import { RequestsInProgressTabUI } from "./interface";

const RequestsInProgressTab = () => {
  const { appData } = useContext(AuthAndData);
  const {
    requestsInProgress,
    searchRequestsInProgress,
    loading,
    handleSearchRequestsInProgress,
    setEntryDeleted,
    widthFirstColumn,
    smallScreen,
  } = UseRequestsInProgress(appData.businessUnit.publicCode);

  return (
    <RequestsInProgressTabUI
      entries={requestsInProgress as IEntry[]}
      loading={loading}
      searchrequestProgress={searchRequestsInProgress}
      onSearchrequestProgress={handleSearchRequestsInProgress}
      setEntryDeleted={setEntryDeleted}
      widthFirstColumn={widthFirstColumn}
      smallScreen={smallScreen}
    />
  );
};

export { RequestsInProgressTab };
