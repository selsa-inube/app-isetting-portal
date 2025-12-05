import { generalInformationConfig } from "@config/users/addUsers/form/generalStep";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { Button, Stack } from "@inubekit/inubekit";

import { RolesCardByBusinessUnit } from "./rolesCardByBusinessUnit";
import { BorderStack } from "@design/layout/borderStack";
import { IRolesByBusinessUnitFormUI } from "@ptypes/users/tabs/userTab/addUser/forms/rolesByBusinessUnit/IRolesByBusinessUnitForm/UI";

const RolesByBusinessUnitUI = (props: IRolesByBusinessUnitFormUI) => {
  const {
    businessUnits,
    setSelectedChange,
    onNextPage,
    onReset,
    buttonDisabledState,
  } = props;

  return (
    <BorderStack
      border={EComponentAppearance.DARK}
      borderRadius={basic.spacing.s100}
      gap={basic.spacing.s250}
      direction="column"
      padding={basic.spacing.s300}
    >
      <Stack gap={basic.spacing.s20}>
        {Object.entries(businessUnits).map(([unitKey, businessUnit]) => (
          <RolesCardByBusinessUnit
            id={unitKey}
            businessUnit={unitKey}
            onSelectChange={setSelectedChange}
            options={businessUnit.options}
            value={businessUnit.value}
          />
        ))}
      </Stack>
      <Stack justifyContent="flex-end" gap={basic.spacing.s250}>
        <Button
          onClick={onReset}
          variant="outlined"
          appearance={EComponentAppearance.GRAY}
        >
          {generalInformationConfig.backStep}
        </Button>
        <Button
          onClick={onNextPage}
          disabled={buttonDisabledState}
          appearance={EComponentAppearance.PRIMARY}
        >
          {generalInformationConfig.buttonLabel}
        </Button>
      </Stack>
    </BorderStack>
  );
};
export { RolesByBusinessUnitUI };
