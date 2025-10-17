import { columnWidthsUsers } from "@config/users/tableUsers/columnWidths";
import { RequestInProgressUI } from "./interface";
import { titlesUsers } from "@config/users/tableUsers/titles";
import { useUserManageSearchUsers } from "@hooks/users/tabs/requestInProgressUsers/useUserManageSearch";
import { ERequestUsers } from "@enum/requestUsers";
import { AuthAndData } from "@context/authAndDataProvider";
import { useContext } from "react";
import { IEntry } from "@ptypes/design/table/IEntry";

const RequestInProgress = () => {
  const { appData } = useContext(AuthAndData);
  const {
    requestsInProgress,
    searchRequestsInProgress,
    loading,
    handleSearchRequestsInProgress,
    actions,
  } = useUserManageSearchUsers({
    entityName: ERequestUsers.STAFF,
    businessManager: appData.businessManager.publicCode,
  });

  return (
    <RequestInProgressUI
      searchService={searchRequestsInProgress}
      handleSearchService={handleSearchRequestsInProgress}
      titles={titlesUsers}
      entries={requestsInProgress as IEntry[]}
      loading={loading}
      actions={actions}
      columnWidths={columnWidthsUsers}
    />
  );
};

export { RequestInProgress };
