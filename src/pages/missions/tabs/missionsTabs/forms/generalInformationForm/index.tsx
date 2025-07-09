import { forwardRef } from "react";
import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "@ptypes/missions/assisted/IGeneralInformationEntry";
import { IGeneralInformationForm } from "@ptypes/missions/assisted/IGeneralInformationForm";
import { UseGeneralInfo } from "@hooks/missions/useGeneralInfo";
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
      onButtonClick,
      onPrevious,
      loading,
      editDataOption,
    },
    ref
  ) => {
    const {
      formik,
      isMobile,
      labelButtonNext,
      labelButtonPrevious,
      isDisabledButton,
    } = UseGeneralInfo({
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
        isMobile={isMobile}
        labelButtonNext={labelButtonNext}
        labelButtonPrevious={labelButtonPrevious}
        isDisabledButton={isDisabledButton}
        onPreviousStep={onPrevious}
        onButtonClick={onButtonClick}
        editDataOption={editDataOption}
      />
    );
  }
);

GeneralInformationForm.displayName = "GeneralInformationForm";

export { GeneralInformationForm };
export type { IGeneralInformationForm };
