import { useState, useEffect } from "react";
import { IEnumerators } from "@ptypes/users/enumerators";
import { getEnumerators } from "@services/users/getEnumerators";

const UseEnumerators = (enumeratorName: string, country: string) => {
  const [enumData, setEnumData] = useState<IEnumerators[]>(
    [] as IEnumerators[]
  );
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchEnumData = async () => {
      try {
        const data = await getEnumerators(enumeratorName, country);

        setEnumData(data);
      } catch (error) {
        console.info(error);
        setHasError(true);
      }
    };

    fetchEnumData();
  }, []);

  return { enumData, hasError };
};

export { UseEnumerators };
