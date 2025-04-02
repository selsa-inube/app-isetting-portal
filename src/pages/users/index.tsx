import { useContext } from "react";
import { UsePositionsTabs } from "@hooks/positions/usePositionsTabs";

import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { UseManageUsersSearchAndPageControl } from "@hooks/users/useManageSearchAndPageControl";
import { IEntry } from "@ptypes/table/IEntry";
import { AuthAndData } from "@context/authAndDataProvider";

import { UsersUI } from "./interface";

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
      loading={loading}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      data={data as IEntry}
      entries={requestsInProgress as unknown as IEntry[]}
      widthFirstColumn={widthFirstColumn}
    />
  );
};

export { Users };
