import { useState, useEffect } from "react";
import { IMisionData } from "@ptypes/missions/IMisionData";
import { getMission } from "@services/missions/getMission";

const useMissionsData = (token: string, portalPublicCode: string) => {
  const [missionsData, setMissionsData] = useState<IMisionData[]>([]);
  const [HasError, SetHasError] = useState(false);

  useEffect(() => {
    const FetchBusinessManagers = async () => {
      if (!portalPublicCode) {
        SetHasError(true);
        return;
      }
      try {
        const NewData = await getMission(token);
        setMissionsData(NewData);
      } catch (Error) {
        console.info(Error);
        SetHasError(true);
      }
    };

    FetchBusinessManagers();
  }, [portalPublicCode]);

  return { missionsData, HasError };
};

export { useMissionsData };
