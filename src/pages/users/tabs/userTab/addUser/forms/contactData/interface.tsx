import { Stack, Textarea, Input, Button } from "@inubekit/inubekit";

import { StyledContainer } from "./styles";
import { basic } from "@design/tokens";
import { getFieldState } from "@utils/forms";
import { EComponentAppearance } from "@enum/appearances";

import { BorderStack } from "@design/layout/borderStack";
import { IContactDataFormUI } from "@ptypes/users/tabs/userTab/addUser/forms/initializers/initializeContacDataForm/initializeContacDataFormUI";
import { contactDataConfig } from "@config/users/addUsers/form/contactData";
import { PhoneNumberField } from "@design/forms/PhoneNumberField";

const ContactDataFormUI = (props: IContactDataFormUI) => {
  const {
    formik,
    loading,
    onNextStep,
    componentSize,
    mobilePadding,
    labelButtonNext,
    buttonDisabledState,
    handlePreviousStep,
  } = props;

  return (
    <StyledContainer>
      <form>
        <Stack direction="column" gap={basic.spacing.s300}>
          <BorderStack
            border={EComponentAppearance.DARK}
            borderRadius={basic.spacing.s100}
            gap={basic.spacing.s300}
            padding={mobilePadding}
          >
            <Stack direction="row" width="100%" gap={basic.spacing.s250}>
              <Input
                name={contactDataConfig.input.name}
                id={contactDataConfig.input.id}
                label={contactDataConfig.input.label}
                placeholder={contactDataConfig.input.placeholder}
                type="text"
                size="compact"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                status={getFieldState(formik, "email")}
                message={formik.errors.email}
                required
                maxLength={contactDataConfig.input.length}
                fullwidth
              />
              <PhoneNumberField
                id={contactDataConfig.textArea.id}
                label={contactDataConfig.textArea.label}
                placeholder={contactDataConfig.textArea.placeholder}
                value={formik.values.phone}
                disabled={loading}
                required
                onChange={formik.handleChange}
                size="compact"
                fullwidth
              />
            </Stack>
          </BorderStack>
        </Stack>
      </form>
      <Stack justifyContent="flex-end" gap={basic.spacing.s250}>
        <Button
          onClick={handlePreviousStep}
          appearance={EComponentAppearance.PRIMARY}
        >
          {contactDataConfig.backButtonLalbel}
        </Button>
        <Button
          onClick={onNextStep}
          disabled={buttonDisabledState}
          appearance={EComponentAppearance.PRIMARY}
        >
          {labelButtonNext}
        </Button>
      </Stack>
    </StyledContainer>
  );
};

export { ContactDataFormUI };
