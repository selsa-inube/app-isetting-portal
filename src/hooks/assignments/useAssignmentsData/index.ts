import { useEffect, useState } from "react";
import { IOption } from "@inubekit/inubekit";
import { IAssignmentsData } from "@ptypes/assignments/IAssignmentsData";
import { IEnumerators } from "@ptypes/IEnumerators";
import { getAssignmentsData } from "@services/assignments/getAssignments";
import { optionsFromEnumerators } from "@utils/optionsFromEnumerators";

const useAssignmentsData = () => {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState<IAssignmentsData[]>([]);
  const [absentOfficialOptions, setAbsentOfficialOptions] = useState<IOption[]>(
    []
  );

  useEffect(() => {
    const fetchAssignmentsData = async () => {
      setLoading(true);
      try {
        const data = await getAssignmentsData();
        setData(data);
        const options = optionsFromEnumerators(data as IEnumerators[]);
        setAbsentOfficialOptions(options);
      } catch (error) {
        console.info(error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignmentsData();
  }, []);

  return {
    loading,
    hasError,
    data,
    absentOfficialOptions,
  };
};

export { useAssignmentsData };
