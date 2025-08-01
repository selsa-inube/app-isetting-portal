import { forwardRef } from "react";
import { FormikProps } from "formik";
import { useReasonAndCoverageForm } from "@hooks/assignments/useReasonAndCoverageForm";
import { IReasonAndCoverageEntry } from "@ptypes/assignments/assisted/IReasonAndCoverageEntry";
import { IReasonAndCoverageForm } from "@ptypes/assignments/assisted/IReasonAndCoverageForm";
import { ReasonAndCoverageFormUI } from "./interface";

const ReasonAndCoverageForm = forwardRef<
  FormikProps<IReasonAndCoverageEntry>,
  IReasonAndCoverageForm
>(
  (
    {
      initialValues,
      onFormValid,
      onSubmit,
      onButtonClick,
      onPreviousStep,
      loading = false,
      editDataOption = false,
      initialData,
    },
    ref
  ) => {
    const {
      formik,
      isMobile,
      isDisabledButton,
      labelButtonPrevious,
      labelButtonNext,
      isDisabledDateTo,
    } = useReasonAndCoverageForm({
      initialValues,
      ref,
      editDataOption,
      loading,
      onSubmit,
      onFormValid,
      initialData,
    });

    return (
      <ReasonAndCoverageFormUI
        formik={formik}
        loading={loading}
        isDisabledButton={isDisabledButton}
        isMobile={isMobile}
        labelButtonPrevious={labelButtonPrevious}
        labelButtonNext={labelButtonNext}
        onButtonClick={onButtonClick}
        onPreviousStep={onPreviousStep}
        isDisabledDateTo={isDisabledDateTo}
      />
    );
  }
);

ReasonAndCoverageForm.displayName = "ReasonAndCoverageForm";

export { ReasonAndCoverageForm };
