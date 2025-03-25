import { UsePositionsTabs } from "@hooks/positions/usePositionsTabs";
import { PositionsUI } from "./interface";
import { IActions } from "./tabs/positionsTabs/types";

const Positions = () => {
  const { isSelected, handleTabChange, smallScreen, smallScreenTab, data } =
    UsePositionsTabs();

  return (
    <PositionsUI
      isSelected={isSelected}
      handleTabChange={handleTabChange}
      catalogName="Privilegios"
      smallScreen={smallScreen}
      smallScreenTab={smallScreenTab}
      data={data as IActions}
    />
  );
};

export { Positions };
