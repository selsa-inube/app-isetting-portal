import { Button, Stack } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

import { labels } from "@config/verificationTitles";
import { EComponentAppearance } from "@enum/appearances";

import { AddUserVerificationStepSection } from "./VerificationStepSection";
import { IAddUserVerificationForm } from "@ptypes/users/tabs/userTab/addUser/forms/verificationForm/IAddUserVerificationForm";
import { addUserSteps } from "@config/users/addUsers/assisted/steps";
import { useVerificationForm } from "@src/hooks/users/tabs/userTab/addUser/saveUsers/useVerificationForm";
import { requestStatusMessage } from "@src/config/positions/requestStatusMessage";
import { requestProcessMessage } from "@src/config/request/requestProcessMessage";
import { RequestProcess } from "@src/design/feedback/requestProcess";
import { RequestStatusModal } from "@src/design/modals/requestStatusModal";
import { DecisionModal } from "@src/design/modals/decisionModal";
import { finishModal } from "@src/config/assignments/assisted/finishModal";

const AddUserVerificationForm = (props: IAddUserVerificationForm) => {
  const {
    updatedData,
    onPreviousStep,
    onToggleModal,
    handleStepChange,
    saveUsers,
    onCloseRequestStatus,
    showPendingReqModal,
    onCloseProcess,
    onClosePendingReqModal,
    requestSteps,
    showRequestProcessModal,
    showModal,
    onSubmit,
  } = props;
  const filteredSteps = addUserSteps.filter(
    (step) => step.name.toLowerCase() !== labels.verification
  );

  const {
    isMobile,
    canShowRequestProcess,
    canShowPendingRequest,
  } = useVerificationForm({
    showRequestProcessModal,
    saveUsers,
    showPendingReqModal,
  });

  return (
    <Stack direction="column" gap={basic.spacing.s300}>
      {filteredSteps.map((step) => (
        <AddUserVerificationStepSection
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
        onClick={onSubmit}
      />)}

      {canShowRequestProcess && (
        <RequestProcess
          portalId="portal"
          saveData={saveUsers}
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
          title={requestStatusMessage(saveUsers.staffName).title}
          description={
            requestStatusMessage(saveUsers.staffName).description
          }
          requestNumber={saveUsers.requestNumber}
          onClick={onClosePendingReqModal}
          onCloseModal={onClosePendingReqModal}
          loading={false}
          actionText={
            requestStatusMessage(saveUsers.staffName).actionText
          }
          appearance={EComponentAppearance.PRIMARY}
        />
      )}
    </Stack>
  );
};

export { AddUserVerificationForm };
