import { useContext, useEffect, useState } from "react";
import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { PositionsUI } from "./interface";

const Positions = () => {
  const [isSelected, setIsSelected] = useState<string>();

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };
  const { changeTab, setChangeTab } = useContext(ChangeToRequestTab);
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
  return (
    <PositionsUI
      isSelected={isSelected ?? positionsTabsConfig.cargos.id}
      handleTabChange={handleTabChange}
      catalogName="Privilegios"
    />
  );
};

export { Positions };
