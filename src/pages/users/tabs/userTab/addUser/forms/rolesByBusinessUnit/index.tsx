import { RolesByBusinessUnitUI } from "./interface";
import { IPositionsByBusinessUnitForm } from "@ptypes/users/tabs/userTab/addUser/forms/ByBusinessUnit/IPositionByBusinessUnitForm";

const RolesByBusinessUnit = (props: IPositionsByBusinessUnitForm) => {
  const { businessUnits, setSelectedChange, onNextPage, onReset } = props;

  const buttonDisabledState = Object.values(businessUnits).some(
    (unit) => !unit.value || unit.value.trim() === ""
  );

  return (
    <RolesByBusinessUnitUI
      businessUnits={businessUnits}
      setSelectedChange={setSelectedChange}
      onNextPage={onNextPage}
      onReset={onReset}
      buttonDisabledState={buttonDisabledState}
    ></RolesByBusinessUnitUI>
  );
};

RolesByBusinessUnit.displayName = "RolesByBusinessUnit";
export { RolesByBusinessUnit };
