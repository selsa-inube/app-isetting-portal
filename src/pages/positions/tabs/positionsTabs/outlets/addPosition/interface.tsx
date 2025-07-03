import { MdOutlineWarningAmber } from "react-icons/md";
import { Stack, Breadcrumbs, Assisted } from "@inubekit/inubekit";
import { PageTitle } from "@design/label/PageTitle";
import { basic } from "@design/tokens";
import { DecisionModal } from "@design/modals/decisionModal";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { DecisionModalLabel } from "@config/positions/decisionModalText";
import { IAddPositionUI } from "@ptypes/positions/assisted/IAddPositionUI";
import { RequestProcess } from "@design/feedback/requestProcess";
import { requestStatusMessage } from "@config/positions/requestStatusMessage";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { VerificationForm } from "@pages/positions/tabs/positionsTabs/forms/verificationForm";
import { FinishModal } from "@config/positions/verificationForm";
import { crumbsAddPosition } from "@config/positions/addPositions/navigation";
import { addPositionTitle } from "@config/positions/addPositions/addPositionTitle";
import { GeneralInformationForm } from "../../forms/generalInformationForm";
import { controlsAssisted } from "@config/controlsAssisted";
import { portalId } from "@config/portalId";
import { RolesForm } from "../../forms/rolesForm";
import { EComponentAppearance } from "@enum/appearances";

const AddPositionUI = (props: IAddPositionUI) => {
  const {
    currentStep,
    generalInformationRef,
    initialValues,
    steps,
    setSelectedToggle,
    options,
    onNextStep,
    handlePreviousStep,
    handleNextStep,
    onToggleModal,
    onPreviousStep,
    setIsCurrentFormValid,
    setCurrentStep,
    smallScreen,
    roles,
    onFinishForm,
    showModal,
    savePositions,
    requestSteps,
    onCloseRequestStatus,
    disabled,
    formValues,
    showMultipurposeModal,
    setShowMultipurposeModal,
    onClosePendingReqModal,

    shouldShowRequestProcessModal,
    showPendingReqModals,
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
          <Breadcrumbs crumbs={crumbsAddPosition} />
          <PageTitle
            title={addPositionTitle.title}
            description={addPositionTitle.description}
            navigatePage="/privileges/positions"
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
                initialValues={initialValues.generalInformation.values}
                onFormValid={setIsCurrentFormValid}
                handleNextStep={onNextStep}
                onReset={handlePreviousStep}
              />
            )}
            {currentStep === 2 && (
              <RolesForm
                entries={roles}
                options={options}
                setSelectedToggle={setSelectedToggle}
                onButtonClick={onNextStep}
                onReset={handlePreviousStep}
                withFilter
              />
            )}
            {currentStep === 3 && (
              <VerificationForm
                updatedData={{
                  generalInformation: {
                    isValid: true,
                    values: formValues.generalInformation.values,
                  },
                  rolesStaff: {
                    isValid: true,
                    values: formValues.rolesStaff.values,
                  },
                }}
                requestSteps={[]}
                showModal={false}
                isMobile={smallScreen}
                showRequestProcessModal={false}
                handleStepChange={(stepId) => setCurrentStep(stepId)}
                onPreviousStep={handlePreviousStep}
                onToggleModal={onToggleModal}
              />
            )}
          </Stack>
        </Stack>

        {showModal && (
          <DecisionModal
            portalId={DecisionModalLabel.portalId}
            title={FinishModal.title}
            description={FinishModal.description}
            actionText={FinishModal.actionText}
            onCloseModal={onToggleModal}
            onClick={onFinishForm}
          />
        )}

        {showMultipurposeModal && (
          <DecisionModal
            portalId={DecisionModalLabel.portalId}
            title={DecisionModalLabel.titleSecondaStep}
            description={DecisionModalLabel.descriptionSecondaStep}
            actionText={DecisionModalLabel.actionTextSecondaStep}
            icon={<MdOutlineWarningAmber />}
            appearance={EComponentAppearance.WARNING}
            onCloseModal={() => setShowMultipurposeModal(false)}
            onClick={() => {
              handleNextStep();
            }}
            withIcon
          />
        )}
        {shouldShowRequestProcessModal && (
          <RequestProcess
            portalId={DecisionModalLabel.portalId}
            saveData={savePositions}
            descriptionRequestProcess={requestProcessMessage}
            descriptionRequestStatus={requestStatusMessage}
            requestProcessSteps={requestSteps}
            appearance={EComponentAppearance.SUCCESS}
            onCloseRequestStatus={onCloseRequestStatus}
            onCloseProcess={() => {}}
          />
        )}

        {showPendingReqModals && (
          <RequestStatusModal
            portalId={portalId}
            title={requestStatusMessage(savePositions.responsible).title}
            description={
              requestStatusMessage(savePositions.responsible).description
            }
            requestNumber={savePositions.requestNumber}
            onClick={onClosePendingReqModal}
            onCloseModal={onClosePendingReqModal}
            loading={false}
            actionText={
              requestStatusMessage(savePositions.responsible).actionText
            }
            appearance={EComponentAppearance.PRIMARY}
          />
        )}
      </Stack>
    </Stack>
  );
};

export { AddPositionUI };
