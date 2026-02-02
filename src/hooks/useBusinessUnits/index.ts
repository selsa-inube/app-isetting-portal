import { useContext, useEffect, useState } from "react";

import { IBusinessUnit } from "@ptypes/authAndDataProvider/IBusinessUnit";
import { getBusinessUnits } from "@services/users/getBusinessUnits";
import { AuthAndData } from "@context/authAndDataProvider";

const useBusinessUnits = () => {
  const [businessUnits, setBusinessUnits] = useState<IBusinessUnit[]>([]);
  const [loading, setLoading] = useState(false);
  const { appData } = useContext(AuthAndData);
  useEffect(() => {
    const fetchBusinessUnits = async () => {
      setLoading(true);
      try {
        const data = await getBusinessUnits(
          appData.portal.businessManagerCode!,
          appData.token,
        );
        setBusinessUnits(data);
      } catch (error) {
        console.info(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessUnits();
  }, []);

  return { businessUnits, loading };
};

export { useBusinessUnits };
