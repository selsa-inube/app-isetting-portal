import { useEffect, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { assignmentsTabLabels } from "@config/assignments/generic/assignmentsTabLabels";
import { IAssignmentsData } from "@ptypes/assignments/IAssignmentsData";
import { getAssignmentsData } from "@services/assignments/getAssignments";
import { enviroment } from "@config/environment";

const useAssignmentsTab = () => {
  const [assingments, setAssingments] = useState<IAssignmentsData[]>([]);
  const [hasError, setHasError] = useState(false);
  const [searchAssingments, setSearchAssingments] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [entryDeleted, setEntryDeleted] = useState<string | number>("");

  useEffect(() => {
    const fetchAssignmentsData = async () => {
      setLoading(true);
      try {
        const data = await getAssignmentsData();
        setAssingments(data);
      } catch (error) {
        console.info(error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignmentsData();
  }, []);

  useEffect(() => {
    if (entryDeleted) {
      setAssingments((prev) =>
        prev.filter((entry) => entry.id !== entryDeleted)
      );
    }
  }, [entryDeleted]);

  const handleSearchAssingments = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchAssingments(e.target.value);
  };

  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_970);
  const columnWidths = smallScreen ? [63] : [52, 17, 17];

  const emptyDataMessage = smallScreen
    ? assignmentsTabLabels.emptyDataMessageMobile
    : assignmentsTabLabels.emptyDataMessageDesk;

  return {
    assingments,
    searchAssingments,
    loading,
    hasError,
    smallScreen,
    columnWidths,
    emptyDataMessage,
    setEntryDeleted,
    handleSearchAssingments,
  };
};

export { useAssignmentsTab };
