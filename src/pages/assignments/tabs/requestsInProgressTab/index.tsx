import { useContext } from "react";
import { IEntry } from "@ptypes/design/table/IEntry";
import { AuthAndData } from "@context/authAndDataProvider";
import { usePageLength } from "@hooks/authentication/usePageLength";
import { UseRequestsInProgress } from "@hooks/assignments/useRequestsInProgress";
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
  } = UseRequestsInProgress({ bussinesUnits: appData.businessUnit.publicCode });

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
