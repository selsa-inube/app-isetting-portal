import {
  Stack,
  Input,
  Button,
  Select,
  Grid,
  Textarea,
} from "@inubekit/inubekit";

import { StyledContainer } from "./styles";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";

import { BorderStack } from "@design/layout/borderStack";
import { IMissionForStaffFormUI } from "@ptypes/users/tabs/userTab/addUser/forms/initializers/initializeMissionForStaff/initializeMissionForStaffUI";
import { missionForStaffConfig } from "@config/users/addUsers/form/missionForStaff";
import { generalInformationConfig } from "@config/users/addUsers/form/generalStep";

const MissionForStaffFormUI = (props: IMissionForStaffFormUI) => {
  const {
    formik,
    onNextStep,
    mobilePadding,
    buttonDisabledState,
    handleSelectChange,
    optionMission,
    missionSelected,
    showForm,
    handlePreviousStep,
  } = props;
  return (
    <StyledContainer>
      <form>
        <BorderStack
          border={EComponentAppearance.DARK}
          borderRadius={basic.spacing.s100}
          gap={basic.spacing.s300}
          padding={mobilePadding}
          direction="column"
        >
          <Select
            name={missionForStaffConfig.missionSelect.name}
            onChange={handleSelectChange}
            options={optionMission}
            value={missionSelected}
            label={missionForStaffConfig.missionSelect.label}
            placeholder={missionForStaffConfig.missionSelect.placeholder}
            id={missionForStaffConfig.missionSelect.id}
            fullwidth
            size="compact"
          ></Select>

          <Grid
            width="100%"
            templateColumns="1fr "
            autoRows=""
            gap={basic.spacing.s20}
          >
            {showForm && (
              <>
                <Input
                  name={missionForStaffConfig.missionName.name}
                  id={missionForStaffConfig.missionName.id}
                  label={missionForStaffConfig.missionName.label}
                  placeholder={missionForStaffConfig.missionName.placeholder}
                  size="compact"
                  type="text"
                  value={formik.values.missionName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  message={formik.errors.missionName}
                  fullwidth
                  required
                />
                <Textarea
                  name={missionForStaffConfig.missionDescription.name}
                  id={missionForStaffConfig.missionDescription.id}
                  label={missionForStaffConfig.missionDescription.label}
                  placeholder={
                    missionForStaffConfig.missionDescription.placeholder
                  }
                  size="compact"
                  value={formik.values.missionDescription}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  message={formik.errors.missionDescription}
                  fullwidth
                  required
                />
              </>
            )}
          </Grid>
        </BorderStack>
      </form>
      <Stack justifyContent="flex-end" gap={basic.spacing.s250}>
        <Button
          onClick={handlePreviousStep}
          variant="outlined"
          appearance={EComponentAppearance.GRAY}
        >
          {generalInformationConfig.backStep}
        </Button>
        <Button
          onClick={onNextStep}
          disabled={buttonDisabledState}
          appearance={EComponentAppearance.PRIMARY}
        >
          {generalInformationConfig.buttonLabel}
        </Button>
      </Stack>
    </StyledContainer>
  );
};

export { MissionForStaffFormUI };
