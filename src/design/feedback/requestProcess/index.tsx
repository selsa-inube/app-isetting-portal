import { Stack, useMediaQuery } from "@inubekit/inubekit";
import { statusFlowAutomatic } from "@config/status/statusFlowAutomatic";
import { RequestProcessModal } from "@design/modals/requestProcessModal";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { IRequestProcess } from "@ptypes/requestsInProgress/IRequestProcess";

const RequestProcess = (props: IRequestProcess) => {
  const {
    descriptionRequestProcess,
    portalId,
    requestProcessSteps,
    saveData,
    descriptionRequestStatus,
    onCloseRequestStatus,
  } = props;

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Stack
      direction="column"
      gap={basic.spacing.s300}
      justifyContent="center"
      alignContent="center"
    >
      {saveData &&
        saveData.requestStatus !== "" &&
        (statusFlowAutomatic.includes(saveData.requestStatus) ? (
          <RequestProcessModal
            portalId={portalId}
            title={descriptionRequestProcess.title}
            description={descriptionRequestProcess.description}
            appearance={ComponentAppearance.SUCCESS}
            requestSteps={requestProcessSteps}
            isMobile={isMobile}
            sizeIcon="28px"
          />
        ) : (
          <RequestStatusModal
            portalId={portalId}
            title={
              descriptionRequestStatus(
                saveData.responsible ?? "uno de nuestros funcionarios"
              ).title
            }
            description={
              descriptionRequestStatus(
                saveData.responsible ?? "uno de nuestros funcionarios"
              ).description
            }
            requestNumber={saveData.requestNumber}
            onClick={onCloseRequestStatus}
            onCloseModal={onCloseRequestStatus}
            isLoading={false}
            actionText={
              descriptionRequestStatus(
                saveData.responsible ?? "uno de nuestros funcionarios"
              ).actionText
            }
            appearance={ComponentAppearance.PRIMARY}
          />
        ))}
    </Stack>
  );
};

export { RequestProcess };
export type { IRequestProcess };
