import { RequestStatus } from "@design/feedback/requestStatus";
import { RequestProcess } from "@design/feedback/requestProcess";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { statusFlowAutomatic } from "@config/status/statusFlowAutomatic";
import { IContentHandler } from "@ptypes/modals/IContentHandler";

const ContentHandler = (props: IContentHandler) => {
  const {
    descriptionRequestProcess,
    requestProcessSteps,
    saveData,
    descriptionRequestStatus,
    onCloseRequestStatus,
    isMobile,
  } = props;
  if (!saveData || !saveData.requestStatus || !saveData.requestNumber) {
    return null;
  }

  return statusFlowAutomatic.includes(saveData.requestStatus) ? (
    <RequestProcess
      title={descriptionRequestProcess.title}
      description={descriptionRequestProcess.description}
      appearance={ComponentAppearance.SUCCESS}
      requestSteps={requestProcessSteps}
      isMobile={isMobile}
      sizeIcon={isMobile ? "20px" : "32px"}
    />
  ) : (
    <RequestStatus
      portalId="portal"
      title={
        descriptionRequestStatus(
          saveData.requestNumber,
          saveData.settingRequestId
        ).title
      }
      requestNumber={saveData.requestNumber}
      description={
        descriptionRequestStatus(
          saveData.requestNumber,
          saveData.settingRequestId
        ).description
      }
      onClick={onCloseRequestStatus}
      onCloseModal={onCloseRequestStatus}
      isLoading={false}
      actionText={
        descriptionRequestStatus(
          saveData.requestNumber,
          saveData.settingRequestId
        ).actionText
      }
      appearance={ComponentAppearance.PRIMARY}
    />
  );
};

export { ContentHandler };
