import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { MissionsTabUI } from "./interface";
import { useMissionsTab } from "@hooks/missions/useMissionsTab";
import { useMissionsData } from "@hooks/missions/useMissionsData";

const MissionsTab = () => {
  const loading = false;
  const { appData } = useContext(AuthAndData);
  const { missionsData } = useMissionsData(
    appData.token,
    appData.businessManager.publicCode,
  );

  const {
    smallScreen,
    label,
    searchMission,
    columnWidths,
    disabledButton,
    showInfoModal,
    filteredData,
    handleToggleInfoModal,
    handleSearchMissions,
    setEntryDeleted,
  } = useMissionsTab(missionsData);

  return (
    <MissionsTabUI
      handleSearchMissions={handleSearchMissions}
      searchMission={searchMission}
      loading={loading}
      data={filteredData}
      smallScreen={smallScreen}
      label={label}
      setEntryDeleted={setEntryDeleted}
      columnWidths={columnWidths}
      disabledButton={disabledButton}
      showInfoModal={showInfoModal}
      handleToggleInfoModal={handleToggleInfoModal}
    />
  );
};

export { MissionsTab };
