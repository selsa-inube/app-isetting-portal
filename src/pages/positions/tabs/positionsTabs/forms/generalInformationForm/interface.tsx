import { labels } from "@config/positions/assistedText";
import { IGeneralInformationFormUI } from "@ptypes/positions/generalInformation/IGeneralInformationFormUI";
import { basic } from "@design/tokens";
import { Button, Stack, Textarea, Textfield } from "@inubekit/inubekit";
import { StyledContainer, StyledContainerFields } from "./styles";
import { getFieldState } from "@utils/forms";
import { EComponentAppearance } from "@enum/appearances";

const GeneralInformationFormUI = (props: IGeneralInformationFormUI) => {
  const {
    formik,
    loading,
    isMobile,
    editDataOption,
    buttonDisabledState,
    labelButtonNext,
    valuesEqual,
    onReset,
    onButtonClick,
  } = props;

  return (
    <StyledContainer>
      <form>
        <Stack direction="column" gap={basic.spacing.s300}>
          <StyledContainerFields $isMobile={isMobile}>
            <Stack direction="column" width="100%" gap={basic.spacing.s250}>
              <Stack
                direction={isMobile ? "column" : "row"}
                gap={basic.spacing.s250}
              >
                <Stack width={isMobile ? "100%" : "350px"}>
                  <Textfield
                    name="namePosition"
                    id="namePosition"
                    label={labels.namePosition}
                    placeholder={labels.descriptionNamePosition}
                    type="text"
                    size="compact"
                    value={formik.values.namePosition}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    status={getFieldState(formik, "namePosition")}
                    message={formik.errors.namePosition}
                    required
                    fullwidth
                  />
                </Stack>
              </Stack>

              <Textarea
                label={labels.descriptionPosition}
                placeholder={labels.placeholderPosition}
                name="descriptionPosition"
                id="descriptionPosition"
                value={formik.values.descriptionPosition}
                maxLength={labels.maxLengthDescription}
                disabled={loading}
                status={getFieldState(formik, "descriptionPosition")}
                message={formik.errors.descriptionPosition}
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
                onClick={onReset}
                appearance={EComponentAppearance.GRAY}
                disabled={valuesEqual}
              >
                {labels.cancelButton}
              </Button>
            )}

            <Button
              onClick={onButtonClick}
              disabled={buttonDisabledState}
              loading={loading}
              appearance={EComponentAppearance.PRIMARY}
            >
              {labelButtonNext}
            </Button>
          </Stack>
        </Stack>
      </form>
    </StyledContainer>
  );
};

export { GeneralInformationFormUI };
