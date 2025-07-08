import { ModalWrapper } from "@design/modals/modalWrapper";
import { BorderStack } from "@design/modals/borderStack";
import { basic } from "@design/tokens";
import { detailsRequestInProgressModal } from "@config/requestsInProgressTab/details/detailsRequestInProgressModal";
import { IRequestsInProcess } from "@ptypes/requestsInProgress/IRequestsInProcess";
import RequestTitleSection from "./requestTitleSection";
import RequestDetailBoxes from "./requestDetailBoxes";
import TraceabilitySection from "./traceabilitySection";
import { EComponentAppearance } from "@enum/appearances";

const RequestsInProcess = (props: IRequestsInProcess) => {
  const {
    data,
    labelsOfRequest,
    labelsOfTraceability,
    isMobile,
    onCloseModal,
    onClick,
  } = props;
  return (
    <ModalWrapper
      portalId="portal"
      width={isMobile ? "335px" : "600px"}
      isMobile={isMobile}
      labelActionButton={detailsRequestInProgressModal.labelActionButton}
      labelCloseButton={detailsRequestInProgressModal.labelCloseButton}
      labelCloseModal={detailsRequestInProgressModal.labelCloseModal}
      iconBeforeButton={detailsRequestInProgressModal.iconBeforeButton}
      title={detailsRequestInProgressModal.title}
      withCancelButton
      onCloseModal={onCloseModal}
      onClick={onClick}
    >
      <BorderStack
        direction="column"
        borderRadius={basic.spacing.s100}
        border={EComponentAppearance.DARK}
        boxSizing="border-box"
        width="auto"
        height={isMobile ? "400px" : "430px"}
        gap={basic.spacing.s200}
        padding={isMobile ? basic.spacing.s150 : basic.spacing.s200}
      >
        <RequestTitleSection requestType={data.request} />

        <BorderStack
          overflowY="auto"
          boxSizing="border-box"
          wrap="wrap"
          width="100%"
          gap={isMobile ? basic.spacing.s075 : basic.spacing.s150}
        >
          <RequestDetailBoxes
            labels={labelsOfRequest}
            data={data}
            isMobile={isMobile}
          />
          <TraceabilitySection
            traceability={data.traceability}
            isMobile={isMobile}
            labels={labelsOfTraceability}
          />
        </BorderStack>
      </BorderStack>
    </ModalWrapper>
  );
};

export { RequestsInProcess };
