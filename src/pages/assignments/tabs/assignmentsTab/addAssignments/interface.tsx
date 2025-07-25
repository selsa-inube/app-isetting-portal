import { Assisted, Breadcrumbs, Stack } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { PageTitle } from "@design/label/PageTitle";
import { stepsKeysAssignments } from "@enum/stepsKeysAssignments";
import { controlsAssisted } from "@config/controlsAssisted";
import { addAssignmentsLabels } from "@config/assignments/assisted/addAssignmentsLabels";
import { crumbsAddAssignments } from "@config/assignments/assisted/navigation";
import { IAddAssignmentsUI } from "@ptypes/assignments/assisted/IAddAssignmentsUI";
import { OfficialInChargeForm } from "../forms/officialInChargeForm";
import { BusinessUnitForm } from "../forms/businessUnitForm";
import { RolesByBusinessUnitForm } from "../forms/rolesByBusinessUnitForm";

const AddAssignmentsUI = (props: IAddAssignmentsUI) => {
  const {
    currentStep,
    formValid,
    smallScreen,
    steps,
    absentOfficialSelected,
    formValues,
    formReferences,
    setRolesSelected,
    setSelectedToggle,
    setIsCurrentFormValid,
    onNextStep,
    onPreviousStep,
    onToggleModal,
  } = props;

  console.log("qqq", stepsKeysAssignments.BUSINESS_UNITS_ASSIGNMENT);

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
            {currentStep === stepsKeysAssignments.OFFICIAL_IN_CHARGE && (
              <OfficialInChargeForm
                ref={formReferences.officialInCharge}
                absentOfficialSelected={absentOfficialSelected}
                initialValues={formValues.officialInCharge.values}
                onFormValid={setIsCurrentFormValid}
                onButtonClick={onNextStep}
              />
            )}
            {currentStep === stepsKeysAssignments.BUSINESS_UNITS_ASSIGNMENT && (
              <BusinessUnitForm
                entries={formValues.businessUnitOfficial.values}
                setSelectedToggle={setSelectedToggle}
                onButtonClick={onNextStep}
                onPreviousStep={onPreviousStep}
              />
            )}
            {currentStep === stepsKeysAssignments.ROLES_BY_BUSINESS_UNIT && (
              <RolesByBusinessUnitForm
                entries={formValues.rolesByBusinessUnits.values}
                onPreviousStep={onPreviousStep}
                onButtonClick={onNextStep}
                loading={false}
                setRolesSelected={setRolesSelected}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { AddAssignmentsUI };
