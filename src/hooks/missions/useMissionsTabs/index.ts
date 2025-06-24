import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";

import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { AuthAndData } from "@context/authAndDataProvider";
import { missionsTabsConfig } from "@config/missions/tabs";

const UseMissionsTabs = () => {
  const [isSelected, setIsSelected] = useState<string>(
    missionsTabsConfig.roles.id
  );
  const { changeTab, setChangeTab } = useContext(ChangeToRequestTab);
  const smallScreen = useMediaQuery("(max-width: 990px)");
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const smallScreenTab = useMediaQuery("(max-width: 450px)");
  const widthFirstColumn = smallScreen ? 60 : 20;

  const { setBusinessUnitSigla } = useContext(AuthAndData);

  useEffect(() => {
    setBusinessUnitSigla("");
  }, []);

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  const handleToggleMenuInvitation = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleCloseMenuInvitation = () => {
    setShowMenu(false);
  };

  const onToggleModal = () => {
    setShowModal(!showModal);
  };

  const onToggleInfoModal = () => {
    setShowInfoModal(!showInfoModal);
  };
  const onCloseMenu = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (changeTab) {
      setIsSelected(missionsTabsConfig.requestsInProgress.id);
    }
  }, [changeTab]);

  useEffect(() => {
    if (isSelected === missionsTabsConfig.requestsInProgress.id) {
      setChangeTab(false);
      setIsSelected(missionsTabsConfig.requestsInProgress.id);
    }
  }, [isSelected]);

  const showMissionTab = isSelected === missionsTabsConfig.roles.id;

  const missionsTabs = Object.values(missionsTabsConfig);

  return {
    isSelected,
    handleTabChange,
    smallScreen,
    smallScreenTab,
    showMenu,
    showModal,
    showInfoModal,
    onToggleInfoModal,
    onCloseMenu,
    onToggleModal,
    handleToggleMenuInvitation,
    handleCloseMenuInvitation,
    widthFirstColumn,
    showMissionTab,
    missionsTabs,
  };
};

export { UseMissionsTabs };
