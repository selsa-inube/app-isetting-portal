import { useContext } from "react";

import { AuthAndData } from "@context/authAndDataProvider";
import { useUserPage } from "@hooks/users/userPage";

import { UsersUI } from "./interface";

const Users = () => {
  const { appData } = useContext(AuthAndData);
  const {
    smallScreen,
    isSelected,
    handleTabChange,
    title,
    showStaffTab,
    showRequestsInProgressTab,
    userTabs,
    loading,
  } = useUserPage({
    businessUnits: appData.businessUnit.publicCode,
    businessManager: appData.businessManager.publicCode,
  });
  return (
    <UsersUI
      title={title}
      smallScreen={smallScreen}
      isSelected={isSelected}
      handleTabChange={handleTabChange}
      showStaffTab={showStaffTab}
      showRequestsInProgressTab={showRequestsInProgressTab}
      userTabs={userTabs}
      loading={loading}
    />
  );
};

export { Users };
