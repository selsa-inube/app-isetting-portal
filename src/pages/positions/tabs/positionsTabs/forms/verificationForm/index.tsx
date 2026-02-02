import { Button, Stack } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

import { AddPositionsSteps } from "@config/positions/assisted";
import { VerificationStepSection } from "./verificationStepSection";
import { labels } from "@config/verificationTitles";
import { EComponentAppearance } from "@enum/appearances";
import { IVerificationForm } from "@ptypes/positions/assisted/IVerificationForm";
import { requestStatusMessage } from "@config/positions/requestStatusMessage";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { finishModal } from "@config/assignments/assisted/finishModal";
import { RequestProcess } from "@design/feedback/requestProcess";
import { DecisionModal } from "@design/modals/decisionModal";
import { RequestStatusModal } from "@design/modals/requestStatusModal";

const VerificationForm = (props: IVerificationForm) => {
  const {
    requestSteps,
    showModal,
    showRequestProcessModal,
    updatedData,
    savePositions,
    showPendingReqModal,
    loading,
    isMobile,
    handleStepChange,
    onFinishForm,
    onPreviousStep,
    onToggleModal,
    onCloseRequestStatus,
    onClosePendingReqModal,
    onCloseProcess,
  } = props;
  const canShowRequestProcess = showRequestProcessModal && savePositions;

  const canShowPendingRequest =
    showPendingReqModal &&
    savePositions &&
    savePositions.requestNumber.length > 0;

  const filteredSteps = AddPositionsSteps.filter(
    (step) => step.name.toLowerCase() !== labels.verification,
  );

  return (
    <Stack direction="column" gap={basic.spacing.s300}>
      {filteredSteps.map((step) => (
        <VerificationStepSection
          key={step.id}
          step={step}
          updatedData={updatedData}
          onStepChange={handleStepChange}
        />
      ))}

      <Stack justifyContent="flex-end" gap={basic.spacing.s250}>
        <Button
          fullwidth={isMobile}
          onClick={onPreviousStep}
          appearance={EComponentAppearance.GRAY}
        >
          {labels.previous}
        </Button>

        <Button
          fullwidth={isMobile}
          onClick={onToggleModal}
          appearance={EComponentAppearance.PRIMARY}
        >
          {labels.finally}
        </Button>
      </Stack>
      {showModal && (
        <DecisionModal
          portalId="portal"
          title={finishModal.title}
          description={finishModal.description}
          actionText={finishModal.actionText}
          onCloseModal={onToggleModal}
          onClick={onFinishForm}
        />
      )}
      {canShowRequestProcess && (
        <RequestProcess
          portalId="portal"
          saveData={savePositions}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          requestProcessSteps={requestSteps}
          appearance={EComponentAppearance.SUCCESS}
          onCloseRequestStatus={onCloseRequestStatus}
          onCloseProcess={onCloseProcess}
        />
      )}
      {canShowPendingRequest && (
        <RequestStatusModal
          portalId="portal"
          title={requestStatusMessage(savePositions.staffName).title}
          description={
            requestStatusMessage(savePositions.staffName).description
          }
          requestNumber={savePositions.requestNumber}
          onClick={onClosePendingReqModal}
          onCloseModal={onClosePendingReqModal}
          actionText={requestStatusMessage(savePositions.staffName).actionText}
          appearance={EComponentAppearance.PRIMARY}
          loading={loading}
        />
      )}
    </Stack>
  );
};

export { VerificationForm };
