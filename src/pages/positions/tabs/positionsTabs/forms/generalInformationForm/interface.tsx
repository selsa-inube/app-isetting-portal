import { FormikProps } from "formik";
import { Textarea, Input, Stack } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { getFieldState } from "@utils/forms";
import { StyledContainer, StyledContainerFields } from "./styles";
import { IGeneralInformationEntry } from "../../outlets/addPosition/types";
import { labels } from "@config/positions/assistedText";

interface IGeneralInformationFormUI {
  formik: FormikProps<IGeneralInformationEntry>;
  onNextStep: () => void;
  loading?: boolean;
  isMobile: boolean;
}

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
                    status={getFieldState(formik, "namePosition")}
                    message={formik.errors.namePosition}
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
                maxLength={1000}
                disabled={loading}
                status={getFieldState(formik, "descriptionPosition")}
                message={formik.errors.descriptionPosition}
                fullwidth
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
