import { forwardRef } from "react";
import { FormikProps } from "formik";
import { useGeneralInfoCreditLineForm } from "@hooks/positions/useGeneralInfoRoles";
import { IGeneralInformationEntry } from "@ptypes/positions/assisted/IGeneralInformationEntry";
import { IGeneralInformationForm } from "@ptypes/positions/generalInformation/IGeneralInformationForm";
import { GeneralInformationFormUI } from "./interface";

const GeneralInformationForm = forwardRef<
  FormikProps<IGeneralInformationEntry>,
  IGeneralInformationForm
>(
  (
    {
      initialValues,
      onFormValid,
      onSubmit,
      onReset,
      handleNextStep,
      loading,
      editDataOption = false,
    },
    ref,
  ) => {
    const {
      formik,
      isMobile,
      valuesEqualButton,
      labelButtonNext,
      isDisabledButton,
    } = useGeneralInfoCreditLineForm({
      initialValues,
      ref,
      onSubmit,
      onFormValid,
      editDataOption,
    });

    return (
      <GeneralInformationFormUI
        loading={loading}
        formik={formik}
        onNextStep={handleNextStep}
        isMobile={isMobile}
        editDataOption={editDataOption}
        buttonDisabledState={isDisabledButton}
        labelButtonNext={labelButtonNext}
        valuesEqual={valuesEqualButton}
        onReset={onReset}
        onButtonClick={handleNextStep}
      />
    );
  },
);

GeneralInformationForm.displayName = "GeneralInformationForm";

export { GeneralInformationForm };
export type { IGeneralInformationForm };
