import { useState, useEffect } from "react";

import { IUserEnumerators } from "@ptypes/users/tabs/userTab/addUser/enumerators";
import { IUseUserEnumerators } from "@ptypes/users/tabs/userTab/addUser/enumerators/enumeratorsFilter";
import { getEnumerators } from "@services/users/getEnums";

const useEnumerators = (props: IUseUserEnumerators) => {
  const { enumKey, token } = props;
  const [enumerators, setEnumerators] = useState<IUserEnumerators[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllUseCases = async () => {
      setLoading(true);
      try {
        const newData = await getEnumerators(enumKey, token);
        setEnumerators(newData);
      } catch (error) {
        console.info(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllUseCases();
  }, []);

  return { enumerators, loading };
};

export { useEnumerators };
