import { useState, useEffect } from "react";
import { IRequestsInProgress } from "@ptypes/positions/requestsInProgress/IRequestsInProgress";
import { getRequestsInProgress } from "@services/positions/getRequestsInProgress";
import { useMediaQuery } from "@inubekit/inubekit";

const UseRequestsInProgress = (bussinesUnits: string) => {
  const [requestsInProgress, setRequestsInProgress] = useState<
    IRequestsInProgress[]
  >([]);
  const [hasError, setHasError] = useState(false);
  const [searchRequestsInProgress, setSearchRequestsInProgress] =
    useState<string>("");
  const [loading, setLoading] = useState(true);
  const [entryDeleted, setEntryDeleted] = useState<string | number>("");
  const smallScreen = useMediaQuery("(max-width: 690px)");
  const widthFirstColumn = smallScreen ? 70 : 12;
  useEffect(() => {
    const fetchRequestsInProgressData = async () => {
      setLoading(true);
      try {
        const data = await getRequestsInProgress(bussinesUnits);
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

  const columnWidths=[widthFirstColumn, 55, 23]

  return {
    requestsInProgress,
    hasError,
    searchRequestsInProgress,
    loading,
    handleSearchRequestsInProgress,
    setEntryDeleted,
    smallScreen,
    columnWidths,
  };
};

export { UseRequestsInProgress };
