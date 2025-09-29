import { useState, useEffect } from "react";

import { IUseUserManageSearch } from "@ptypes/hooks/IUseUserManageSearch";
import { getRequestsInProgress } from "@services/requestInProgress/getRequestsInProgress";
import { IRequestsInProgress } from "@ptypes/requestsInProgress/IRequestsInProgress";
import { requestInProgressActionsConfig } from "@config/users/requestInProgress/actions";

const useUserManageSearchUsers = (props: IUseUserManageSearch) => {
  const { entityName, businessUnits, businessManager } = props;
  const [entryDeleted, setEntryDeleted] = useState<string | number>("");
  const actions = requestInProgressActionsConfig(setEntryDeleted);
  const [loading, setLoading] = useState(true);
  const [requestsInProgress, setRequestsInProgress] = useState<
    IRequestsInProgress[]
  >([]);
  const [searchRequestsInProgress, setSearchRequestsInProgress] =
    useState<string>("");

  useEffect(() => {
    const fetchRequestsInProgressData = async () => {
      setLoading(true);
      try {
        if (businessManager.length > 0) {
          const data = await getRequestsInProgress(
            entityName,
            businessManager,
            businessUnits
          );
          setRequestsInProgress(data);
        }
      } catch (error) {
        console.info(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequestsInProgressData();
  }, [businessManager, businessUnits]);

  useEffect(() => {
    if (entryDeleted) {
      setRequestsInProgress((prev) =>
        prev.filter((entry) => entry.id !== entryDeleted)
      );
    }
  }, [entryDeleted]);

  const handleSearchRequestsInProgress = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchRequestsInProgress(e.target.value);
  };
  return {
    requestsInProgress,
    searchRequestsInProgress,
    loading,
    handleSearchRequestsInProgress,
    actions,
  };
};

export { useUserManageSearchUsers };
