import { Stack, useMediaQuery } from "@inubekit/inubekit";

import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { statusFlowAutomatic } from "@config/status/statusFlowAutomatic";
import { noStaffName } from "@config/noStaffName";
import { IRequestProcessContent } from "@ptypes/design/IRequestProcessContent";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { RequestProcessModal } from "@design/modals/requestProcessModal";

const RequestProcess = (props: IRequestProcessContent) => {
  const {
    descriptionRequestProcess,
    portalId,
    requestProcessSteps,
    saveData,
    descriptionRequestStatus,
    onCloseRequestStatus,
    onCloseProcess,
  } = props;

  const isMobile = useMediaQuery("(max-width: 768px)");

  const staffDisplayName = saveData?.staffName ?? noStaffName.label;

  return (
    <Stack
      direction="column"
      gap={basic.spacing.s300}
      justifyContent="center"
      alignContent="center"
    >
      {saveData &&
        saveData.requestStatus !== "" &&
        (statusFlowAutomatic.includes(saveData.requestStatus ?? "") ? (
          <RequestProcessModal
            portalId={portalId}
            title={descriptionRequestProcess.title}
            description={descriptionRequestProcess.description}
            requestSteps={requestProcessSteps}
            isMobile={isMobile}
            sizeIcon="28px"
            onClose={onCloseProcess}
          />
        ) : (
          <RequestStatusModal
            portalId={portalId}
            title={descriptionRequestStatus(staffDisplayName).title}
            description={descriptionRequestStatus(staffDisplayName).description}
            requestNumber={saveData.requestNumber}
            onClick={onCloseRequestStatus}
            onCloseModal={onCloseRequestStatus}
            loading={false}
            actionText={descriptionRequestStatus(staffDisplayName).actionText}
            appearance={EComponentAppearance.PRIMARY}
          />
        ))}
    </Stack>
  );
};

export { RequestProcess };
