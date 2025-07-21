import { useLocation } from "react-router-dom";
import { UseAddAssignments } from "@hooks/assignments/useAddAssignments";
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
    setSelectedToggle,
    handleToggleModal,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
  } = UseAddAssignments({ absentOfficial: data });

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
      setIsCurrentFormValid={setIsCurrentFormValid}
      absentOfficialSelected={data || ("" as string)}
      setSelectedToggle={setSelectedToggle}
    />
  );
};

export { AddAssignments };
