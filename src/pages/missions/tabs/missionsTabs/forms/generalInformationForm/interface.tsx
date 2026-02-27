import { basic } from "@design/tokens";
import { Button, Stack, Textarea, Textfield } from "@inubekit/inubekit";
import { EComponentAppearance } from "@enum/appearances";
import { IGeneralInformationFormUI } from "@ptypes/missions/assisted/IGeneralInformationFormUI";
import { generalInfoLabels } from "@config/missions/missionTab/generalInfoLabels";
import { getFieldState } from "@utils/forms";
import { StyledContainer, StyledContainerFields } from "./styles";

const GeneralInformationFormUI = (props: IGeneralInformationFormUI) => {
  const {
    formik,
    loading,
    isMobile,
    labelButtonNext,
    labelButtonPrevious,
    isDisabledButton,
    editDataOption,
    onPreviousStep,
    onButtonClick,
  } = props;

  return (
    <StyledContainer>
      <Stack direction="column" gap={basic.spacing.s300}>
        <StyledContainerFields $isMobile={isMobile}>
          <Stack direction="column" width="100%" gap={basic.spacing.s250}>
            <Stack
              direction={isMobile ? "column" : "row"}
              gap={basic.spacing.s250}
            >
              <Stack width={isMobile ? "100%" : "350px"}>
                <Textfield
                  name="nameMission"
                  id="nameMission"
                  label={generalInfoLabels.nameMission}
                  placeholder={generalInfoLabels.descriptionNameMission}
                  type="text"
                  size="compact"
                  value={formik.values.nameMission}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  status={getFieldState(formik, "nameMission")}
                  message={formik.errors.nameMission}
                  required
                  fullwidth
                  maxLength={50}
                />
              </Stack>
            </Stack>

            <Textarea
              label={generalInfoLabels.descriptionMission}
              placeholder={generalInfoLabels.placeholderMission}
              name="descriptionMission"
              id="descriptionMission"
              value={formik.values.descriptionMission}
              maxLength={100}
              disabled={loading}
              status={getFieldState(formik, "descriptionMission")}
              message={formik.errors.descriptionMission}
              fullwidth
              required
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </Stack>
        </StyledContainerFields>

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
      </Stack>
    </StyledContainer>
  );
};

export { GeneralInformationFormUI };
