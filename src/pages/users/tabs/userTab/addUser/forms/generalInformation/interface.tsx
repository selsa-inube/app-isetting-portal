import { Stack, Date, Input, Button, Select, Grid } from "@inubekit/inubekit";

import { StyledContainer } from "./styles";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";

import { BorderStack } from "@design/layout/borderStack";
import { IGeneralInformationFormUI } from "@ptypes/users/tabs/userTab/addUser/forms/initializers/initializeGeneralInformationForm/initializeGeneralInfoUI";
import { generalInformationConfig } from "@config/users/addUsers/form/generalStep";

const GeneralInformationFormUI = (props: IGeneralInformationFormUI) => {
  const {
    formik,
    onNextStep,
    mobilePadding,
    labelButtonNext,
    buttonDisabledState,
    optionGender,
    optionIdType,
    handleSelectChange,
  } = props;
  return (
    <StyledContainer>
      <form>
        <BorderStack
          border={EComponentAppearance.DARK}
          borderRadius={basic.spacing.s100}
          gap={basic.spacing.s300}
          padding={mobilePadding}
        >
          <Grid
            width="100%"
            templateColumns="1fr 1fr"
            autoRows=""
            gap={basic.spacing.s20}
          >
            <Input
              name={generalInformationConfig.firstName.name}
              id={generalInformationConfig.firstName.id}
              label={generalInformationConfig.firstName.label}
              placeholder={generalInformationConfig.firstName.placeholder}
              type="text"
              size="compact"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              message={formik.errors.firstName}
              fullwidth
              required
              maxLength={generalInformationConfig.firstName.length}
            />
            <Input
              name={generalInformationConfig.lastName.name}
              id={generalInformationConfig.lastName.id}
              label={generalInformationConfig.lastName.label}
              placeholder={generalInformationConfig.lastName.placeholder}
              size="compact"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              message={formik.errors.lastName}
              fullwidth
              required
              maxLength={generalInformationConfig.lastName.length}
            />
            <Select
              name={generalInformationConfig.idType.name}
              onChange={handleSelectChange}
              options={optionIdType}
              value={formik.values.idType}
              label={generalInformationConfig.idType.label}
              placeholder={generalInformationConfig.idType.placeholder}
              id={generalInformationConfig.idType.id}
              fullwidth
              size="compact"
            ></Select>
            <Input
              name={generalInformationConfig.idNumber.name}
              id={generalInformationConfig.idNumber.id}
              label={generalInformationConfig.idNumber.label}
              placeholder={generalInformationConfig.idNumber.placeholder}
              size="compact"
              type="number"
              value={formik.values.idNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              message={formik.errors.idNumber}
              fullwidth
              required
            />
            <Select
              name={generalInformationConfig.gender.name}
              onChange={handleSelectChange}
              options={optionGender}
              value={formik.values.gender}
              label={generalInformationConfig.gender.label}
              placeholder={generalInformationConfig.gender.placeholder}
              id={generalInformationConfig.gender.id}
              fullwidth
              size="compact"
            ></Select>
            <Date
              id={generalInformationConfig.birthDate.id}
              value={formik.values.birthDate}
              label={generalInformationConfig.birthDate.label}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullwidth
              size="compact"
              name={generalInformationConfig.birthDate.name}
            />
          </Grid>
        </BorderStack>
      </form>
      <Stack justifyContent="flex-end" gap={basic.spacing.s250}>
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

export { GeneralInformationFormUI };
