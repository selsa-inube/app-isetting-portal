import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { MissionsTabUI } from "./interface";
import { useMissionsTab } from "@hooks/missions/useMissionsTab";
import { useMissionsData } from "@hooks/missions/useMissionsData";

const MissionsTab = () => {
  const loading = false;
  const { appData } = useContext(AuthAndData);
  const { missionsData } = useMissionsData(
    appData.businessManager.publicCode
  );

  const {
    smallScreen,
    label,
    searchPosition,
    columnWidths, 
    handleSearchPositions,
  } = useMissionsTab();

  return (
    <MissionsTabUI
      handleSearchMissions={handleSearchPositions}
      searchMission={searchPosition}
      loading={loading}
      data={missionsData}
      smallScreen={smallScreen}
      label={label}
      setEntryDeleted={() => {}}
      columnWidths={columnWidths}
    />
  );
};

export { MissionsTab };
