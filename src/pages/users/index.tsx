import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { usePositionsTabs } from "@hooks/positions/usePositionsTabs";
import { useManageUsersSearchAndPageControl } from "@hooks/users/useManageSearchAndPageControl";
import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { IEntry } from "@ptypes/design/table/IEntry";
import { UsersUI } from "./interface";
import { useTitleAndPrivileges } from "@hooks/users/useTitleAndDescription";
import { columnWidthsUsers } from "@config/users/tableUsers/columnWidths";

const Users = () => {
  const { appData } = useContext(AuthAndData);
  const {
    isSelected,
    handleTabChange,
    smallScreen,
    showMenu,
    handleToggleMenuInvitation,
    handleCloseMenuInvitation,
  } = usePositionsTabs();

  const { searchPosition, handleSearchPositions, loading, requestsInProgress } =
    useManageUsersSearchAndPageControl({
      businessManager: appData.businessManager.publicCode,
    });
  const { title } = useTitleAndPrivileges();
  return (
    <UsersUI
      title={title}
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
      columnWidths={columnWidthsUsers}
    />
  );
};

export { Users };
