import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { AuthAndData } from "@context/authAndDataProvider";
import { useBusinessManagersId } from "@hooks/positions/useBusinessManageresId";
import { PrivilegeOptionsConfig } from "@config/positions/tabs";
import { mediaQueryTabletMain } from "@config/environment";

const useManageSearchAndPageControl = () => {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [entryDeleted, setEntryDeleted] = useState<string | number>("");

  const smallScreen = useMediaQuery(mediaQueryTabletMain);
  const location = useLocation();
  const label = PrivilegeOptionsConfig.find(
    (item) => item.url === location.pathname
  );

  const { appData } = useContext(AuthAndData);
  const { businessManagersData } = useBusinessManagersId({
    businessUnitCode: appData.businessManager.publicCode,
  });

  const handleSearchPositions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPosition(e.target.value);
  };

  const columnWidths = [75];

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

export { useManageSearchAndPageControl };
