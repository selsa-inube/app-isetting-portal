import { UsePositionsTabs } from "@hooks/positions/usePositionsTabs";
import { PositionsUI } from "./interface";

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
      data={data}
    />
  );
};

export { Positions };
