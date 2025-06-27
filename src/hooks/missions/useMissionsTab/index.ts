import { useState, useContext } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { useLocation } from "react-router-dom";
import { AuthAndData } from "@context/authAndDataProvider";
import { UseBusinessManagersId } from "@hooks/positions/useBusinessManageresId";
import { PrivilegeOptionsConfig } from "@config/positions/tabs";
import { enviroment } from "@config/environment";

const useMissionsTab = (
 
) => {
    const [searchPosition, setSearchPosition] = useState<string>("");
  const [entryDeleted, setEntryDeleted] = useState<string | number>("");

  const smallScreen = useMediaQuery(enviroment.MEDIA_QUERY_MOBILE);
  const location = useLocation();
  const label = PrivilegeOptionsConfig.find(
    (item) => item.url === location.pathname
  );

  const { appData } = useContext(AuthAndData);
  const { businessManagersData } = UseBusinessManagersId(
    appData.businessManager.publicCode
  );

  const handleSearchPositions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPosition(e.target.value);
  };

   const columnWidths=[85]

  return {
    searchPosition,
    smallScreen,
    label,
    businessManagersData,
    entryDeleted,
    columnWidths,
    setEntryDeleted,
    handleSearchPositions,
  };
};

export { useMissionsTab };
