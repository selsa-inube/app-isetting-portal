import { UsePositionsTabs } from "@hooks/positions/usePositionsTabs";
import { positionsTabsConfig } from "@config/positionsTabs/tabs";
import { IEntry } from "@ptypes/table/IEntry";
import { PositionsUI } from "./interface";

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
      data={data as IEntry}
    />
  );
};

export { Positions };
