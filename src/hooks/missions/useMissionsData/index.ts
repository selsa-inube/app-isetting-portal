import { useState, useEffect } from "react";
import { IMisionData } from "@ptypes/missions/IMisionData";
import { getMission } from "@services/missions/getMission";

const useMissionsData = (portalPublicCode?: string) => {
  const [missionsData, setMissionsData] = useState<
    IMisionData[]
  >([]);
  const [HasError, SetHasError] = useState(false);

  useEffect(() => {
    const FetchBusinessManagers = async () => {
      if (!portalPublicCode) {
        SetHasError(true);
        return;
      }
      try {
        const NewData = await getMission();
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
