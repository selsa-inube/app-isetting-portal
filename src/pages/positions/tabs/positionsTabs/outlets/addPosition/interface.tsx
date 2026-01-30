import { MdOutlineWarningAmber } from "react-icons/md";
import { Stack, Breadcrumbs, Assisted } from "@inubekit/inubekit";
import { RolesForm } from "@pages/positions/tabs/positionsTabs/forms/rolesForm";
import { VerificationForm } from "@pages/positions/tabs/positionsTabs/forms/verificationForm";
import { GeneralInformationForm } from "@pages/positions/tabs/positionsTabs/forms/generalInformationForm";
import { PageTitle } from "@design/label/PageTitle";
import { basic } from "@design/tokens";
import { DecisionModal } from "@design/modals/decisionModal";
import { EComponentAppearance } from "@enum/appearances";
import { DecisionModalLabel } from "@config/positions/decisionModalText";
import { crumbsAddPosition } from "@config/positions/addPositions/navigation";
import { addPositionTitle } from "@config/positions/addPositions/addPositionTitle";
import { controlsAssisted } from "@config/controlsAssisted";
import { IAddPositionUI } from "@ptypes/positions/assisted/IAddPositionUI";
import { portalId } from "@src/config/portalId";

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
    showRequestProcessModal,
    showPendingReqModal,
    loading,
    setShowMultipurposeModal,
    onClosePendingReqModal,
    modalData,
    showDecision,
    onCloseProcess,
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
            navigatePage="/positions"
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
                savePositions={savePositions}
                requestSteps={requestSteps}
                showModal={showModal}
                isMobile={smallScreen}
                showRequestProcessModal={showRequestProcessModal}
                onClosePendingReqModal={onClosePendingReqModal}
                handleStepChange={(stepId) => setCurrentStep(stepId)}
                onCloseRequestStatus={onCloseRequestStatus}
                onPreviousStep={handlePreviousStep}
                onToggleModal={onToggleModal}
                showPendingReqModal={showPendingReqModal}
                loading={loading}
                onFinishForm={onFinishForm}
                onCloseProcess={onCloseProcess}
              />
            )}
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
      </Stack>
    </Stack>
  );
};

export { AddPositionUI };
