import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";

import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { AuthAndData } from "@context/authAndDataProvider";
import { missionsTabsConfig } from "@config/missions/tabs";
import { IMissionTabsConfig } from "@ptypes/missions/IMissionTabsConfig";
import { getRequestsInProgress } from "@services/requestInProgress/getRequestsInProgress";
import { IRequestsInProgress } from "@ptypes/requestsInProgress/IRequestsInProgress";
import { ERequestMission } from "@enum/requestMission";
import { enviroment } from "@config/environment";

const UseMissionsTabs = () => {

  const smallScreen = useMediaQuery(enviroment.IS_MOBILE_970);
  const tabs= missionsTabsConfig(smallScreen);
  const [isSelected, setIsSelected] = useState<string>(
    tabs.roles.id
  );
  const { changeTab, setChangeTab } = useContext(ChangeToRequestTab);
  
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [requestsInProgress, setRequestsInProgress] = useState<
    IRequestsInProgress[]
  >([]);
  const [showInfoModal, setShowInfoModal] = useState(false);
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
          ERequestMission.MISSIONS,
          ERequestMission.TEST,
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
      setIsSelected(tabs.requestsInProgress.id);
    }
  }, [changeTab]);

  useEffect(() => {
    if (isSelected === tabs.requestsInProgress.id) {
      setChangeTab(false);
      setIsSelected(tabs.requestsInProgress.id);
    }
  }, [isSelected]);

  const filteredTabsConfig = Object.keys(tabs).reduce(
    (filteredtabs, key) => {
      const tab = tabs[key as keyof typeof missionsTabsConfig];

      if (
        key === tabs.requestsInProgress.id &&
        requestsInProgress &&
        requestsInProgress.length === 0
      ) {
        return filteredtabs;
      }

      if (tab !== undefined) {
        filteredtabs[key as keyof IMissionTabsConfig] = tab;
      }
      return filteredtabs;
    },
    {} as IMissionTabsConfig
  );

  const showMissionTab = isSelected === tabs.roles.id;

  const showRequestTab =
    isSelected === tabs.requestsInProgress.id;

  const missionsTabs = Object.values(filteredTabsConfig);

  return {
    isSelected,
    handleTabChange,
    smallScreen,
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
