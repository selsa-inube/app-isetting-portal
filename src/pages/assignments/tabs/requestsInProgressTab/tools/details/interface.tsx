import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon, Text } from "@inubekit/inubekit";
import { detailsLabels } from "@config/assignments/requestTab/table/generic/detailsLabels";
import { labelsOfTraceability } from "@config/requestsInProgressTab/details/labelsOfTraceability";
import { RequestsInProcess } from "./requestsInProcess";
import { MoreDetails } from "@pages/assignments/moreDetails";
import { portalId } from "@config/portalId";
import { IEntry } from "@ptypes/design/table/IEntry";
import { moreLabelsDetails } from "@config/assignments/details/moreLabelsDetails";
import { moreDetailsModal } from "@config/assignments/details/moreDetailsModal";
import { IDetailsUI } from "@ptypes/assignments/request/IDetailsUI";
import { EComponentAppearance } from "@enum/appearances";
import { StyledContainerIcon } from "./styles";

const DetailsUI = (props: IDetailsUI) => {
  const {
    data,
    isMobile,
    showModal,
    showMoreDetailsModal,
    screenTablet,
    labelsOfRequestDetails,
    normalizeDataMoreDetails,
    title,
    smallScreen,
    pageLength,
    columnWidths,
    handleMoreDetails,
    onToggleModal,
  } = props;

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
            {detailsLabels.titleMobile}
          </Text>
        )}
      </StyledContainerIcon>

      {showModal && (
        <RequestsInProcess
          data={data}
          title={title}
          labelsOfRequest={labelsOfRequestDetails}
          labelsOfTraceability={labelsOfTraceability}
          onCloseModal={onToggleModal}
          isMobile={isMobile}
          onClick={handleMoreDetails}
        />
      )}

      {showMoreDetailsModal && (
          <MoreDetails
          data={normalizeDataMoreDetails as IEntry}
          labelsDetails={moreLabelsDetails}
          isMobile={smallScreen}
          portalId={portalId}
          onCloseModal={onToggleModal}
          title={moreDetailsModal.titleDetails}
          moreDetailsModal={moreDetailsModal}
          pageLength={pageLength}
          columnWidths={columnWidths}
        />
      )}
    </>
  );
};

export { DetailsUI };
