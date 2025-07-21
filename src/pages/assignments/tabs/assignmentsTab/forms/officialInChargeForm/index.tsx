import { forwardRef } from "react";
import { FormikProps } from "formik";

import { IOfficialInChargeEntry } from "@ptypes/assignments/assisted/IOfficialInChargeEntry";
import { IOfficialInChargeForm } from "@ptypes/assignments/assisted/IOfficialInChargeForm";
import { useOfficialInChargeForm } from "@hooks/assignments/useOfficialInChargeForm";
import { OfficialInChargeFormUI } from "./interface";

const OfficialInChargeForm = forwardRef<
  FormikProps<IOfficialInChargeEntry>,
  IOfficialInChargeForm
>(
  (
    {
      absentOfficialSelected,
      initialValues,
      onFormValid,
      onSubmit,
      onButtonClick,
      onPreviousStep,
      loading = false,
      editDataOption = false,
      initialOfficialData,
    },
    ref
  ) => {
    const {
      officialInChargeOptions,
      formik,
      isMobile,
      isDisabledButton,
      labelButtonPrevious,
      labelButtonNext,
      handleChangeSelect,
    } = useOfficialInChargeForm({
      absentOfficialSelected,
      initialValues,
      ref,
      editDataOption,
      loading,
      onSubmit,
      onFormValid,
      initialOfficialData,
    });

    return (
      <OfficialInChargeFormUI
        loading={loading}
        formik={formik}
        onButtonClick={onButtonClick}
        onChangeSelect={handleChangeSelect}
        onPreviousStep={onPreviousStep}
        editDataOption={editDataOption}
        isDisabledButton={isDisabledButton}
        isMobile={isMobile}
        labelButtonPrevious={labelButtonPrevious}
        labelButtonNext={labelButtonNext}
        officialInChargeOptions={officialInChargeOptions}
      />
    );
  }
);

OfficialInChargeForm.displayName = "OfficialInChargeForm";

export { OfficialInChargeForm };
