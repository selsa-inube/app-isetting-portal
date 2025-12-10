import { generalInformationConfig } from "@config/users/addUsers/form/generalStep";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { Button, Stack } from "@inubekit/inubekit";

import { PositionCardByBusinessUnit } from "./positionCardByBusinessUnit";
import { BorderStack } from "@design/layout/borderStack";

import { IPositionsByBusinessUnitFormUI } from "@ptypes/users/tabs/userTab/addUser/forms/ByBusinessUnit/IPositionByBusinessUnitForm/UI";

const PositionByBusinessUnitUI = (props: IPositionsByBusinessUnitFormUI) => {
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
          <PositionCardByBusinessUnit
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
export { PositionByBusinessUnitUI };
