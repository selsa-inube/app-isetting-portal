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
    showModal,
    showInfoModal,
    onToggleInfoModal,
    onCloseMenu,
    onToggleModal,
    options,
  } = useUserPage({
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
      showModal={showModal}
      showInfoModal={showInfoModal}
      options={options}
      onToggleInfoModal={onToggleInfoModal}
      onCloseMenu={onCloseMenu}
      onToggleModal={onToggleModal}
    />
  );
};

export { Users };
