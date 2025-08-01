import {
  Button,
  Date,
  Fieldset,
  Grid,
  Stack,
  Text,
  Textarea,
} from "@inubekit/inubekit";
import { BorderStack } from "@design/layout/borderStack";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { getFieldState } from "@utils/forms";
import { addAssignmentsLabels } from "@config/assignments/assisted/addAssignmentsLabels";
import { IReasonAndCoverageFormUI } from "@ptypes/assignments/assisted/IReasonAndCoverageFormUI";
import { StyledFormContent } from "../officialInChargeForm/styles";

const ReasonAndCoverageFormUI = (props: IReasonAndCoverageFormUI) => {
  const {
    formik,
    loading,
    isDisabledButton,
    isMobile,
    labelButtonPrevious,
    labelButtonNext,
    isDisabledDateTo,
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
            <Fieldset
              legend={addAssignmentsLabels.periodOfTheAssignment}
              spacing="wide"
            >
              <Grid
                width="100%"
                alignItems="center"
                justifyItems="center"
                templateColumns={isMobile ? "1fr" : "repeat(3, 1fr)"}
                templateRows={isMobile ? "repeat(3, 1fr)" : "1fr"}
              >
                <Stack width="100%" gap={basic.spacing.s150} alignItems="center" justifyContent="space-between">
                  <Text size="medium">{addAssignmentsLabels.reasonFrom}</Text>
                  <Date
                    id="dateFrom"
                    name="dateFrom"
                    onChange={formik.handleChange}
                    status={getFieldState(formik, "dateFrom")}
                    value={formik.values.dateFrom}
                    size="compact"
                    fullwidth
                    message={formik.errors.dateFrom}
                    onBlur={formik.handleBlur}
                  />
                </Stack>
                <Text textAlign="center">-</Text>
                <Stack width="100%" gap={basic.spacing.s150} alignItems="center" justifyContent="space-between">
                  <Text size="medium">{addAssignmentsLabels.reasonUntil}</Text>
                  <Date
                    id="dateTo"
                    name="dateTo"
                    onChange={formik.handleChange}
                    status={getFieldState(formik, "dateTo")}
                    value={formik.values.dateTo}
                    size="compact"
                    fullwidth
                    message={formik.errors.dateTo}
                    onBlur={formik.handleBlur}
                    disabled={isDisabledDateTo}
                  />
                </Stack>
              </Grid>
            </Fieldset>

            <Textarea
              label={addAssignmentsLabels.descriptionReason}
              placeholder={addAssignmentsLabels.placeholderReason}
              name="descriptionReason"
              id="descriptionReason"
              value={formik.values.descriptionReason}
              maxLength={addAssignmentsLabels.maxLengthReason}
              disabled={loading}
              status={getFieldState(formik, "descriptionReason")}
              message={formik.errors.descriptionReason}
              fullwidth
              required
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </BorderStack>
        </Stack>
      </StyledFormContent>
      <Stack justifyContent="flex-end" gap={basic.spacing.s250}>
        <Button
          onClick={onPreviousStep}
          variant="outlined"
          appearance={EComponentAppearance.GRAY}
        >
          {labelButtonPrevious}
        </Button>

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

export { ReasonAndCoverageFormUI };
