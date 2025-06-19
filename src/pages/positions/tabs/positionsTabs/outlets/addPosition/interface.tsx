import { MdOutlineWarningAmber } from "react-icons/md";
import { Stack, Breadcrumbs, Assisted, Button } from "@inubekit/inubekit";
import { PageTitle } from "@design/label/PageTitle";
import { InitializerForm } from "@design/forms/InitializerForm";
import { basic } from "@design/tokens";
import { DecisionModal } from "@design/modals/decisionModal";
import { requestProcessMessage } from "@config/positionsTabs/requestProcessMessage";
import { DecisionModalLabel } from "@config/positions/decisionModalText";
import { IAddPositionUI } from "@ptypes/positions/assisted/IAddPositionUI";
import { RequestProcess } from "@design/feedback/requestProcess";
import { requestStatusMessage } from "@config/positions/requestStatusMessage";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { VerificationForm } from "@design/forms/verificationForm";
import { FinishModal } from "@config/positions/verificationForm";
import { postionsButtonText } from "@config/positions/assisted/buttonText";
import { crumbsAddPosition } from "@config/positions/addPositions/navigation";
import { addPositionTitle } from "@config/positions/addPositions/addPositionTitle";
import { GeneralInformationForm } from "../../forms/generalInformationForm";

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
    buttonText,
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
            controls={{
              goBackText: "Anterior",
              goNextText: "Siguiente",
              submitText: "Finalizar",
            }}
            size={smallScreen ? "small" : "large"}
          />
          <Stack direction="column">
            {currentStep === 1 && (
              <GeneralInformationForm
                ref={generalInformationRef}
                initialValues={initialValues.generalInformation.values}
                onFormValid={setIsCurrentFormValid}
                handleNextStep={onNextStep}
              />
            )}
            {currentStep === 2 && (
              <InitializerForm
                dataOptionsForms={roles}
                dataOptionsValueSelect={options}
                setSelectedToggle={setSelectedToggle}
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
                showRequestProcessModal={false}
                handleStepChange={(stepId) => setCurrentStep(stepId)}
              />
            )}
          </Stack>
          <Stack gap="16px" justifyContent="flex-end">
            {currentStep !== 1 && (
              <Button
                onClick={handlePreviousStep}
                type="button"
                disabled={currentStep === steps[0].id}
                spacing="wide"
                variant="none"
                appearance={ComponentAppearance.GRAY}
              >
                {postionsButtonText.buttonHandlePrevious}
              </Button>
            )}
            <Button
              onClick={() =>
                currentStep === steps.length
                  ? onToggleModal()
                  : handleNextStep()
              }
              spacing="wide"
              disabled={disabled}
            >
              {buttonText}
            </Button>
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
            appearance={ComponentAppearance.WARNING}
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
            appearance={ComponentAppearance.SUCCESS}
            onCloseRequestStatus={onCloseRequestStatus}
          />
        )}

        {showPendingReqModals && (
          <RequestStatusModal
            portalId="portal"
            title={requestStatusMessage(savePositions.responsible).title}
            description={
              requestStatusMessage(savePositions.responsible).description
            }
            requestNumber={savePositions.requestNumber}
            onClick={onClosePendingReqModal}
            onCloseModal={onClosePendingReqModal}
            isLoading={false}
            actionText={
              requestStatusMessage(savePositions.responsible).actionText
            }
            appearance={ComponentAppearance.PRIMARY}
          />
        )}
      </Stack>
    </Stack>
  );
};

export { AddPositionUI };
