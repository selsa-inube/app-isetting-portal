import { MdOutlineArrowBack } from "react-icons/md";
import { Button, Stack } from "@inubekit/inubekit";

import { useVerification } from "@hooks/assignments/useVerificationForm";
import { DecisionModal } from "@design/modals/decisionModal";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { basic } from "@design/tokens";
import { Accordion } from "@design/data/acordion";
import { BoxAttribute } from "@design/feedback/boxAttribute";
import { RequestProcess } from "@design/feedback/requestProcess";
import { requestStatusMessage } from "@config/request/requestStatusMessage";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { portalId } from "@config/portalId";
import { finishModal } from "@config/assignments/assisted/finishModal";
import { verificationLabels } from "@config/assignments/assisted/verification";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { IVerificationForm } from "@ptypes/assignments/assisted/IVerificationForm";
import { VerificationBoxes } from "./verificationBoxes";

const VerificationForm = (props: IVerificationForm) => {
  const {
    requestSteps,
    showModal,
    showRequestProcessModal,
    updatedData,
    saveAssignments,
    showPendingRequestModal,
    loading,
    absentOfficialSelected,
    handleStepChange,
    onFinishForm,
    onPreviousStep,
    onToggleModal,
    onCloseRequestStatus,
    onClosePendingRequestModal,
    onCloseProcess,
  } = props;

  const {
    steps,
    gapStack,
    isMobile,
    canShowRequestProcess,
    canShowPendingRequest,
  } = useVerification({
    showRequestProcessModal,
    saveAssignments,
    showPendingRequestModal,
  });

  return (
    <Stack direction="column" gap={basic.spacing.s300}>
      {absentOfficialSelected && (
        <BoxAttribute
          direction="column"
          label={verificationLabels.absenteeManager}
          value={`Si, ${absentOfficialSelected}`}
        />
      )}

      {steps.map((step) => (
        <Accordion title={step.name} key={`${step.id}-box`}>
          <Stack
            direction="column"
            width="100%"
            alignItems="flex-end"
            gap={gapStack}
          >
            <VerificationBoxes
              updatedData={updatedData}
              stepKey={Number(step.id)}
              isMobile={isMobile}
            />

            <Button
              iconBefore={<MdOutlineArrowBack />}
              onClick={() => handleStepChange(step.number)}
              appearance={ComponentAppearance.DARK}
              variant="none"
            >
              {verificationLabels.returnStep}
            </Button>
          </Stack>
        </Accordion>
      ))}
      <Stack justifyContent="flex-end" gap={basic.spacing.s250}>
        <Button
          fullwidth={isMobile}
          onClick={onPreviousStep}
          appearance={ComponentAppearance.GRAY}
        >
          {verificationLabels.previous}
        </Button>

        <Button
          fullwidth={isMobile}
          onClick={onToggleModal}
          appearance={ComponentAppearance.PRIMARY}
        >
          {verificationLabels.finally}
        </Button>
      </Stack>

      {showModal && (
        <DecisionModal
          portalId={portalId}
          title={finishModal.title}
          description={finishModal.description}
          actionText={finishModal.actionText}
          onCloseModal={onToggleModal}
          onClick={onFinishForm}
        />
      )}
      {canShowRequestProcess && (
        <RequestProcess
          portalId={portalId}
          saveData={saveAssignments}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          requestProcessSteps={requestSteps}
          appearance={ComponentAppearance.SUCCESS}
          onCloseRequestStatus={onCloseRequestStatus}
          onCloseProcess={onCloseProcess}
        />
      )}
      {canShowPendingRequest && (
        <RequestStatusModal
          portalId={portalId}
          title={requestStatusMessage(saveAssignments.staffName).title}
          description={
            requestStatusMessage(saveAssignments.staffName).description
          }
          requestNumber={saveAssignments.requestNumber}
          onClick={onClosePendingRequestModal}
          onCloseModal={onClosePendingRequestModal}
          actionText={
            requestStatusMessage(saveAssignments.staffName).actionText
          }
          appearance={ComponentAppearance.PRIMARY}
          loading={loading}
        />
      )}
    </Stack>
  );
};

export { VerificationForm };
