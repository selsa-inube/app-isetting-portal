import { useContext } from "react";
import { IEntry } from "@ptypes/design/table/IEntry";
import { RequestsInProgressTabUI } from "./interface";
import { AuthAndData } from "@context/authAndDataProvider";
import { usePageLength } from "@hooks/authentication/usePageLength";
import { useRequestsInProgress } from "@hooks/missions/useRequestsInProgress";

const RequestsInProgressTab = () => {
  const { appData } = useContext(AuthAndData);

  const {
    requestsInProgress,
    searchRequestsInProgress,
    loading,
    smallScreen,
    columnWidths,
    handleSearchRequestsInProgress,
    setEntryCanceled,
  } = useRequestsInProgress({ bussinesUnits: appData.businessUnit.publicCode });

  const pageLength = usePageLength();

  return (
    <RequestsInProgressTabUI
      entries={requestsInProgress as IEntry[]}
      loading={loading}
      searchrequestProgress={searchRequestsInProgress}
      onSearchrequestProgress={handleSearchRequestsInProgress}
      setEntryCanceled={setEntryCanceled}
      smallScreen={smallScreen}
      columnWidths={columnWidths}
      pageLength={pageLength}
    />
  );
};

export { RequestsInProgressTab };
