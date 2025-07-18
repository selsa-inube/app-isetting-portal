import { useLocation } from "react-router-dom";
import { useAddAssignments } from "@hooks/assignments/useAddPayrollAssignments";
import { addAssignmentsSteps } from "@config/assignments/assisted/steps";
import { AddAssignmentsUI } from "./interface";

const AddAssignments = () => {
  const location = useLocation();
  const { data } = location.state ?? {};

  const {
    currentStep,
    smallScreen,
    formValid,
    formValues,
    formReferences,
    handleToggleModal,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
  } = useAddAssignments();

  return (
    <AddAssignmentsUI
      currentStep={currentStep}
      formValid={formValid}
      smallScreen={smallScreen}
      steps={addAssignmentsSteps}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
      onToggleModal={handleToggleModal}
      formValues={formValues}
      formReferences={formReferences}
      setIsCurrentFormValid= {setIsCurrentFormValid}
      absentOfficialSelected={data || "" as string}
    />
  );
};

export { AddAssignments };
