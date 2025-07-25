import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon, useMediaQuery, Text } from "@inubekit/inubekit";
import { useModalLabelsAndActions } from "@hooks/positions/useModalLabelsAndActions";
import { TableView } from "@pages/positions/tabs/positionsTabs/forms/detailsModal/detailsPositionsModal/tableView";
import { LabelsInfo } from "@pages/positions/tabs/positionsTabs/forms/detailsModal/detailsPositionsModal/labelsInfo";
import { ModalWrapper } from "@design/modals/modalWrapper";
import { BorderStack } from "@design/layout/borderStack";
import { basic } from "@design/tokens";
import { EComponentAppearance } from "@enum/appearances";
import { labelsOfRequest } from "@config/requestsInProgressTab/details/labelsOfRequest";
import { detailsMoreDetails } from "@config/requestsInProgressTab/details/detailsRequestInProgressModalMoreDetails";
import { labelsOfTraceability } from "@config/requestsInProgressTab/details/labelsOfTraceability";
import { IDetails } from "@ptypes/traceabilityCard/IDetails";
import { StyledContainerIcon } from "./styles";
import RequestTitleSection from "../requestsInProcess/requestTitleSection";
import { RequestsInProcess } from "../requestsInProcess";

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
  const { hasLabels } = useModalLabelsAndActions({labels});
  return (
    <>
      <StyledContainerIcon onClick={onToggleModal} $isTablet={screenTablet}>
        <Icon
          appearance={EComponentAppearance.DARK}
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
          labelActionButton={detailsMoreDetails.labelCloseButton}
          labelCloseButton={detailsMoreDetails.labelCloseButton}
          labelCloseModal={detailsMoreDetails.labelCloseModal}
          title={detailsMoreDetails.title}
          onCloseModal={onToggleMoreDetailsModal}
          onClick={onToggleMoreDetailsModal}
        >
          <BorderStack
            direction="column"
            borderRadius={basic.spacing.s100}
            border={EComponentAppearance.DARK}
            boxSizing="border-box"
            width="100%"
            height="100%"
            gap={basic.spacing.s200}
            padding={isMobile ? basic.spacing.s150 : basic.spacing.s200}
          >
            <RequestTitleSection requestType={detailsMoreDetails.title} />
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
