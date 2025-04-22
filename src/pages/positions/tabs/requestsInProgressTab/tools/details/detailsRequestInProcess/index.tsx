import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { Icon, useMediaQuery, Text, inube } from "@inubekit/inubekit";
import { IDetails } from "@ptypes/traceabilityCard/IDetails";
import { labelsOfRequest } from "@config/requestsInProgressTab/details/labelsOfRequest";
import { labelsOfTraceability } from "@config/requestsInProgressTab/details/labelsOfTraceability";
import { DetailsPosition } from "@config/positions/details";
import { LabelsInfo } from "@pages/positions/tabs/positionsTabs/forms/detailsModal/detailsPositionsModal/labelsInfo";
import { UseModalLabelsAndActions } from "@hooks/positions/useModalLabelsAndActions";
import { ModalWrapper } from "@design/modals/modalWrapper";
import { detailsRequestInProgressModal } from "@config/requestsInProgressTab/details/detailsRequestInProgressModal";
import { BorderStack } from "@design/modals/borderStack";
import { TableView } from "@pages/positions/tabs/positionsTabs/forms/detailsModal/detailsPositionsModal/tableView";
import { basic } from "@design/tokens";
import { StyledContainerIcon } from "./styles";
import { RequestsInProcess } from "../requestsInProcess";
import RequestTitleSection from "../requestsInProcess/requestTitleSection";

const DetailsRequestInProcess = (props: IDetails) => {
  const {
    data,
    showModal,
    onToggleModal,
    showMoreMission,
    isMobile,
    onToggleMoreDetailsModal,
    labels,
    infoData,
    dataTable,
  } = props;
  const screenTablet = useMediaQuery("(max-width: 1200px)");
  const { hasLabels } = UseModalLabelsAndActions(labels);
  return (
    <>
      <StyledContainerIcon onClick={onToggleModal} $isTablet={screenTablet}>
        <Icon
          appearance={ComponentAppearance.DARK}
          icon={<MdOutlineRemoveRedEye />}
          size={screenTablet ? "20px" : "16px"}
          cursorHover
          spacing="narrow"
        />
        {screenTablet && (
          <Text type="body" size="medium">
            Detalles
          </Text>
        )}
      </StyledContainerIcon>

      {showModal && (
        <RequestsInProcess
          data={data}
          onCloseModal={onToggleModal}
          labelsOfTraceability={labelsOfTraceability}
          labelsOfRequest={labelsOfRequest}
          isMobile={screenTablet}
          onClick={onToggleMoreDetailsModal}
        />
      )}
      {showMoreMission && (
        <ModalWrapper
          portalId="portal"
          width={isMobile ? "335px" : "600px"}
          isMobile={isMobile}
          labelActionButton={detailsRequestInProgressModal.labelCloseButton}
          labelCloseButton={detailsRequestInProgressModal.labelCloseButton}
          labelCloseModal={detailsRequestInProgressModal.labelCloseModal}
          title={detailsRequestInProgressModal.title}
          onCloseModal={onToggleMoreDetailsModal}
          onClick={onToggleMoreDetailsModal}
        >
          <BorderStack
            direction="column"
            background={inube.palette.neutral.N0}
            borderRadius={basic.spacing.s100}
            border={inube.palette.neutral.N40}
            boxSizing="border-box"
            width="100%"
            height="100%"
            gap={basic.spacing.s200}
            padding={isMobile ? basic.spacing.s150 : basic.spacing.s200}
          >
            <RequestTitleSection
              requestType={DetailsPosition.detailsPositions}
            />
            <LabelsInfo
              labels={labels}
              infoData={infoData.configurationRequestData}
              hasLabels={hasLabels}
            />
            {dataTable && <TableView dataTable={dataTable} />}
          </BorderStack>
        </ModalWrapper>
      )}
    </>
  );
};

export { DetailsRequestInProcess };
