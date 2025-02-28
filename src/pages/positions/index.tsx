import { useState } from "react";
import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { PositionsUI } from "./interface";

const Positions = () => {
  const [isSelected, setIsSelected] = useState<string>();

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  return (
    <PositionsUI
      isSelected={isSelected ?? positionsTabsConfig.cargos.id}
      handleTabChange={handleTabChange}
      catalogName="Privilegios"
    />
  );
};

export { Positions };
