import { forwardRef } from "react";
import { FormikProps } from "formik";

import { MissionForStaffFormUI } from "./interface";

import { useMissionForUserForm } from "@hooks/users/tabs/userTab/addUser/form/missionForStaff";

import { IMissionForStaffForm } from "@ptypes/users/tabs/userTab/addUser/forms/initializers/initializeMissionForStaff";
import { IMissionForStaff } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IMissionForStaff";

const MissionForStaffForm = forwardRef<
  FormikProps<IMissionForStaff>,
  IMissionForStaffForm
>(
  (
    {
      initialValues,
      onFormValid,
      onSubmit,
      handleNextStep,
      loading,
      editDataOption = false,
      handlePreviousStep,
    },
    ref
  ) => {
    const {
      formik,
      mobilePadding,
      buttonDisabledState,
      handleSelectChange,
      optionMission,
      missionSelected,
      showForm,
    } = useMissionForUserForm({
      initialValues,
      ref,
      onSubmit,
      onFormValid,
      loading,
      editDataOption,
    });

    return (
      <MissionForStaffFormUI
        loading={loading}
        formik={formik}
        onNextStep={handleNextStep}
        mobilePadding={mobilePadding}
        buttonDisabledState={buttonDisabledState}
        handleSelectChange={handleSelectChange}
        optionMission={optionMission}
        missionSelected={missionSelected}
        showForm={showForm}
        handlePreviousStep={handlePreviousStep}
      />
    );
  }
);
MissionForStaffForm.displayName = "GeneralInformationForm";
export { MissionForStaffForm };
