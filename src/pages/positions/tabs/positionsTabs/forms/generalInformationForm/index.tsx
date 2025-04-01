import { forwardRef } from "react";
import { FormikProps } from "formik";
import { UseGeneralInfoCreditLineForm } from "@hooks/positions/useGeneralInfoRoles";
import { IGeneralInformationEntry } from "@ptypes/positions/assisted/IGeneralInformationEntry";
import { GeneralInformationFormUI } from "./interface";

interface IGeneralInformationForm {
  initialValues: IGeneralInformationEntry;
  loading?: boolean;
  handleNextStep: () => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IGeneralInformationEntry) => void;
  editDataOption?: boolean;
}

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
