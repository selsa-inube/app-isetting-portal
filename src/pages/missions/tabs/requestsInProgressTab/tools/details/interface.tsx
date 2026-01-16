import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon, Text } from "@inubekit/inubekit";

import { EComponentAppearance } from "@enum/appearances";
import { IDetailsUI } from "@ptypes/missions/requestTab/IDetailsUI";
import { detailsLabels } from "@config/missions/requestTab/table/generic/detailsLabels";
import { labelsOfTraceability } from "@config/requestsInProgressTab/details/labelsOfTraceability";
import { StyledContainerIcon } from "./styles";
import { RequestsInProcess } from "./requestsInProcess";
import { labelsOptions } from "@config/missions/missionTab/table/labelsOptions";
import { DetailsMissionModal } from "@pages/missions/tools/detailsModal/detailsMissionModal";

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
    titleMoreDetails,
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
        <DetailsMissionModal
          infoData={normalizeDataMoreDetails ?? {}}
          labels={labelsOptions}
          onClose={handleMoreDetails}
          smallScreen={screenTablet}
          title={titleMoreDetails}
        />
      )}
    </>
  );
};

export { DetailsUI };
