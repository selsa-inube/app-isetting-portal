import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { usePageLength } from "@hooks/authentication/usePageLength";
import { useRequestsInProgress } from "@hooks/missions/useRequestsInProgress";
import { IEntry } from "@ptypes/design/table/IEntry";
import { RequestsInProgressTabUI } from "./interface";

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
  } = useRequestsInProgress({
    businessUnits: appData.businessUnit.publicCode,
    businessManager: appData.businessManager.publicCode,
    token: appData.token,
  });

  const pageLength = usePageLength();

  return (
    <RequestsInProgressTabUI
      entries={requestsInProgress as IEntry[]}
      loading={loading}
      searchRequestProgress={searchRequestsInProgress}
      onSearchRequestProgress={handleSearchRequestsInProgress}
      setEntryCanceled={setEntryCanceled}
      smallScreen={smallScreen}
      columnWidths={columnWidths}
      pageLength={pageLength}
    />
  );
};

export { RequestsInProgressTab };
