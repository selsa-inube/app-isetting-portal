import { UseMissionsTabs } from "@hooks/missions/useMissionsTabs";
import { menuMissionsLinks } from "@config/missions/missionTab/menuMissionsLinks";
import { missionsTabsConfig } from "@config/missions/tabs";
import { MissionsUI } from "./interface";

const Missions =() => {

    const {
      isSelected,
      handleTabChange,
      smallScreen,
      smallScreenTab,
      showModal,
      showInfoModal,
      showMissionTab,
      showRequestTab,
      missionsTabs, 
      onToggleInfoModal,
      onCloseMenu,
      onToggleModal,
    } = UseMissionsTabs();

    return (
      <MissionsUI
        isSelected={isSelected ?? missionsTabsConfig.roles.id}
        handleTabChange={handleTabChange}
        catalogName="Privilegios"
        smallScreen={smallScreen}
        smallScreenTab={smallScreenTab}
        showModal={showModal}
        showInfoModal={showInfoModal}
        options={menuMissionsLinks}
        onToggleInfoModal={onToggleInfoModal}
        onCloseMenu={onCloseMenu}
        onToggleModal={onToggleModal}
        showMissionTab={showMissionTab}
        showRequestTab={ showRequestTab}
        missionsTabs={missionsTabs}
      />
    );
  }


export { Missions };
