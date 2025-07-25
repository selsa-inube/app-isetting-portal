import { useLocation } from "react-router-dom";
import { useAddAssignments } from "@hooks/addAssignments/useAddAssignments";
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
    setRolesSelected,
    setSelectedToggle,
    handleToggleModal,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
  } = useAddAssignments({ absentOfficial: data });

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
      setRolesSelected={setRolesSelected}
    />
  );
};

export { AddAssignments };
