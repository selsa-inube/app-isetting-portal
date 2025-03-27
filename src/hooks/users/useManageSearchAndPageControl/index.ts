import { useEffect, useState } from "react";
import { IUsers } from "@ptypes/users/usersTable/IUsers";
import { getIportalStaffUsers } from "@services/users/getIportalStaffUsers";

const UseManageUsersSearchAndPageControl = (businessManager: string) => {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [requestsInProgress, setRequestsInProgress] = useState<IUsers[]>([]);
  useEffect(() => {
    const fetchRequestsInProgressData = async () => {
      setLoading(true);
      try {
        const data = await getIportalStaffUsers(businessManager);
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

  const handleSearchPositions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPosition(e.target.value);
  };

  return {
    requestsInProgress,
    handleSearchPositions,
    searchPosition,
    loading,
    hasError,
  };
};
export { UseManageUsersSearchAndPageControl };
