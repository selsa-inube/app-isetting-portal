import { forwardRef } from "react";
import { FormikProps } from "formik";
import { IGeneralInformationForm } from "@ptypes/users/generalInformationForm/IGeneralInformationForm";
import { IGeneralInformationEntry } from "@ptypes/users/assisted/IGeneralInformationEntry";
import { UseGeneralInfoUsersForm } from "@hooks/users/useGeneralInfoUsersForm";
import { GeneralInformationFormUI } from "./interface";

const GeneralInformationForm = forwardRef<
  FormikProps<IGeneralInformationEntry>,
  IGeneralInformationForm
>(({ initialValues, onFormValid, onSubmit, handleNextStep, loading }, ref) => {
  const {
    formik,
    isMobile,
    handleChange,
    optionsUser,
    optionsIdentificationtypenatura,
    smallScreen,
  } = UseGeneralInfoUsersForm(initialValues, ref, onSubmit, onFormValid);

  return (
    <GeneralInformationFormUI
      loading={loading}
      formik={formik}
      onNextStep={handleNextStep}
      isMobile={isMobile}
      handleChange={handleChange}
      optionsUser={optionsUser}
      optionsIdentificationtypenatura={optionsIdentificationtypenatura}
      smallScreen={smallScreen}
    />
  );
});

GeneralInformationForm.displayName = "GeneralInformationForm";

export { GeneralInformationForm };
export type { IGeneralInformationForm };
