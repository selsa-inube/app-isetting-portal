import { useContext, useEffect, useState } from "react";
import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { useMediaQuery } from "@inubekit/inubekit";
import { useSubOptions } from "@hooks/subMenu/useSubOptions";

const UsePositionsTabs = () => {
  const [isSelected, setIsSelected] = useState<string>();
  const { changeTab, setChangeTab } = useContext(ChangeToRequestTab);
  const smallScreen = useMediaQuery("(max-width: 990px)");
  const [showMenu, setShowMenu] = useState(false);
  const smallScreenTab = useMediaQuery("(max-width: 450px)");
  const { subOptions } = useSubOptions("Privilegios");
  const data = subOptions.find((item) => item.url === location.pathname);
  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  const handleToggleMenuInvitation = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleCloseMenuInvitation = () => {
    setShowMenu(false);
  };
  useEffect(() => {
    if (changeTab) {
      setIsSelected(positionsTabsConfig.requestsInProgress.id);
    }
  }, [changeTab]);

  useEffect(() => {
    if (isSelected === positionsTabsConfig.requestsInProgress.id) {
      setChangeTab(false);
      setIsSelected(positionsTabsConfig.requestsInProgress.id);
    }
  }, [isSelected]);

  return {
    isSelected,
    handleTabChange,
    smallScreen,
    smallScreenTab,
    data,
    showMenu,
    handleToggleMenuInvitation,
    handleCloseMenuInvitation,
  };
};

export { UsePositionsTabs };
