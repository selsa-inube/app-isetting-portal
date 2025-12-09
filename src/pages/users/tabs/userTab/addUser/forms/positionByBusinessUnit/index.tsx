import { IPositionsByBusinessUnitForm } from "@ptypes/users/tabs/userTab/addUser/forms/ByBusinessUnit/IPositionByBusinessUnitForm";
import { PositionByBusinessUnitUI } from "./interface";

const PositionByBusinessUnit = (props: IPositionsByBusinessUnitForm) => {
  const { businessUnits, setSelectedChange, onNextPage, onReset } = props;

  const buttonDisabledState = Object.values(businessUnits).some(
    (unit) => !unit.value || unit.value.trim() === ""
  );

  return (
    <PositionByBusinessUnitUI
      businessUnits={businessUnits}
      setSelectedChange={setSelectedChange}
      onNextPage={onNextPage}
      onReset={onReset}
      buttonDisabledState={buttonDisabledState}
    ></PositionByBusinessUnitUI>
  );
};

PositionByBusinessUnit.displayName = "PositionByBusinessUnit";
export { PositionByBusinessUnit };
