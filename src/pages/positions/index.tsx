import { UsePositionsTabs } from "@hooks/positions/usePositionsTabs";
import { PositionsUI } from "./interface";
import { IActions } from "./tabs/positionsTabs/types";
import { positionsTabsConfig } from "@config/positionsTabs/tabs";

const Positions = () => {
  const { isSelected, handleTabChange, smallScreen, smallScreenTab, data } =
    UsePositionsTabs();

  return (
    <PositionsUI
      isSelected={isSelected ?? positionsTabsConfig.cargos.id}
      handleTabChange={handleTabChange}
      catalogName="Privilegios"
      smallScreen={smallScreen}
      smallScreenTab={smallScreenTab}
      data={data as IActions}
    />
  );
};

export { Positions };
