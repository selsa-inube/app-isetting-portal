import { forwardRef } from "react";
import { FormikProps } from "formik";

import { GeneralInformationFormUI } from "./interface";
import { IGeneralInfoForm } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IGeneralInfoForm/indexs";
import { IGeneralInformationForm } from "@ptypes/users/tabs/userTab/addUser/forms/initializers/initializeGeneralInformationForm";
import { useGeneralInformationUserForm } from "@hooks/users/tabs/userTab/addUser/form/generalInformatrionUserForm";

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
    const {
      formik,
      mobilePadding,
      optionGender,
      optionIdType,
      labelButtonNext,
      buttonDisabledState,
      handleSelectChange,
    } = useGeneralInformationUserForm({
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
        optionGender={optionGender}
        optionIdType={optionIdType}
        handleSelectChange={handleSelectChange}
      />
    );
  }
);
GeneralInformationForm.displayName = "GeneralInformationForm";
export { GeneralInformationForm };
