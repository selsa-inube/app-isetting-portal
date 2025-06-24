import { useMediaQuery } from "@inubekit/inubekit";
import { useState, useEffect } from "react";

import { getRequestsInProgress } from "@services/requestInProgress/getRequestsInProgress";
import { IUseRequestsInProgress } from "@ptypes/hooks/IUseRequestsInProgress";
import { IRequestsInProgress } from "@ptypes/missions/requestTab/IRequestsInProgress";

const useRequestsInProgress = (props: IUseRequestsInProgress) => {
  const { bussinesUnits } = props;
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
        const data = await getRequestsInProgress(bussinesUnits, "Mission");
        setRequestsInProgress(data);
      } catch (error) {
        console.info(error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRequestsInProgressData();
  }, []);

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

  const smallScreen = useMediaQuery("(max-width: 690px)");
  const widthFirstColumn = smallScreen ? 70 : 10;

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
