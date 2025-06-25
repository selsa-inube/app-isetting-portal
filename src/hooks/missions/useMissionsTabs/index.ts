import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";

import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { AuthAndData } from "@context/authAndDataProvider";
import { missionsTabsConfig } from "@config/missions/tabs";
import { IMissionTabsConfig } from "@ptypes/missions/IMissionTabsConfig";
import { getRequestsInProgress } from "@services/requestInProgress/getRequestsInProgress";
import { IRequestsInProgress } from "@ptypes/requestsInProgress/IRequestsInProgress";
import { ERequestMission } from "@enum/requestMission";

const UseMissionsTabs = () => {
  const [isSelected, setIsSelected] = useState<string>(
    missionsTabsConfig.roles.id
  );
  const { changeTab, setChangeTab } = useContext(ChangeToRequestTab);
  const smallScreen = useMediaQuery("(max-width: 990px)");
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [requestsInProgress, setRequestsInProgress] = useState<
    IRequestsInProgress[]
  >([]);
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
    const fetchRequestsInProgressData = async () => {
      try {
        const data = await getRequestsInProgress(
          ERequestMission.Test,
          ERequestMission.Missions
        );
        setRequestsInProgress(data);
      } catch (error) {
        console.info(error);
      }
    };

    fetchRequestsInProgressData();
  }, []);

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

  const filteredTabsConfig = Object.keys(missionsTabsConfig).reduce(
    (acc, key) => {
      const tab = missionsTabsConfig[key as keyof typeof missionsTabsConfig];

      if (
        key === missionsTabsConfig.requestsInProgress.id &&
        requestsInProgress &&
        requestsInProgress.length === 0
      ) {
        return acc;
      }

      if (tab !== undefined) {
        acc[key as keyof IMissionTabsConfig] = tab;
      }
      return acc;
    },
    {} as IMissionTabsConfig
  );

  const showMissionTab = isSelected === missionsTabsConfig.roles.id;

  const showRequestTab =
    isSelected === missionsTabsConfig.requestsInProgress.id;

  const missionsTabs = Object.values(filteredTabsConfig);

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
    showRequestTab,
    missionsTabs,
  };
};

export { UseMissionsTabs };
