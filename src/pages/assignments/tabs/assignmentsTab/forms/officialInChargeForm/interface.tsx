import { Button, Select, Stack, Text } from "@inubekit/inubekit";
import { EComponentAppearance } from "@enum/appearances";
import { isInvalid } from "@utils/isInvalid";
import { basic } from "@design/tokens";
import { BorderStack } from "@design/layout/borderStack";
import { addAssignmentsLabels } from "@config/assignments/assisted/addAssignmentsLabels";
import { IOfficialInChargeFormUI } from "@ptypes/assignments/assisted/IOfficialInChargeFormUI";
import { StyledFormContent } from "./styles";

const OfficialInChargeFormUI = (props: IOfficialInChargeFormUI) => {
  const {
    formik,
    loading,
    editDataOption,
    isDisabledButton,
    isMobile,
    officialInChargeOptions,
    labelButtonPrevious,
    labelButtonNext,
    onChangeSelect,
    onButtonClick,
    onPreviousStep,
  } = props;

  return (
    <BorderStack
      direction="column"
      gap={basic.spacing.s150}
      background={EComponentAppearance.LIGHT}
      boxSizing="initial"
      minHeight="55vh"
    >
      <StyledFormContent>
        <Stack direction="column">
          <BorderStack
            direction="column"
            border={EComponentAppearance.DARK}
            borderRadius={basic.spacing.s100}
            width="100%"
            height="auto"
            background={EComponentAppearance.LIGHT}
            boxSizing="border-box"
            padding={
              isMobile ? `${basic.spacing.s150}` : `${basic.spacing.s300}`
            }
            gap={basic.spacing.s250}
          >
            <Text size="medium">
              {addAssignmentsLabels.officialInChargeDescription}
            </Text>
            <Select
              disabled={false}
              id="official"
              name="official"
              label={addAssignmentsLabels.officialInCharge}
              placeholder={addAssignmentsLabels.placeholderOfficial}
              onChange={onChangeSelect}
              options={officialInChargeOptions}
              size="compact"
              value={formik.values.official ?? ""}
              fullwidth
              message={formik.errors.official}
              invalid={isInvalid(formik, "official")}
              onBlur={formik.handleBlur}
            />
          </BorderStack>
        </Stack>
      </StyledFormContent>
      <Stack justifyContent="flex-end" gap={basic.spacing.s250}>
        {editDataOption && (
          <Button
            onClick={onPreviousStep}
            variant="outlined"
            appearance={EComponentAppearance.GRAY}
          >
            {labelButtonPrevious}
          </Button>
        )}
        <Button
          onClick={onButtonClick}
          disabled={isDisabledButton}
          loading={loading}
          appearance={EComponentAppearance.PRIMARY}
        >
          {labelButtonNext}
        </Button>
      </Stack>
    </BorderStack>
  );
};

export { OfficialInChargeFormUI };
