import { forwardRef } from "react";
import { FormikProps } from "formik";
import { UseGeneralInfoCreditLineForm } from "@hooks/positions/useGeneralInfoRoles";
import { IGeneralInformationEntry } from "@ptypes/positions/assisted/IGeneralInformationEntry";
import { IGeneralInformationForm } from "@ptypes/positions/generalInformation/IGeneralInformationForm";
import { GeneralInformationFormUI } from "./interface";

const GeneralInformationForm = forwardRef<
  FormikProps<IGeneralInformationEntry>,
  IGeneralInformationForm
>(({ initialValues, onFormValid, onSubmit, handleNextStep, loading }, ref) => {
  const { formik, isMobile } = UseGeneralInfoCreditLineForm(
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
