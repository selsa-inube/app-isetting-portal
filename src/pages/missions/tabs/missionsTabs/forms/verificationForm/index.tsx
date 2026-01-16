import { MdOutlineArrowBack } from "react-icons/md";
import { Button, Stack } from "@inubekit/inubekit";

import { DecisionModal } from "@design/modals/decisionModal";
import { RequestStatusModal } from "@design/modals/requestStatusModal";

import { basic } from "@design/tokens";
import { useVerification } from "@hooks/missions/useVerificationForm";
import { Accordion } from "@design/data/acordion";
import { EComponentAppearance } from "@enum/appearances";

import { verificationLabels } from "@config/missions/missionTab/assisted/verification";
import { IVerificationForm } from "@ptypes/missions/assisted/IVerificationForm";
import { requestStatusMessage } from "@config/request/requestStatusMessage";
import { RequestProcess } from "@design/feedback/requestProcess";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { finishModal } from "@config/missions/missionTab/assisted/finishModal";
import { VerificationBoxes } from "./verificationBoxes";

const VerificationForm = (props: IVerificationForm) => {
  const {
    requestSteps,
    showModal,
    showRequestProcessModal,
    updatedData,
    saveMission,
    showPendingReqModal,
    loading,
    handleStepChange,
    onFinishForm,
    onPreviousStep,
    onToggleModal,
    onCloseRequestStatus,
    onClosePendingReqModal,
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
    saveMission,
    showPendingReqModal,
  });

  return (
    <Stack direction="column" gap={basic.spacing.s300}>
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
              appearance={EComponentAppearance.DARK}
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
          appearance={EComponentAppearance.GRAY}
        >
          {verificationLabels.previous}
        </Button>

        <Button
          fullwidth={isMobile}
          onClick={onToggleModal}
          appearance={EComponentAppearance.PRIMARY}
        >
          {verificationLabels.finally}
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
          saveData={saveMission}
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
          title={requestStatusMessage(saveMission.staffName).title}
          description={
            requestStatusMessage(saveMission.staffName).description
          }
          requestNumber={saveMission.requestNumber}
          onClick={onClosePendingReqModal}
          onCloseModal={onClosePendingReqModal}

          actionText={
            requestStatusMessage(saveMission.staffName).actionText
          }
          appearance={EComponentAppearance.PRIMARY}
          loading={loading}
        />
      )}
    </Stack>
  );
};

export { VerificationForm };
