import { useMissionsTabs } from "@hooks/missions/useMissionsTabs";

import { missionsTabsConfig } from "@config/missions/tabs";
import { MissionsUI } from "./interface";

const Missions = () => {

  const {
    isSelected,
    handleTabChange,
    smallScreen,
    showModal,
    showInfoModal,
    showMissionTab,
    showRequestTab,
    missionsTabs,
    onToggleInfoModal,
    onCloseMenu,
    onToggleModal,
    options,
  } = useMissionsTabs();

  return (
    <MissionsUI
      isSelected={isSelected ?? missionsTabsConfig(smallScreen).roles.id}
      handleTabChange={handleTabChange}
      catalogName="Privilegios"
      smallScreen={smallScreen}
      showModal={showModal}
      showInfoModal={showInfoModal}
      options={options}
      onToggleInfoModal={onToggleInfoModal}
      onCloseMenu={onCloseMenu}
      onToggleModal={onToggleModal}
      showMissionTab={showMissionTab}
      showRequestTab={showRequestTab}
      missionsTabs={missionsTabs}
    />
  );
}


export { Missions };
