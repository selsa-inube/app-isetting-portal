import { IGeneralInformationForm } from "@ptypes/users/generalInformationForm/IGeneralInformationForm";
import { GeneralInformationFormUI } from "./interface";
import { forwardRef } from "react";
import { IGeneralInformationEntry } from "@ptypes/users/assisted/IGeneralInformationEntry";
import { FormikProps } from "formik";
import { UseGeneralInfoUsersInvitationsForm } from "@hooks/users/useGeneralInfoUsersInvitationsForm";

const GeneralInformationForm = forwardRef<
  FormikProps<IGeneralInformationEntry>,
  IGeneralInformationForm
>(({ initialValues, onFormValid, onSubmit, handleNextStep, loading }, ref) => {
  const { formik, isMobile } = UseGeneralInfoUsersInvitationsForm(
    initialValues,
    ref,
    onSubmit,
    onFormValid
  );

  return (
    <GeneralInformationFormUI
      loading={loading}
      formik={formik}
      onNextStep={handleNextStep}
      isMobile={isMobile}
    />
  );
});

GeneralInformationForm.displayName = "GeneralInformationForm";

export { GeneralInformationForm };
export type { IGeneralInformationForm };
