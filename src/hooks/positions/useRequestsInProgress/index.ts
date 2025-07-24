import { useState, useEffect } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { getRequestsInProgress } from "@services/requestInProgress/getRequestsInProgress";
import { ERequestPosition } from "@enum/requestPosition";
import { enviroment } from "@config/environment";
import { IRequestsInProgress } from "@ptypes/positions/requestsInProgress/IRequestsInProgress";
import { IUseRequestsInProgress } from "@ptypes/hooks/IUseRequestsInProgress";

const useRequestsInProgress = (props: IUseRequestsInProgress) => {
  const { bussinesUnits } = props;
  const [requestsInProgress, setRequestsInProgress] = useState<
    IRequestsInProgress[]
  >([]);
  const [hasError, setHasError] = useState(false);
  const [searchRequestsInProgress, setSearchRequestsInProgress] =
    useState<string>("");
  const [loading, setLoading] = useState(true);
  const [entryDeleted, setEntryDeleted] = useState<string | number>("");
  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_743);
  const widthFirstColumn = smallScreen ? 70 : 12;
  useEffect(() => {
    const fetchRequestsInProgressData = async () => {
      setLoading(true);
      try {
        const data = await getRequestsInProgress(
          ERequestPosition.POSITIONS,
          bussinesUnits
        );
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

  const columnWidths = [widthFirstColumn, 55, 23];

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

export { useRequestsInProgress };
