import { forwardRef } from "react";
import { FormikProps } from "formik";

import { GeneralInformationFormUI } from "./interface";
import { IGeneralInfoForm } from "@ptypes/users/tabs/userTab/addUser/forms/IGeneralInfoForm/indexs";
import { IGeneralInformationForm } from "@ptypes/users/tabs/userTab/addUser/forms/initializeGeneralInformationForm";
import { useGeneralInformationUserForm } from "@hooks/users/tabs/userTab/addUser/generalInformatrionUserForm";

const GeneralInformationForm = forwardRef<
  FormikProps<IGeneralInfoForm>,
  IGeneralInformationForm
>(
  (
    {
      initialValues,
      onFormValid,
      onSubmit,
      handleNextStep,
      loading,
      editDataOption = false,
    },
    ref
  ) => {
    const { formik, mobilePadding, labelButtonNext, buttonDisabledState } =
      useGeneralInformationUserForm({
        initialValues,
        ref,
        onSubmit,
        onFormValid,
        loading,
        editDataOption,
      });

    return (
      <GeneralInformationFormUI
        loading={loading}
        formik={formik}
        onNextStep={handleNextStep}
        mobilePadding={mobilePadding}
        labelButtonNext={labelButtonNext}
        buttonDisabledState={buttonDisabledState}
      />
    );
  }
);
GeneralInformationForm.displayName = "GeneralInformationForm";
export { GeneralInformationForm };
