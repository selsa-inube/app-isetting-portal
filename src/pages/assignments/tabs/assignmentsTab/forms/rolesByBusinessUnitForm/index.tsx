import { useRolesByUnitForm } from "@hooks/assignments/useRolesByUnitForm";
import { IRolesByBusinessUnitForm } from "@ptypes/assignments/assisted/IRolesByBusinessUnitForm";
import { RolesByBusinessUnitFormUI } from "./interface";

const RolesByBusinessUnitForm = (props: IRolesByBusinessUnitForm) => {
  const {entries, onPreviousStep, onButtonClick, loading, editDataOption, setRolesSelected } = props;

  const {
    labelButtonNext,
    isDisabledButton,
    labelButtonPrevious,
    isMobile,
    rolesByBusinessUnit,
    handleToggleAllEntries,
    handleSelectCheckChange,
  } = useRolesByUnitForm({ editDataOption, entries,  setRolesSelected});

  return (
    <RolesByBusinessUnitFormUI
      isMobile={isMobile}
      onPreviousStep={onPreviousStep}
      labelButtonPrevious={labelButtonPrevious}
      onButtonClick={onButtonClick}
      isDisabledButton={isDisabledButton}
      loading={loading}
      labelButtonNext={labelButtonNext}
      rolesByBusinessUnit={rolesByBusinessUnit}
      onSelectCheckChange={handleSelectCheckChange}
      onToggleAllEntries={handleToggleAllEntries}
    />
  );
};

export { RolesByBusinessUnitForm };
