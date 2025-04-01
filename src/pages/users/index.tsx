import { useContext } from "react";
import { UsePositionsTabs } from "@hooks/positions/usePositionsTabs";

import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { UseManageUsersSearchAndPageControl } from "@hooks/users/useManageSearchAndPageControl";

import { AuthAndData } from "@context/authAndDataProvider";

import { UsersUI } from "./interface";
import { IEntry } from "@ptypes/table/IEntry";
const Users = () => {
  const { appData } = useContext(AuthAndData);
  const {
    isSelected,
    handleTabChange,
    smallScreen,
    smallScreenTab,
    data,
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
      data={data as IEntry}
      entries={requestsInProgress as unknown as IEntry[]}
      loading={loading}
      widthFirstColumn={widthFirstColumn}
    />
  );
};

export { Users };
