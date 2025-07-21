import { Assisted, Breadcrumbs, Stack } from "@inubekit/inubekit";
import { controlsAssisted } from "@config/controlsAssisted";
import { addAssignmentsLabels } from "@config/assignments/assisted/addAssignmentsLabels";
import { crumbsAddAssignments } from "@config/assignments/assisted/navigation";
import { basic } from "@design/tokens";
import { PageTitle } from "@design/label/PageTitle";
import { IAddAssignmentsUI } from "@ptypes/assignments/assisted/IAddAssignmentsUI";
import { OfficialInChargeForm } from "../forms/officialInChargeForm";

const AddAssignmentsUI = (props: IAddAssignmentsUI) => {
  const {
    currentStep,
    formValid,
    smallScreen,
    steps,
    absentOfficialSelected,
    formValues,
    formReferences,
    setIsCurrentFormValid,
    onNextStep,
    onPreviousStep,
    onToggleModal,
  } = props;

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `${basic.spacing.s200}`
          : `${basic.spacing.s300} ${basic.spacing.s800}`
      }
    >
      <Stack gap={basic.spacing.s300} direction="column">
        <Stack gap={basic.spacing.s300} direction="column">
          <Breadcrumbs crumbs={crumbsAddAssignments} />
          <PageTitle
            title={addAssignmentsLabels.title}
            description={addAssignmentsLabels.description}
          />
        </Stack>
        <Stack gap={basic.spacing.s300} direction="column">
          <Assisted
            step={steps[currentStep - 1]}
            totalSteps={steps.length}
            onBackClick={onPreviousStep}
            onNextClick={onNextStep}
            onSubmitClick={onToggleModal}
            disableNext={formValid}
            controls={controlsAssisted}
            size={smallScreen ? "small" : "large"}
            showCurrentStepNumber={false}
          />
          <Stack direction="column">
            {currentStep === 1 && (
              <OfficialInChargeForm
               ref={formReferences.officialInCharge}
                absentOfficialSelected={absentOfficialSelected}
                initialValues={formValues.officialInCharge.values}
                onFormValid={setIsCurrentFormValid}
                onButtonClick={onNextStep}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { AddAssignmentsUI };
