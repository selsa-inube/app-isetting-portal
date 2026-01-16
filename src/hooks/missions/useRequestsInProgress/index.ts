import { useMediaQuery } from "@inubekit/inubekit";
import { useState, useEffect } from "react";

import { getRequestsInProgress } from "@services/requestInProgress/getRequestsInProgress";
import { ERequestInProgress } from "@enum/requestInProgress";
import { mediaQueryTabletMain } from "@config/environment";
import { IUseRequestsInProgress } from "@ptypes/hooks/IUseRequestsInProgress";
import { IRequestsInProgress } from "@ptypes/missions/requestTab/IRequestsInProgress";

const useRequestsInProgress = (props: IUseRequestsInProgress) => {
  const { businessManager } = props;
  const [requestsInProgress, setRequestsInProgress] = useState<
    IRequestsInProgress[]
  >([]);
  const [hasError, setHasError] = useState(false);
  const [searchRequestsInProgress, setSearchRequestsInProgress] =
    useState<string>("");
  const [loading, setLoading] = useState(true);
  const [entryCanceled, setEntryCanceled] = useState<string | number>("");

  useEffect(() => {
    const fetchRequestsInProgressData = async () => {
      setLoading(true);
      try {
        if (businessManager.length > 0) {
          const data = await getRequestsInProgress(
            ERequestInProgress.MISSIONS,
            businessManager
          );
          setRequestsInProgress(data);
        }
      } catch (error) {
        console.info(error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRequestsInProgressData();
  }, [businessManager]);

  useEffect(() => {
    if (entryCanceled) {
      setRequestsInProgress((prev) =>
        prev.filter((entry) => entry.id !== entryCanceled)
      );
    }
  }, [entryCanceled]);

  const handleSearchRequestsInProgress = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchRequestsInProgress(e.target.value);
  };

  const smallScreen = useMediaQuery(mediaQueryTabletMain);
  const widthFirstColumn = smallScreen ? 70 : 15;

  const columnWidths = smallScreen
    ? [widthFirstColumn, 25, 20]
    : [widthFirstColumn, 60, 18];

  return {
    requestsInProgress,
    hasError,
    searchRequestsInProgress,
    loading,
    smallScreen,
    columnWidths,
    handleSearchRequestsInProgress,
    setEntryCanceled,
  };
};

export { useRequestsInProgress };
