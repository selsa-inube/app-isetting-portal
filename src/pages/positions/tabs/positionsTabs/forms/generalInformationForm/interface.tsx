import { labels } from "@config/positions/assistedText";
import { IGeneralInformationFormUI } from "@ptypes/positions/generalInformation/IGeneralInformationFormUI";
import { basic } from "@design/tokens";
import { Input, Stack, Textarea } from "@inubekit/inubekit";
import { StyledContainer, StyledContainerFields } from "./styles";
const GeneralInformationFormUI = (props: IGeneralInformationFormUI) => {
  const { formik, loading, isMobile } = props;

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
                  <Input
                    name="namePosition"
                    id="namePosition"
                    label={labels.namePosition}
                    placeholder={labels.descriptionNamePosition}
                    type="text"
                    size="compact"
                    value={formik.values.namePosition}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    status={
                      formik.touched.namePosition && formik.errors.namePosition
                        ? "invalid"
                        : undefined
                    }
                    message={
                      formik.touched.namePosition
                        ? formik.errors.namePosition
                        : ""
                    }
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
                maxLength={100}
                disabled={loading}
                status={
                  formik.touched.descriptionPosition &&
                  formik.errors.descriptionPosition
                    ? "invalid"
                    : undefined
                }
                message={
                  formik.touched.descriptionPosition
                    ? formik.errors.descriptionPosition
                    : ""
                }
                fullwidth
                required
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Stack>
          </StyledContainerFields>
        </Stack>
      </form>
    </StyledContainer>
  );
};

export { GeneralInformationFormUI };
