import { useEffect, useState } from "react";
import { getIportalStaffUsers } from "@services/users/getIportalStaffUsers";
import { IUsers } from "@ptypes/users/usersTable/IUsers";
import { IUseManageUsersPageControl } from "@ptypes/hooks/IUseManageUsersPageControl";

const useManageUsersSearchAndPageControl = (
  props: IUseManageUsersPageControl
) => {
  const { businessManager } = props;
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
export { useManageUsersSearchAndPageControl };
