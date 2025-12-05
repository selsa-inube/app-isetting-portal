import { IRolesByBusinessUnitForm } from "@ptypes/users/tabs/userTab/addUser/forms/rolesByBusinessUnit/IRolesByBusinessUnitForm";
import { RolesByBusinessUnitUI } from "./interface";

const RolesByBusinessUnit = (props: IRolesByBusinessUnitForm) => {
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
