import { Tabs } from "@inubekit/inubekit";

import { ModalWrapper } from "@design/modals/modalWrapper";
import { portalId } from "@config/portalId";

import { TrazabilityTab } from "./trazabilityTab";
import { ErrorTab } from "./errorTab";
import { IRequestsInProcess } from "@ptypes/requestsInProgress/IRequestsInProcess";
import { detailsRequestInProgressModal } from "@config/requestsInProgressTab/details/detailsRequestInProgressModal";

const RequestsInProcess = (props: IRequestsInProcess) => {
  const {
    data,
    title,
    labelsOfRequest,
    labelsOfTraceability,
    isSelected,
    filteredTabs,
    showTrazabilityData,
    showErrorData,
    isMobile,
    onTabChange,
    onCloseModal,
    onClick,
  } = props;

  return (
    <ModalWrapper
      portalId={portalId}
      width={isMobile ? "335px" : "600px"}
      isMobile={isMobile}
      labelActionButton={detailsRequestInProgressModal.labelActionButton}
      labelCloseButton={detailsRequestInProgressModal.labelCloseButton}
      labelCloseModal={detailsRequestInProgressModal.labelCloseModal}
      iconBeforeButton={detailsRequestInProgressModal.iconBeforeButton}
      title={detailsRequestInProgressModal.title}
      withCancelButton={true}
      onCloseModal={onCloseModal}
      onClick={onClick}
      fullwidthbutton
    >
      <Tabs
        tabs={filteredTabs}
        selectedTab={isSelected}
        onChange={onTabChange}
      />
      {showTrazabilityData && (
        <TrazabilityTab
          data={data}
          title={title}
          isMobile={isMobile}
          labelsOfRequest={labelsOfRequest}
          labelsOfTraceability={labelsOfTraceability}
        />
      )}

      {showErrorData && (
        <ErrorTab
          data={data}
          title={detailsRequestInProgressModal.errorTitle}
          isMobile={isMobile}
          labelsOfRequest={labelsOfRequest}
        />
      )}
    </ModalWrapper>
  );
};

export { RequestsInProcess };
