import { useContext } from "react";
import { UsePositionsTabs } from "@hooks/positions/usePositionsTabs";

import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { UseManageUsersSearchAndPageControl } from "@hooks/users/useManageSearchAndPageControl";
import { IEntry } from "@ptypes/design/table/IEntry";
import { AuthAndData } from "@context/authAndDataProvider";

import { UsersUI } from "./interface";

const Users = () => {
  const { appData } = useContext(AuthAndData);
  const {
    isSelected,
    handleTabChange,
    smallScreen,
    showMenu,
    handleToggleMenuInvitation,
    handleCloseMenuInvitation,
    columnWidths,
  } = UsePositionsTabs();

  const { searchPosition, handleSearchPositions, loading, requestsInProgress } =
    UseManageUsersSearchAndPageControl(appData.businessManager.publicCode);
  return (
    <UsersUI
      handleSearchPositions={handleSearchPositions}
      searchPosition={searchPosition}
      isSelected={isSelected ?? positionsTabsConfig(smallScreen).cargos.id}
      handleTabChange={handleTabChange}
      catalogName="Privilegios"
      smallScreen={smallScreen}
      smallScreenTab={false}
      showMenu={showMenu}
      loading={loading}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      entries={requestsInProgress as IEntry[]}
      columnWidths={columnWidths}
    />
  );
};

export { Users };
