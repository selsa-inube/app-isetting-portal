import { Stack, Breadcrumbs, Assisted } from "@inubekit/inubekit";
import { PageTitle } from "@design/label/PageTitle";
import { basic } from "@design/tokens";
import { crumbsAddMission } from "@config/missions/missionTab/assisted/navigation";
import { addMissionLabels } from "@config/missions/missionTab/assisted/addMissionTitle";
import { controlsAssisted } from "@config/controlsAssisted";
import { IAddMissionUI } from "@ptypes/missions/assisted/IAddMissionUI";
import { VerificationForm } from "../forms/verificationForm";
import { GeneralInformationForm } from "../forms/generalInformationForm";
import { portalId } from "@src/config/portalId";
import { DecisionModal } from "@src/design/modals/decisionModal";

const AddMissionUI = (props: IAddMissionUI) => {
  const {
    currentStep,
    generalInformationRef,
    initialGeneralInformationValues,
    steps,
    onNextStep,
    handlePreviousStep,
    handleNextStep,
    onToggleModal,
    onPreviousStep,
    setIsCurrentFormValid,
    setCurrentStep,
    smallScreen,
    onFinishForm,
    showModal,
    saveMission,
    requestSteps,
    onCloseRequestStatus,
    disabled,
    formValues,
    onClosePendingReqModal,
    onCloseProcess,
    showPendingReqModals,
    showRequestProcessModal,
    loading,
       modalData,
    showDecision,
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
          <Breadcrumbs crumbs={crumbsAddMission} />
          <PageTitle
            title={addMissionLabels.title}
            description={addMissionLabels.description}
            navigatePage={addMissionLabels.path}
          />
        </Stack>
        <Stack gap={basic.spacing.s300} direction="column">
          <Assisted
            step={steps[currentStep - 1]}
            totalSteps={steps.length}
            onBackClick={onPreviousStep}
            onNextClick={onNextStep}
            onSubmitClick={onToggleModal}
            disableNext={disabled}
            controls={controlsAssisted}
            size={smallScreen ? "small" : "large"}
          />
          <Stack direction="column">
            {currentStep === 1 && (
              <GeneralInformationForm
                ref={generalInformationRef}
                initialValues={initialGeneralInformationValues}
                onFormValid={setIsCurrentFormValid}
                onButtonClick={handleNextStep}
                onPrevious={handlePreviousStep}
              />
            )}

            {currentStep === 2 && (
              <VerificationForm
                requestSteps={requestSteps}
                showModal={showModal}
                showRequestProcessModal={showRequestProcessModal}
                updatedData={formValues}
                saveMission={saveMission}
                showPendingReqModal={showPendingReqModals}
                handleStepChange={(stepId) => setCurrentStep(stepId)}
                onFinishForm={onFinishForm}
                onPreviousStep={onPreviousStep}
                onToggleModal={onToggleModal}
                onCloseRequestStatus={onCloseRequestStatus}
                onClosePendingReqModal={onClosePendingReqModal}
                onCloseProcess={onCloseProcess}
                loading={loading}
                
              />
            )}
          </Stack>
        </Stack>
      </Stack>
        {showDecision && (
        <DecisionModal
          portalId={portalId}
          title={modalData.title}
          description={modalData.description}
          actionText={modalData.actionText}
          onCloseModal={modalData.onCloseModal}
          onClick={modalData.onClick}
          withCancelButton={modalData.withCancelButton}
          withIcon={modalData.withIcon}
          icon={modalData.icon}
          appearance={modalData.appearance}
          appearanceButton={modalData.appearanceButton}
        />
      )}
    </Stack>
  );
};

export { AddMissionUI };
