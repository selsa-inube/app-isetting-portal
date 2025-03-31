import { UsePositionsTabs } from "@hooks/positions/usePositionsTabs";
import { UsersUI } from "./interface";

import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { IActions } from "@pages/positions/tabs/positionsTabs/types";
import { UseManageUsersSearchAndPageControl } from "@hooks/users/useManageSearchAndPageControl";
import { IEntrys } from "@design/templates/assignmentForm/types";
import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";

const Users = () => {
  const { appData } = useContext(AuthAndData);
  const {
    isSelected,
    handleTabChange,
    smallScreen,
    smallScreenTab,
    data,
    showMenu,
    handleToggleMenuInvitation,
    handleCloseMenuInvitation,
    widthFirstColumn,
  } = UsePositionsTabs();

  const { searchPosition, handleSearchPositions, loading, requestsInProgress } =
    UseManageUsersSearchAndPageControl(appData.businessManager.publicCode);
  return (
    <UsersUI
      handleSearchPositions={handleSearchPositions}
      searchPosition={searchPosition}
      isSelected={isSelected ?? positionsTabsConfig.cargos.id}
      handleTabChange={handleTabChange}
      catalogName="Privilegios"
      smallScreen={smallScreen}
      smallScreenTab={smallScreenTab}
      showMenu={showMenu}
      data={data as IActions}
      entries={requestsInProgress as unknown as IEntrys[]}
      loading={loading}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      widthFirstColumn={widthFirstColumn}
    />
  );
};

export { Users };
